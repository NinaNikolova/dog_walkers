import React from 'react'

export default function FavoritesView({language}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        {language === 'bg' ? 'Любими разхождачи' : 'Favorite Walkers'}
      </h2>
    </div>
  );
}
