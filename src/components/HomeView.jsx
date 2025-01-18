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
            <div>
              <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjgzLTAxNjEucG5n.png" alt="walking" />
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
            <div>
              <img src="https://png.pngtree.com/png-vector/20230508/ourmid/pngtree-sms-icon-dialog-chat-new-message-gmail-email-vector-png-image_7090469.png" alt="message" />
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
           <div>
              <img src="https://s13emagst.akamaized.net/products/71497/71496723/images/res_a906fb81418f89ef43440cd1e216ddd5.jpg?width=720&height=720&hash=D03E0FFD0CCDAB70537FED911E0985C7" alt="ring" />
            </div>
          </div>
        </div>
        
     
      </div>

      <div className="card">
        <h2 className="card-title">
          {language === 'bg' ? 'Виж предстоящи нечовешки събития' : 'See upcoming dog events'}
        </h2>
        <div className="card-content">
          <div className="card-item">
            <MapPin size={24} className="icon" />
            <div>
              <p className="item-title">
                {language === 'bg' ? 'Виж картата' : 'Look on the map'}
              </p>
            </div>
           <div>
              <img src="https://thumbs.dreamstime.com/b/group-seven-puppies-featuring-playful-expressions-sit-together-driveway-enjoying-warm-sunshine-group-seven-340349326.jpg" alt="ring" />
            </div>
          </div>
        </div>
        
     
      </div>
    </div>
  );
}
