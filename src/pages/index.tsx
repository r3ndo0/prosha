import { GetServerSideProps } from "next";
import getUser from "@/libs/getUser";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // Sign In Handler - There are 2 Users in the stored in the Database with prefixed fields
  //this is Just a showcase of 2 Users with and without access to the settings Page
  const signInHandler = async (username: string) => {
    try {
      const res = await axios.post("/api/auth", {
        username,
        password: "password",
      });
      if (res.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="bg-gray-900 w-screen h-screen flex gap-12 justify-center items-center">
        <button
          onClick={() => signInHandler("user1")}
          className="rounded-3xl text-gray-900 shadow-md shadow-gray-700 w-72 h-72 hover:bg-green-400 bg-green-500 flex flex-col justify-around items-center"
        >
          <FaUserAlt size={120} />
          <h2 className="text-lg max-w-[70%]  font-bold">
            Sign In As The User With Access To The Settings Page
          </h2>
        </button>
        <button
          onClick={() => signInHandler("user2")}
          className="rounded-3xl text-gray-900 shadow-md shadow-gray-700 w-72 h-72 hover:bg-rose-400 bg-rose-500 flex flex-col justify-around items-center"
        >
          <FaUserAlt size={120} />
          <h2 className="text-lg max-w-[70%]  font-bold">
            Sign In As The User WithOut Access To The Settings Page
          </h2>
        </button>
      </main>
    </>
  );
}

//restricting user access to home page if he/she is already signed in

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
      props: {},
    };
  } else {
    return {
      props: {},
    };
  }
};
