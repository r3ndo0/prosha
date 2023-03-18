import { GetServerSideProps } from "next";
import getUser from "@/libs/getUser";
import { setUser, UserSlice } from "@/features/user/userSlice";
import { useAppDispatch } from "@/features/rudexHooks";
import { useEffect } from "react";
import DashboardNav from "@/components/DashboardNav";

function Dashboard(user: UserSlice) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <div>
      <DashboardNav />
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
