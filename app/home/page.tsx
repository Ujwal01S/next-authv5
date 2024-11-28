import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import LogOut from "../components/logOut";

const Home = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div className="flex flex-col items-center m-4">
      {session?.user.name && session?.user.image ? (
        <>
          <h1 className="text-2xl my-2">{session.user.name}</h1>
          <Image
            src={session.user.image as string}
            alt={session.user.name as string}
            height={72}
            width={72}
            className="rounded-full"
          />
        </>
      ) : (
        <>
          <p className="text-2xl">{session.user.email}</p>
        </>
      )}

      <LogOut />
    </div>
  );
};

export default Home;
