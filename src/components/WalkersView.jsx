import React from 'react'
import User from './User';

export default function WalkersView({language}) {
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
    <div className="grid gap-6">
      {walkers.map((walker, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow flex items-start space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <User size={32} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{walker.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span>⭐ {walker.rating}</span>
              <span>• {walker.walks}+ {language === 'bg' ? 'разходки' : 'walks'}</span>
            </div>
            <div className="flex gap-2 mt-2">
              {walker.specialties.map((specialty, i) => (
                <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
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
