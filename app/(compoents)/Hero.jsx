import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Discover Your Next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 animate-pulse">
            Favorite Movie
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Explore thousands of movies, from timeless classics to the latest blockbusters. Find recommendations, reviews, and more.
        </p>
        <Link href={"./home"} className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
          Explore Movies
        </Link>
      </div>
      {/* Image */}
      <div className="lg:w-1/2">
        <Image
          src="/movie-night.svg" // Replace with your image path
          alt="Movie Hero Image"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </div>
  )
}
