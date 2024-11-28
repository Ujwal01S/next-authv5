"use client";
import React from "react";
import SocialForm from "./socialForm";
import { doCredentialLogin } from "../actions";
import { useRouter } from "next/navigation";
import Link from "next/link";


const LoginForm = () => {
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const formDataObj: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value.toString();
      });
      console.log(formDataObj);

      const response = await doCredentialLogin(formData);
      if (!!response?.error) {
        console.log(response?.error);
      } else {
        router.push("/products");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <div className="flex">
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
          Credential Login
        </button>
      </form>

      <SocialForm />
      <p>Don't have an account? <Link href="/register" className="underline">Register</Link> </p>
    </>
  );
};

export default LoginForm;
