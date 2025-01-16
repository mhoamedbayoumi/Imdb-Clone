import React from 'react';
import Image from 'next/image';

// Fetch movie details from the API
async function fetchMovieDetails(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5e1be4931462d1bed591049354026c8a&language=en-US`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching movie details:", err);
    return null;
  }
}

// Page component for rendering movie details
export default async function MoviePage({ params }) {
  const { id } = params; // Extract the movie ID from dynamic route parameters
  const movie = await fetchMovieDetails(id);

  if (!movie) {
    return <div className="text-center text-red-600 mt-10">Movie not found</div>;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="rounded-lg shadow-md overflow-hidden bg-white">
          {/* Movie Backdrop */}
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.title}
            width={1280}
            height={720}
            className="w-full max-h-96 object-cover"
            priority
          />
          {/* Movie Details */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {movie.title || movie.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{movie.overview}</p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600">
                Release Date: <span className="text-gray-800">{movie.release_date}</span>
              </p>
              <p className="text-sm text-gray-600">
                Rating: <span className="text-yellow-500 font-bold">{movie.vote_average}/10</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
