import React, { useState } from 'react';
import { Bell, Calendar, MapPin } from 'lucide-react';
import './HomeView.css';
import Feedback from './Feedback';

export default function HomeView({ language }) {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(true);
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
        <a
          href="https://www.google.com/maps?q=42.6975,23.3242"
          target="_blank"
          rel="noopener noreferrer"
          className="item-title text-blue-500 underline"
        >
          {language === 'bg' ? 'Виж картата' : 'Look on the map'}
        </a>
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

      <div className="card">
        <h2 className="card-title">
          {language === 'bg' ? 'Виж камери у дома' : 'See camera at home'}
        </h2>
        <div className="card-content">
          <div className="card-item" onClick={() => window.open('https://www.shutterstock.com/image-photo/playback-cctv-cameras-office-on-600nw-2266583461.jpg', '_blank')} style={{ cursor: 'pointer' }}>
            <MapPin size={24} className="icon" />
            <div>
              <p className="item-title">
                {language === 'bg' ? 'Преглед' : 'View'}
              </p>
            </div>
            <div>
              <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN18zZF9pbGx1c3RyYXRpb25fb2ZfYV9zZWN1cml0eV9jYW1lcmFfY3V0ZV9jYV82ODAzYTY5Ny1mZDZhLTQ3NTMtYTg1NS01OTNjNjExZjViOGUucG5n.png" alt="home camera" />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">
          {language === 'bg' ? 'Виж камери в парка' : 'See camera at park'}
        </h2>
        <div className="card-content">
          <div className="card-item" onClick={() => window.open('https://weather-webcam.eu/webcam-hija-aleko/', '_blank')} style={{ cursor: 'pointer' }}>
            <MapPin size={24} className="icon" />
            <div>
              <p className="item-title">
                {language === 'bg' ? 'Преглед' : 'View'}
              </p>
            </div>
            <div>
              <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zMl9taW5pbWFsX2Nsb3NldXBfcGhvdG9fb2ZfY2N0dl9jYW1lcmFfbGlnaHRpbl8wODY3NjNlMy05YzhmLTRjODgtODNhZi05OGY4YjZmYjdiMDVfMi5wbmc.png" alt="park camera" />
            </div>
          </div>
        </div>
      </div>

      <img src="https://i.etsystatic.com/41848622/r/il/1ca32e/4709957142/il_fullxfull.4709957142_5guc.jpg" alt="dog" className="dog" />
      {isFeedbackVisible && <Feedback language={language} onClose={() => setIsFeedbackVisible(false)} />}
    </div>
  );
}
