// src/components/MovieCard.jsx
import React from 'react';

export default function MovieCard({ movie, onClick }) {
  const title = movie.original_title || "Untitled";
  const poster = movie.poster_path || "https://via.placeholder.com/150x220?text=No+Image";

  return (
    <div
      className="card clickable"
      style={{ backgroundImage: `url(${poster})` }}
      onClick={onClick}
    >
      <div className="overlay">{title}</div>
    </div>
  );
}
