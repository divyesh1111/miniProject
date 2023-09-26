import {signOut} from "next-auth/react";
import Link from "next/link";
import React from "react";

function authuser({session}) {
  function handleSignOut() {
    signOut();
  }
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500"
        >
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link legacyBehavior href={"/profile"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Profile Page
          </a>
        </Link>
      </div>
    </main>
  );
}

export default authuser;
