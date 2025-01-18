import React, { useState } from 'react';
import './ScheduleView.css';

export default function ScheduleView({ language }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [
    { name: language === 'bg' ? 'Понеделник' : 'Monday', short: 'Пн' },
    { name: language === 'bg' ? 'Вторник' : 'Tuesday', short: 'Вт' },
    { name: language === 'bg' ? 'Сряда' : 'Wednesday', short: 'Ср' },
        { name: language === 'bg' ? 'Четвъртък' : 'Thursday', short: 'Чт' },

  ];
  const days2 = [
    { name: language === 'bg' ? 'Петък' : 'Friday', short: 'Пт' },
    { name: language === 'bg' ? 'Събота' : 'Saturday', short: 'Сб' },
    { name: language === 'bg' ? 'Неделя' : 'Sunday', short: 'Нд' },
  ];
  const handleDayClick = (day) => {
    setSelectedDay(day.name);
    alert(`${language === 'bg' ? 'Избран ден:' : 'Selected Day:'} ${day.name}`);
  };
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">
        {language === 'bg' ? 'Седмичен график' : 'Weekly Schedule'}
      </h2>
      <div className="schedule-grid">
      
        {days?.map((day, index) => (
          <div
            key={index}
            className={`schedule-day ${selectedDay === day.name ? 'selected' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            <div className="schedule-day-name">{day.short}</div>
            <div className="schedule-time">
              {language === 'bg' ? 'Свободно време' : 'Available Time'}
            </div>
            <ul className="time-slots">
              {['09:00', '12:00', '15:00', '18:00'].map((time, i) => (
                <li key={i} className="time-slot">
                  {time}
                </li>
              ))}
            </ul>
          </div>            
        ))}
                {days2?.map((day, index) => (
          <div
            key={index}
            className={`schedule-day ${selectedDay === day.name ? 'selected' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            <div className="schedule-day-name">{day.short}</div>
            <div className="schedule-time">
              {language === 'bg' ? 'Свободно време' : 'Available Time'}
            </div>
            <ul className="time-slots">
              {['09:00', '12:00', '15:00', '18:00'].map((time, i) => (
                <li key={i} className="time-slot">
                  {time}
                </li>
              ))}
            </ul>
          </div>            
        ))}
      </div>
     
    </div>
  );
}