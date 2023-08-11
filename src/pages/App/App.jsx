import { useState } from 'react';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import LoginPage from '../LoginPage/LoginPage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { user ?
        <>
          <MoviesListPage />
        </>
        :
        <LoginPage />
      }
    </main>
  );
}

export default App;
