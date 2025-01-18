import React from 'react';
import './ScheduleView.css';

export default function ScheduleView({ language }) {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">
        {language === 'bg' ? 'Седмичен график' : 'Weekly Schedule'}
      </h2>
      <div className="schedule-grid">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day, index) => (
          <div key={index} className="schedule-day">
            <div className="schedule-day-name">{day}</div>
            <div className="schedule-time">15:00</div>
          </div>
        ))}
      </div>
    </div>
  );
}
