import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();
  const { data } = api.posts.getAll.useQuery();
  return (
    <>
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
      <div>
        {data?.map((post) => (
          <div key={post.id} >{post.content}</div>
        ))}
      </div>
    </>
  );
}
