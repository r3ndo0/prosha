import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
