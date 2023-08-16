import ActorCard from '../../components/ActorCard/ActorCard';

export default function ActorsListPage({ movies }) {
  const tempCastArray = [];
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      tempCastArray.push(actor);
    })
  })
  const castSet = new Set (tempCastArray);
  const actors = Array.from(castSet);
  console.log(actors);

  return (
    <main>
      <h1>Actors List</h1>
      <div className="cast-grid">
        {actors.map((actor, idx) => (
        <ActorCard key={idx} actor={actor} />
        ))}
      </div>
    </main>
  )
}
