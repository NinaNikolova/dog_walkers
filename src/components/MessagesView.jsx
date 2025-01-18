import React from 'react'
import User from './User';

export default function MessagesView({language}) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b p-4">
        <h2 className="text-xl font-bold">
          {language === 'bg' ? 'Съобщения' : 'Messages'}
        </h2>
      </div>
      <div className="divide-y">
        <div className="p-4 hover:bg-gray-50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <User size={24} className="text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">
                {language === 'bg' ? 'Георги Димитров' : 'George Dimitrov'}
              </h3>
              <p className="text-gray-600">
                {language === 'bg' ? 'Здравейте! Кога да взема Макс?' : 'Hi! When should I pick up Max?'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
