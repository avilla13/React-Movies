import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';
import { movies } from '../../data';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  function loginUser(user) {
    setUser(user);
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorsListPage movies={movies} />} />
          </Routes>
        </>
        :
        <LoginPage loginUser={loginUser} />
      }
    </main>
  );
}
