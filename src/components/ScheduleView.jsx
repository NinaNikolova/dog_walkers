import React from 'react'

export default function ScheduleView({language}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        {language === 'bg' ? 'Седмичен график' : 'Weekly Schedule'}
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day, index) => (
          <div key={index} className="text-center p-4 border rounded">
            <div className="font-bold mb-2">{day}</div>
            <div className="text-sm text-gray-600">15:00</div>
          </div>
        ))}
      </div>
    </div>
  );
}
