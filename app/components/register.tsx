"use client"

import React from "react";
import SocialForm from "./socialForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if(response.status === 201){
        router.push("/"); 
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
        <div className="flex">
          <label htmlFor="email">Name</label>
          <input
            className="border border-gray-500 mx-5 text-black"
            type="text"
            name="name"
            id="name"
          />

          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-500 mx-5 text-black"
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-500 mx-5 text-black"
            type="text"
            name="password"
            id="password"
          />
        </div>

        <button className="bg-yellow-500 text-black" type="submit">
          Register
        </button>
      </form>
      <SocialForm />
      <p>
        Already have an account?{" "}
        <Link href="/" className="underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default Register;
