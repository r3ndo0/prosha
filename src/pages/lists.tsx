import ListOfTodos from "@/components/ListOfTodos";
import ListsNav from "@/components/ListsNav";
import { GetServerSideProps } from "next";
import getUser from "@/libs/getUser";

function Lists() {
  return (
    <>
      <ListsNav />
      <ListOfTodos />
    </>
  );
}

export default Lists;
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
