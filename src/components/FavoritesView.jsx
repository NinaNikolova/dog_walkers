import React from 'react';
import './FavoritesView.css';

export default function FavoritesView({ language, favoriteWalkers }) {
  return (
    <div className="favorites-container">
      <h2 className="favorites-title">
        {language === 'bg' ? 'Любими разхождачи' : 'Favorite Walkers'}
      </h2>
      <ul className="favorites-list">
        {favoriteWalkers?.length > 0 ? (
          favoriteWalkers.map((walker, index) => (
            <li key={index} className="favorite-item">
              <div className="walker-avatar">
                {/* Replace with actual avatar */}
              </div>
              <div className="walker-info">
                <h3 className="walker-name">{walker.name}</h3>
                <p className="walker-description">{walker.description}</p>
              </div>
            </li>
          ))
        ) : (
          <p className="no-favorites">
            {language === 'bg' ? 'Нямате любими разхождачи.' : 'You have no favorite walkers.'}
          </p>
        )}
      </ul>
    </div>
  );
}
