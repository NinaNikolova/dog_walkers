// import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import WalkersView from './components/WalkersView';
import ScheduleView from './components/ScheduleView';
import MessagesView from './components/MessagesView';
import ProfileView from './components/ProfileView';
import FavoritesView from './components/FavoritesView';
import WalletView from './components/WalletView';
import SettingsView from './components/SettingsView';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [language, setLanguage] = useState('bg');

  return (
    <div className="app">
      <main className="main-content">
       <Router>
      <NavBar currentView={currentView} 
        setCurrentView={setCurrentView} 
        language={language} 
        setLanguage={setLanguage}  />
      <Routes>
        <Route path="/" element={<HomeView language={language} setLanguage={setLanguage}/>} />
        <Route path="/walkers" element={<WalkersView language={language} setLanguage={setLanguage}/>} />
        <Route path="/schedule" element={<ScheduleView language={language} setLanguage={setLanguage}/>} />
        <Route path="/messages" element={<MessagesView language={language} setLanguage={setLanguage}/>} />
        <Route path="/favorites" element={<FavoritesView language={language} setLanguage={setLanguage} />} />
        <Route path="/wallet" element={<WalletView language={language} setLanguage={setLanguage}/>} />
        <Route path="/settings" element={<SettingsView language={language} setLanguage={setLanguage}/>} />
        <Route path="/profile" element={<ProfileView language={language} setLanguage={setLanguage}/>} />
      </Routes>
    </Router>
    </main>
      {/* <main className="main-content">
        {currentView === 'home' && <HomeView language={language} />}
        {currentView === 'walkers' && <WalkersView language={language} />}
        {currentView === 'schedule' && <ScheduleView language={language} />}
        {currentView === 'messages' && <MessagesView language={language} />}
        {currentView === 'profile' && <ProfileView language={language} />}
        {currentView === 'favorites' && <FavoritesView language={language} />}
        {currentView === 'wallet' && <WalletView language={language} />}
        {currentView === 'settings' && <SettingsView language={language} />}
      </main> */}
      <Footer language={language} />
    </div>
  );
}