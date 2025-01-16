"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { toast, Bounce } from "react-toastify";

export default function SubmitButton({ movie }) {
  const { isSignedIn, user } = useUser();

  // Check if the user is signed in
  if (!isSignedIn) {
    return null;
  }

  const name = user.fullName;
  const email = user.primaryEmailAddress?.emailAddress;

  const AddToFavorite = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          movieName: movie.title,
          movieDescription: movie.overview,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add movie to favorites");
      }

      // Display success toast
      toast.success("🦄 Movie added to your list!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (err) {
      console.error(err);

      // Display error toast
      toast.error("❌ Failed to add movie to your list!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <button
      onClick={AddToFavorite}
      className="text-base bg-red-600 p-2 font-semibold hover:bg-red-800 rounded-sm"
    >
      Add to favorite
    </button>
  );
}
