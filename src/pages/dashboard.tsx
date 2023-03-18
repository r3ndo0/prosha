import { GetServerSideProps } from "next";
import getUser from "@/libs/getUser";
import { setUser, UserSlice } from "@/features/user/userSlice";
import { useAppDispatch } from "@/features/rudexHooks";
import { useEffect } from "react";
import DashboardNav from "@/components/DashboardNav";

function Dashboard(user: UserSlice) {
  //putting user data into the userSlice (which btw is not neccesary but to demonstrate how to achieve that)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <div>
      <DashboardNav />
      <div className="h-full w-full  text-center mt-36 ">
        <h2 className="font-extrabold text-7xl text-gray-300">Dashboard</h2>
        <h2 className="text-xl mt-12 font-extrabold text-gray-500">
          Get Started By Clicking On Your Profile
        </h2>
      </div>
    </div>
  );
}

export default Dashboard;

// Restricting User's Access To The Dashboard If He Is Not Signed In
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
