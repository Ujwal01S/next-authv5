"use client";

import { signIn, signOut } from "next-auth/react";

export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  //in LoginForm form tag we put action = dosocaillogin which provides action value from button tag i.e google or github
  console.log(action);
  //value will depend upon button clicked

  await signIn(action, { redirectTo: "/home" });
}


export async function doLogOut() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData: any) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    console.log(error)
    throw new Error ("Login failed");
  }
}
