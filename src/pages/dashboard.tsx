import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { removeCookies } from "cookies-next";
import getUser from "@/libs/getUser";
import { setUser, UserSlice } from "@/features/user/userSlice";
import { useAppDispatch } from "@/features/rudexHooks";
import { useEffect } from "react";

function Dashboard(user: UserSlice) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  const signOut = () => {
    removeCookies("token");
    router.push("/");
  };
  return (
    <div>
      <button onClick={() => signOut()}>get Out</button>
    </div>
  );
}

export default Dashboard;

// ------------------------------------

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);
  if (user) {
    return {
      props: user,
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
};
