// src/components/Popup.jsx
import React from 'react';

export default function Popup({ movie, onClose }) {
  const title = movie.original_title || "Untitled";
  const poster = movie.poster_path || "https://via.placeholder.com/300x450?text=No+Image";
  const description = movie.overview || "No description available.";
  const cast = movie.casts || [];

  return (
    <div
      className="popup"
      style={{
        backgroundImage: `url(${poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="popup-content" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
        <button className="close" onClick={onClose}>&times;</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <img
            src={poster}
            alt={title}
            style={{ maxWidth: 200, borderRadius: 8, boxShadow: '0 0 10px rgba(0,0,0,0.6)' }}
          />
          <div style={{ flex: 1, minWidth: 250 }}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <h3 style={{ marginTop: '2rem' }}>Cast of {title}</h3>
        <div className="cast-list" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingTop: '1rem' }}>
          {cast.map((actor, i) => {
            const photo = actor?.photo?.startsWith('http')
              ? actor.photo
              : 'https://via.placeholder.com/100?text=No+Photo';
            return (
              <div key={i} className="cast-member" style={{ textAlign: 'center' }}>
                <img
                  src={photo}
                  alt={actor?.name || 'Unknown'}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '0.5rem',
                  }}
                />
                <p style={{ fontSize: '0.9rem', color: '#fff' }}>{actor?.name || 'Unknown'}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
