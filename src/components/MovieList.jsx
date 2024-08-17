import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const baseImgUrl = "https://image.tmdb.org/t/p/w500/";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  //* parametre olarak gelen katogoriye ait filmleri apiden al
  useEffect(() => {
    //* apiye gönderilecek olan parametre belirle
    const params = {
      with_genre: genre.id,
    };
    //* API'ye istek at ve cevabı state'e aktar
    api
      .get("/discover/movie", { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, [genre]);

  return (
    <div className="my-10">
      {<h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>}
      <Splide
        options={{
          pagination: false,
          autoWidth: true,
          gap: "10px",
        }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px] h-full cursor-pointer rounded"
                src={baseImgUrl + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
