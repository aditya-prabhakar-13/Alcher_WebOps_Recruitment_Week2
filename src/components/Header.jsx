import React from 'react';

export default function Header({ setSearchTerm }) {
  return (
    <header className="header">
      <div className="logo">plex</div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <nav>
        <button className="active">Home</button>
        <button>Live TV</button>
        <button>On Demand</button>
        <button>Discover</button>
      </nav>
      <button className="sign-in">Sign In</button>
    </header>
  );
}