import React from 'react';
import './App.css';
import Header from './components/Header';
import MainNews from './components/MainNews';
import Notification from './components/Notification';
import SideNews from './components/SideNews';

function App() {
  return (
    <div className='App'>
      <Header />
      <Notification topic='HS-ANALYYSI: ' body='alksdjlaksdjlaksjdlaksjdlaksdj' />
      <Notification topic='HS-ANALYYSI: ' body='alksdjlaksdjlaksjdlaksjdlaksdj' />
      <Notification topic='HS-ANALYYSI: ' body='alksdjlaksdjlaksjdlaksjdlaksdj' />
      <div className='newsContent'>
        <MainNews />
        <SideNews />
      </div>
    </div>
  );
}

export default App;
