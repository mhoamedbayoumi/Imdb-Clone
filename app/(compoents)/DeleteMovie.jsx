"use client"
import React from 'react'
import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { toast,Bounce } from 'react-toastify'
export default function DeleteButton({id}) {
const { isSignedIn, user } = useUser();
if(!isSignedIn) {
    return null;
  }
const name=user.fullName;
const email=user.primaryEmailAddress?.emailAddress;
const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/movies/${id}`, {
        method: "DELETE",
      });
      toast.success("🦄 Movie deleted from your list!", {
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
      console.log(err);
      toast.error("❌ Failed to delete movie to your list!", {
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
    <button onClick={()=>handleDelete()} className="text-base bg-red-600 p-2 font-semibold hover:bg-red-800 rounded-sm">Delete movie</button>
  )
}