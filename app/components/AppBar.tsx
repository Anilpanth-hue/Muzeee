"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function AppBar() {
  const session = useSession();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Muzi</div>
        <div>
          {session.data?.user && (
            <button
              style={{
                margin: "2px",
                padding: "2px",
                background: "blue",
              }}
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
          {!session.data?.user && (
            <button
              style={{
                margin: "2px",
                padding: "2px",
                background: "blue",
              }}
              onClick={() => signIn()}
            >
              SignIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
