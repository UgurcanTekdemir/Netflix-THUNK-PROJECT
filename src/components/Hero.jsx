import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movies);
  const baseImgUrl = "https://image.tmdb.org/t/p/original"; // baseImgUrl'in tanımlanması

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (!movies || movies.length === 0) {
    return <p>Film bulunamadı.</p>;
  }

  const i = Math.floor(Math.random() * movies.length);
  const movie = movies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title || "Çıkış Yok"}</h1>
        <p className="text-start">{movie.overview}</p>
        <p>
          <span>IMDB:</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average?.toFixed(1)}
          </span>
        </p>
        <div className="flex gap-5">
          <button className="p-2 bg-red-600 rounded hover:bg-red-700">
            Film izle
          </button>
          <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
            Liste Ekle
          </button>
        </div>
      </div>
      <div>
        <img
          className="hero-img my-4 object-contain rounded max-h-[300px]"
          src={baseImgUrl + movie.backdrop_path}
          alt={movie.title}
        />
      </div>
    </div>
  );
};

export default Hero;
