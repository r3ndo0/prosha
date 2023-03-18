import { GetServerSideProps } from "next";
import getUser from "@/libs/getUser";
function Settings() {
  return (
    <div className="w-screen h-screen text-[100px] text-gray-400 bg-gray-200 font-extrabold flex items-center justify-center">
      Settings
    </div>
  );
}

export default Settings;
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);
  if (user?.accessToTheSettingsPage) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
      props: {},
    };
  }
};
