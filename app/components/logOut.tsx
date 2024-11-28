import React from "react";
import { doLogOut } from "../actions";

const LogOut = () => {
  return (
    <form action={doLogOut}>
      <button type="submit" className="bg-blue-500 my-2 text-white p-1 rounded">
        Logout
      </button>
    </form>
  );
};

export default LogOut;
