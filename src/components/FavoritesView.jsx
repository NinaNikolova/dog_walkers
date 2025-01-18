import React from 'react';
import './FavoritesView.css';

export default function FavoritesView({ language }) {
  const walkers = [
    {
      name: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      rating: 4.9,
      walks: 500,
      specialties: language === 'bg' ? ['Големи породи', 'Тренировки'] : ['Large breeds', 'Training'],
      image: 'https://media.istockphoto.com/id/2168965196/photo/photo-of-nice-pretty-young-girl-toothy-smile-look-away-fresh-air-street-outdoors.jpg?s=612x612&w=is&k=20&c=ZvmYfrLJSuMs-c7eWoHZkG5WE0YSKaYJIocTr-1Rt3U=',
    },
    {
      name: language === 'bg' ? 'Георги Димитров' : 'George Dimitrov',
      rating: 4.8,
      walks: 350,
      specialties: language === 'bg' ? ['Малки породи', 'Игри'] : ['Small breeds', 'Games'],
      image: 'https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp',
    },
  ];

  const handleClick = (walker) => {
    alert(`${language === 'bg' ? 'Разхождач:' : 'Walker:'} ${walker.name}`);
  };

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">
        {language === 'bg' ? 'Любими разхождачи' : 'Favorite Walkers'}
      </h2>
      <ul className="favorites-list">
        {walkers.length > 0 ? (
          walkers.map((walker, index) => (
            <li
              key={index}
              className="favorite-item"
              onClick={() => handleClick(walker)}
            >
              <div className="walker-avatar">
                <img src={walker.image} alt={walker.name} />
              </div>
              <div className="walker-info">
                <h3 className="walker-name">{walker.name}</h3>
                <p className="walker-rating">
                  ⭐ {walker.rating} • {walker.walks}+ {language === 'bg' ? 'разходки' : 'walks'}
                </p>
                <div className="walker-specialties">
                  {walker.specialties.map((specialty, i) => (
                    <span key={i} className="specialty-badge">
                      {specialty}
                    </span>
                  ))}
                </div>
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
