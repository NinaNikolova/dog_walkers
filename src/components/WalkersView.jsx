import React from 'react';
import './WalkersView.css';

export default function WalkersView({ language }) {
  const walkers = [
    {
      name: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      rating: 4.9,
      walks: 500,
      specialties: language === 'bg' ? ['Големи породи', 'Тренировки'] : ['Large breeds', 'Training']
    },
    {
      name: language === 'bg' ? 'Георги Димитров' : 'George Dimitrov',
      rating: 4.8,
      walks: 350,
      specialties: language === 'bg' ? ['Малки породи', 'Игри'] : ['Small breeds', 'Games']
    }
  ];

  return (
    <div className="walkers-container">
      {walkers.map((walker, index) => (
        <div key={index} className="walker-card">
          <div className="avatar">
            <img className="avatar-icon" src="https://static-00.iconduck.com/assets.00/avatar-default-icon-1975x2048-2mpk4u9k.png" alt="person" />
         
          </div>
          <div>
            <h3 className="walker-name">{walker.name}</h3>
            <div className="walker-info">
              <span>⭐ {walker.rating}</span>
              <span>• {walker.walks}+ {language === 'bg' ? 'разходки' : 'walks'}</span>
            </div>
            <div className="walker-specialties">
              {walker.specialties.map((specialty, i) => (
                <span key={i} className="specialty-badge">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
