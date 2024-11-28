import React from "react";
import { doSocialLogin } from "../actions";

const SocialForm = () => {
  return (
    <form className="flex gap-4" action={doSocialLogin}>
      <button
        className="bg-cyan-500 text-white p-3 rounded text-lg"
        type="submit"
        value="google"
        name="action"
      >
        Sign in With Google
      </button>

      <button
        className="bg-green-500 text-white p-3 rounded text-lg"
        type="submit"
        value="github"
        name="action"
      >
        Sign in With Github
      </button>
    </form>
  );
};

export default SocialForm;
