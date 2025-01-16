import React from 'react'
import { SignedIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import DeleteButton from '../(compoents)/DeleteMovie';
async function fetchFavoriteMovies() {
    const res = await fetch("http://localhost:3000/api/movies"); // Fetch data from the API
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    return res.json();
  }
export default async function page() {
    const data = await fetchFavoriteMovies();
    const movies = data; 
    console.log(movies);
  return (
    <SignedIn>
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">
          Favorite Movies
        </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies?.map((movie) => (
              <div
              key={movie._id}
              className="block hover:scale-105 transition-transform duration-300"
            >
              <div
                key={movie._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 truncate">
                    {movie.movieName}
                  </h2>
                  <DeleteButton id={movie._id}/>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SignedIn>
  )
}
