import Axios from "axios";
import { useEffect, useState } from "react";

export const Movies = ({ theaterId }) => {
  // /api/theaters/:theater_id/movies
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    Axios.get(`/api/theaters/${theaterId}/movies`)
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h3>Movies</h3>
      {movies.map((movie) => (
        <>
          <a href={`/movie/${movie.id}`}>{movie.title}</a>
          <br />
        </>
      ))}
    </>
  );
};
