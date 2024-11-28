import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

import { CircleUserRound } from "lucide-react";
import LogOut from "./logOut";

const Navbar = async () => {
  const session = await auth();
  console.log(session?.user);

  //console.log(loggedInUser);

  return (
    <header className="flex justify-between bg-slate-900 text-white p-2">
      <Link href="/">
        <h1 className="text-2xl">Product App</h1>
      </Link>
      <nav>
        <ul className="flex pt-1">
          {session?.user.name ? (
            <li className="flex">
              <Link href="/dashboard">
                {session?.user?.image ? (
                  <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                ) : (
                  <CircleUserRound />
                )}
              </Link>
              <span className="mx-1">|</span>
              <LogOut />
            </li>
          ) : (
            <>
              <li className="mx-2">
                <Link href="/login">Login</Link>
              </li>
              <li className="mx-2">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
