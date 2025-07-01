// src/components/Section.jsx
import React, { useEffect, useRef } from 'react';
import MovieCard from './MovieCard';

export default function Section({ title, movies, onMovieClick }) {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;
    let isDown = false;
    let startX, scrollLeft;

    const startDrag = (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.classList.add('dragging');
    };
    const endDrag = () => {
      isDown = false;
      container.classList.remove('dragging');
    };
    const drag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', startDrag);
    container.addEventListener('mouseleave', endDrag);
    container.addEventListener('mouseup', endDrag);
    container.addEventListener('mousemove', drag);

    return () => {
      container.removeEventListener('mousedown', startDrag);
      container.removeEventListener('mouseleave', endDrag);
      container.removeEventListener('mouseup', endDrag);
      container.removeEventListener('mousemove', drag);
    };
  }, []);

  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="scroll-container" ref={scrollRef}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onClick={() => onMovieClick(movie)} />
        ))}
      </div>
    </section>
  );
}
