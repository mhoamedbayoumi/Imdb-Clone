"use client"; // Add this for client-side functionality
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

async function fetchMovies(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5e1be4931462d1bed591049354026c8a&query=${query}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch searched movies");
  }
  return res.json();
}

export default function MoviesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get the search query from the URL
  const query = searchParams.get("query") || "";

  // Fetch movies based on the search query
  useEffect(() => {
    if (query) {
      setLoading(true);
      fetchMovies(query)
        .then((data) => {
          setMovies(data.results);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setMovies([]);
        })
        .finally(() => setLoading(false));
    } else {
      // Fetch popular movies if no query is provided
      fetchMovies("a") // Default query to fetch popular movies
        .then((data) => {
          setMovies(data.results);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setMovies([]);
        });
    }
  }, [query]);

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get("search");
    router.push(`/home/search?query=${searchQuery}`);
  };

  return (
    <SignedIn>
      <div className="min-h-screen py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">
          {query ? `Search Results for "${query}"` : "Popular Movies"}
        </h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <input
            type="text"
            name="search"
            placeholder="Search for a movie..."
            defaultValue={query}
            className="px-4 py-2 w-64 sm:w-96 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition duration-300"
          >
            Search
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-600 mb-8">
            Error: {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center text-gray-400 mb-8">Loading...</div>
        )}

        {/* Movie Cards */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Link
                key={movie.id}
                href={`/home/movies/${movie.id}`}
                className="block hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                        : "/placeholder.jpg" // Fallback image
                    }
                    alt={movie.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800 truncate">
                      {movie.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                      Release Date:{" "}
                      <span className="text-gray-800">{movie.release_date}</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Rating:{" "}
                      <span className="text-yellow-500 font-bold">
                        {movie.vote_average}/10
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SignedIn>
  );
}