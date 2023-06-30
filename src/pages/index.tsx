import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser();
  return (
    <>
    {!user.isSignedIn && <SignInButton />}
    {!!user.isSignedIn && <SignOutButton />}
    </>
  );
}
