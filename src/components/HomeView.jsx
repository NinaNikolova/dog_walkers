import React from 'react';
import { Bell, Calendar, MapPin } from 'lucide-react';
import './HomeView.css';

export default function HomeView({ language }) {
  return (
    <div className="home-container">
      <div className="card">
        <h2 className="card-title">
          {language === 'bg' ? 'Предстоящи разходки' : 'Upcoming Walks'}
        </h2>
        <div className="card-content">
          <div className="card-item">
            <Calendar size={24} className="icon" />
            <div>
              <p className="item-title">
                {language === 'bg' ? 'Днес, 15:00' : 'Today, 15:00'}
              </p>
              <p className="item-subtitle">
                {language === 'bg' ? 'с Мария' : 'with Maria'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">
          {language === 'bg' ? 'Последни активности' : 'Recent Activities'}
        </h2>
        <div className="card-content">
          <div className="card-item">
            <Bell size={24} className="icon" />
            <div>
              <p className="item-title">
                {language === 'bg' ? 'Ново съобщение' : 'New Message'}
              </p>
              <p className="item-subtitle">
                {language === 'bg' ? 'от Георги' : 'from George'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">
          {language === 'bg' ? 'Къде е в момента моето куче?' : 'Where is my dog now?'}
        </h2>
        <div className="card-content">
          <div className="card-item">
            <MapPin size={24} className="icon" />
            <div>
              <p className="item-title">
                {language === 'bg' ? 'Виж картата' : 'Look on the map'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
