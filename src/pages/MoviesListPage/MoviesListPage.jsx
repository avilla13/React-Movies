import MovieCard from '../../components/MovieCard/MovieCard';

export default function MoviesListPage({ movies }) {
  return (
    <main>
      <h1>MoviesListPage</h1>
      <div className="movies-grid">
        {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </main>
  )
}
