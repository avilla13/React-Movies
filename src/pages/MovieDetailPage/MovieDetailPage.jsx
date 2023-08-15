import { useParams } from "react-router-dom";
import './MovieDetailPage.css';

export default function MovieDetailPage({movies}) {
  let { movieName } = useParams();
  const movie = movies.find((movie) => movie.title === movieName);
  
  return (
    <div className="movie-page">
      <div className="detail-area">
        <div className="movie-details">
          <h1>{movie.title}</h1>
          <h3>Released: {movie.releaseDate}</h3>
          <h3>Cast Members: </h3>
          <ul>
            {movie.cast.map((castMember, idx) => (
              <li key={idx}>{castMember}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={movie.posterPath} alt={movie.title} />
        </div>
      </div>
    </div>
  )
}
