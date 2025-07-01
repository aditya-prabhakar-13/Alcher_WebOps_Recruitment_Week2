// src/App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Popup from './components/Popup';
import './styles/styles.css';

const apiUrl = "https://jsonfakery.com/movies/paginated";

export default function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [sections] = useState(["Featured Movies", "Binge-Worthy Shows", "Most Popular in India"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let combined = [];
        for (let i = 1; i <= 3; i++) {
          const res = await fetch(`${apiUrl}?page=${i}`);
          const data = await res.json();
          combined = combined.concat(data.data);
        }
        setAllMovies(combined);
        setFilteredMovies(combined);
      } catch (err) {
        console.error("API fetch failed:", err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const results = allMovies.filter(movie =>
      movie.original_title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(results);
  }, [searchTerm, allMovies]);

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <main>
        {searchTerm ? (
          <Section
            title={`Search Results for "${searchTerm}"`}
            movies={filteredMovies}
            onMovieClick={setSelectedMovie}
          />
        ) : (
          sections.map((title, index) => {
            const chunkSize = Math.ceil(allMovies.length / sections.length);
            const start = index * chunkSize;
            const end = start + chunkSize;
            return (
              <Section
                key={index}
                title={title}
                movies={allMovies.slice(start, end)}
                onMovieClick={setSelectedMovie}
              />
            );
          })
        )}
      </main>
      {selectedMovie && <Popup movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </>
  );
}
