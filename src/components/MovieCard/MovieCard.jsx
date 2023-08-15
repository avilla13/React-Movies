import { Link } from "react-router-dom";
import './MovieCard.css';

export default function MovieCard({movie}) {
    const title = movie.title;

    return (
        <Link to={`/movies/${title}`} >
            <div className="movie-card" style={{ backgroundImage: `url(${movie.posterPath})` }}>
                <div className="movie-info">
                    <h2>{title}</h2>
                    <h4>{movie.releaseDate}</h4>
                </div>
            </div>            
        </Link>
    )
}