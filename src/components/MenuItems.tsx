import { useAppSelector } from "@/features/rudexHooks";
import { clearUser, UserSlice } from "@/features/user/userSlice";
import Link from "next/link";
import { removeCookies } from "cookies-next";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/features/rudexHooks";

export default function MenuItems() {
  const router = useRouter();
  //Accessing User's Authorities To Check If He Should Be Able To Click On Settings Link
  const user = useAppSelector((store) => store.userSlice);
  const accessToTheSettingsPage = user?.accessToTheSettingsPage;
  const dispatch = useAppDispatch();

  //SignOut Functionality (Removing Token From The Browser Cookies) and clearing the UserSlice
  const signOut = () => {
    removeCookies("token");
    dispatch(clearUser());
    router.push("/");
  };
  return (
    <>
      <Link
        className="h-full w-full text-center flex justify-center items-center  text-gray-200 border-b-2 rounded-t-lg "
        href="/lists"
      >
        Lists
      </Link>
      <Link
        className={`h-full w-full ${
          !accessToTheSettingsPage && "bg-gray-400 cursor-default"
        } text-center flex justify-center items-center  border-b-2 text-gray-200`}
        href={accessToTheSettingsPage ? "/settings" : ""}
      >
        Settings
      </Link>
      <button
        onClick={() => signOut()}
        className="h-full w-full text-gray-200 bg-rose-700 rounded-b-lg"
      >
        Sign Out
      </button>
    </>
  );
}
