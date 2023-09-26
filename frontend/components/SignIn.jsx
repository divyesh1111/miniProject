import React from "react";

import Wrapper from "./Wrapper";
import Link from "next/link";

const SignUp = () => {
  return (
    <Wrapper>
      <div className=" text-center mx-auto px-6 py-6 h-[1000px] border border-gray-900 rounded-3xl  my-8">
        <div className=" block font-extrabold text-3xl  m-6">
          {/* <Link href="/"> 
                    <img src="/logo.svg" className="  m-3 items-center w-[40px] " />
            </Link> */}
          SIGN UP
        </div>
        <div className=" align-middle font-extrabold py-6 text-2xl">
          BECOME A NIKE MEMBER
        </div>
        <div className="relative text-slate-500">
          Create your NIKE Member profile and get first access to the <br />{" "}
          very best of NIKE products, inspiration and community.
        </div>

        <div className="relative overflow-hidden">
          <div>
            <label className="block">
              <input
                className="placeholder-gray-500 border rounded-md   px-2 py-2 my-4 w-80 "
                placeholder="Email address"
              />
            </label>
          </div>
          <div>
            <label className="block">
              <input
                type="password"
                className="placeholder-gray-500 rounded-md w-80 border px-2 py-2 my-2  "
                placeholder="Password"
              />
            </label>
          </div>

          <div>
            <label className="block">
              <input
                className="placeholder-gray-500 border rounded-md   px-2 py-2 my-4 w-80 "
                placeholder="First Name"
              />
            </label>
          </div>

          <div>
            <label className="block">
              <input
                className="placeholder-gray-500 border rounded-md   px-2 py-2 my-4 w-80 "
                placeholder="Last Name"
              />
            </label>
          </div>

          <div>
            <label className=" block">
              <input
                className="placeholder-gray-500 border rounded-md   px-2 py-2 my-4 w-80 "
                type="date"
                placeholder="Date Of Birth"
              ></input>
            </label>
          </div>
          <div className="text-slate-500">
            Get a NIKE Member Reward every year on your Birthday.
          </div>
          <div className="my-4">
            {" "}
            Already a Member
            <Link href={"/"} className="text-md text-slate-400 underline">
              Sign In
            </Link>
          </div>
          <div className="my-4 text-sm">
            By logging in, you agree to NIKE's{" "}
            <Link href={"/"} className="underline hover:font-semibold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href={"/"} className="underline hover:font-semibold">
              Terms of Use
            </Link>
          </div>
          <button
            type="button"
            className=" w-80 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            JOIN US
          </button>
          <div>
            Not a Member?
            <span>
              {" "}
              <Link href={"/sign"} className="underline hover:font-semibold">
                Sign In.{" "}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
