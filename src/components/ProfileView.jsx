import React from 'react'
import User from './User';

export default function ProfileView({language}) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
        
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              {language === 'bg' ? 'Иван Иванов' : 'Ivan Ivanov'}
            </h2>
            <p className="text-gray-600">
              {language === 'bg' ? 'София, България' : 'Sofia, Bulgaria'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
