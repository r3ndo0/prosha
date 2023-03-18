import ListOfTodos from "@/components/ListOfTodos";
import { useAppSelector } from "@/features/rudexHooks";
import { UserSlice } from "@/features/user/userSlice";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";

function Lists() {
  const { username } = useAppSelector((store) => store.userSlice) as UserSlice;

  return (
    <>
      <nav className=" mb-8 flex justify-around items-center bg-gray-900 py-4 text-gray-200 w-full ">
        <Link className="flex justify-start items-center p-2" href="/dashboard">
          <MdKeyboardBackspace />
          Back
        </Link>
        <h2 className="text-center text-5xl">List of Todos</h2>
        <h2>User : {username}</h2>
      </nav>
      <ListOfTodos />
    </>
  );
}

export default Lists;
