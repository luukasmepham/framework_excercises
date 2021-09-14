import React from 'react';
import './App.css';
import Header from './components/Header';
import MainNews from './components/MainNews';
import Notification from './components/Notification';
import SideNews from './components/SideNews';

function App() {
  return (
    <div>
      <Header />
      <Notification />
      <MainNews />
      <SideNews />
    </div>
  );
}

export default App;
