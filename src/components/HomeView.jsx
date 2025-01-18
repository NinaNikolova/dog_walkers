import React from 'react'
import { Bell, Calendar, MapPin} from 'lucide-react';
export default function HomeView({language}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
              {language === 'bg' ? 'Предстоящи разходки' : 'Upcoming Walks'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <Calendar size={24} className="text-green-600" />
                <div>
                  <p className="font-semibold">
                    {language === 'bg' ? 'Днес, 15:00' : 'Today, 15:00'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'bg' ? 'с Мария' : 'with Maria'}
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
              {language === 'bg' ? 'Последни активности' : 'Recent Activities'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <Bell size={24} className="text-green-600" />
                <div>
                  <p className="font-semibold">
                    {language === 'bg' ? 'Ново съобщение' : 'New Message'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'bg' ? 'от Георги' : 'from George'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
              {language === 'bg' ? 'Къде е в момента моето куче' : 'Where is my dog now'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <MapPin size={24} className="text-green-600" />
                <div>
                  <p className="font-semibold">
                    {language === 'bg' ? 'Виж картата' : 'look on the map'}
                  </p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
