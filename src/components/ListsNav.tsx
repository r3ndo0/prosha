import { useAppSelector } from "@/features/rudexHooks";
import { UserSlice } from "@/features/user/userSlice";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";
export default function ListsNav() {
  //Accessing UserSlice to Display User's Username On The Navbar
  const user = useAppSelector((store) => store.userSlice);

  return (
    <nav className=" mb-8 flex justify-between px-24 items-center bg-gray-900 py-4 text-gray-200 w-full ">
      <Link className="  border-gray-200  p-2" href="/dashboard">
        <MdKeyboardBackspace size={35} />
      </Link>
      <h2 className="text-center text-4xl">User : {user && user.username}</h2>
    </nav>
  );
}
