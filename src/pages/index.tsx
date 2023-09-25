import Head from "next/head";
import Link from "next/link";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";


import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { user } = useUser();


  return (
    <>
      <Head>
        <title>Dapan PH</title>
        <meta name="description" content="Welcome to Dapan Philippines. Shop from classic styles to the trendsetting shoes. For as low as 70% OFF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {user ? (
            <SignOutButton><span className = "text-white cursor-pointer">Sign out</span></SignOutButton>
          ) : (
            <SignInButton><span className = "text-white cursor-pointer">Sign in</span></SignInButton>
          )}
        </div>
      </main>
    </>
  );
}
