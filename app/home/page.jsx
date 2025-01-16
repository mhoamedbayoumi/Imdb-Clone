"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function App() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/home/movies");
    }
  }, [isSignedIn, router]);

  if (isSignedIn === undefined) {
    // Auth state is still loading
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isSignedIn ? (
        // You can return null or any loading message while redirecting
        <p>Redirecting...</p>
      ) : (
        <p className="text-center font-bold text-3xl p-52">You are not signed in.</p>
      )}
    </div>
  );
}

