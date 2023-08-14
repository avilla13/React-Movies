import { Link } from "react-router-dom";

export default function MovieCard({movie}) {
    const title = movie.title;

    return (
        <Link to={`/movies/${title}`} >
            <div className="movie-card" style={{ backgroundImage: `url(${movie.posterPath})` }}>
                <div>
                    <h3>{title}</h3><br />
                    {movie.releaseDate}
                </div>
            </div>            
        </Link>
    )
}