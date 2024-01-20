import React, { useState } from "react";
import { Form, Navigate, useSearchParams } from "react-router-dom";
import { AiFillExclamationCircle } from "react-icons/ai";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });

  return null;
}

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const loginMessage = searchParams.get("message");

  return (
    <div className="flex items-center flex-col text-center justify-center w-full h-full relative text-white">
      {loginMessage && (
        <h1 className="text-lg text-orange-700 font-bold flex items-center gap-1 absolute top-[150px]">
          {loginMessage} <AiFillExclamationCircle />
        </h1>
      )}

      <Form method="post" className="flex flex-col h-[400px] w-[350px]">
        <h1 className="text-3xl font-bold mb-10 ">Sign in to your account</h1>
        <input
          name="email"
          className="p-3 rounded-md mb-0.5 bg-black/100 border-[1px] border-white/10 outline-none
          placeholder:text-white/50"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          className="p-3 rounded-md mb-5  bg-black/100 border-[1px] border-white/10 outline-none	 placeholder:text-white/50"
          type="password"
          placeholder="Password"
        />
        <button className="bg-orange-600 p-3 rounded-md text-white mb-5">
          Sign in
        </button>
        <h1 className="">
          Don't have an account?
          <span className="text-orange-500 cursor-pointer">
            {" "}
            create one now
          </span>
        </h1>
      </Form>
    </div>
  );
};

export default Login;
