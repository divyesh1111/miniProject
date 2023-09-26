import Wrapper from "@/components/Wrapper";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import React, {useState} from "react";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import {HiFingerPrint, HiAtSymbol} from "react-icons/hi";
import {signIn} from "next-auth/react";
import {useFormik} from "formik";
import login_validate from "../lib/validate";

const Login = () => {
  const [show, setShow] = useState(false); //hook for show/hide password

  //google handler function
  async function handleGoogleSignin() {
    signIn("google", {callbackUrl: "http://localhost:3000/homepage"});
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Wrapper className="max-w-[1600px] @screen lowest:px-[10px] py-[10px] text-sm ">
      <Layout>
        <Head>
          <title>Sign In</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-black text-4xl font-bold py-4">Explore</h1>
          </div>

          {/* form */}

          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            {/* Inupt Groups */}
            <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={
                  `${styles.input_text}` +
                  `${
                    formik.errors.email && formik.touched.email
                      ? " border-rose-600"
                      : ""
                  }`
                }
                {...formik.getFieldProps("email")}
              />
              <span className={styles.icon}>
                <HiAtSymbol size={20} />
              </span>
            </div>
            {/* {formik.errors.email && formik.touched.email ? (
              <span className="text-rose-500">{formik.errors.email}</span>
            ) : (
              <></>
            )} */}

            <div className={styles.input_group}>
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={
                  `${styles.input_text}` +
                  `${
                    formik.errors.password && formik.touched.password
                      ? " border-rose-600"
                      : ""
                  }`
                }
                {...formik.getFieldProps("password")}
              />
              <span className={styles.icon} onClick={() => setShow(!show)}>
                <HiFingerPrint size={20} />
              </span>
            </div>
            {/* {formik.errors.password && formik.touched.password ? (
                <span className="text-rose-500">{formik.errors.password}</span>
              ) : (
                <></>
              )} */}

            {/* Sign in button */}
            <div>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
            <div className="py-10">
              <button
                type="button"
                onClick={handleGoogleSignin}
                className={styles.button_custom}
              >
                Sign In with Google
                <Image
                  src={"/assets/Google.svg"}
                  width="20"
                  height="20"
                  alt="googleicon"
                ></Image>
              </button>
            </div>
            {/* bottom */}
            <p className="text-center text-gray-400">
              Don't have an account yet?
              <Link href={"/register"}>
                <u className="text-black">Sign Up</u>
              </Link>
            </p>
          </form>
        </section>
      </Layout>
    </Wrapper>
  );
};

export default Login;
