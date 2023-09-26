import React from "react";
import guest from "./delivery";
import authuser from "./authuser";
import {getSession, useSession, signOut} from "next-auth/react";

function homepage() {
  const {data: session} = useSession();
  function handleSignOut() {
    signOut();
  }

  return <main>{session ? authuser({session, handleSignOut}) : guest()}</main>;
}

export default homepage;

export async function getServerSideProps({req}) {
  const session = await getSession({req});
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        Permanent: false,
      },
    };
  }
  return {
    props: {session},
  };
}
