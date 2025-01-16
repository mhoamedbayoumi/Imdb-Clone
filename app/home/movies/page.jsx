import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
async function fetchMovies() {
  const res = await fetch(process.env.pop_movie); // Fetch data from the API
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  return res.json();
}

export default async function Movies() {
  const data = await fetchMovies();
  const movies = data.results; // Array of movies

  return (
    <SignedIn>
      <div className="min-h-screen py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">
          Popular Movies
        </h1>
        <Link href={"/home/search"}>
          <h1 className="text-3xl font-bold text-center mb-8 animate-pulse">
          Need to Search ?
          </h1>
        </Link>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Link
              key={movie.id}
              href={`/home/movies/${movie.id}`} // Dynamic route for movie details
              className="block hover:scale-105 transition-transform duration-300"
            >
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                  alt={movie.title}
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover"
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