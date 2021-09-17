import React from 'react';
import './App.css';
import Header from './components/Header';
import MainNews from './components/MainNews';
import Notification from './components/Notification';
import SideNews from './components/SideNews';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Notification topic='HS-ANALYYSI: ' body='alksdjlaksdjlaksjdlaksjdlaksdj' color='rgb(65, 150, 164)'/>
      <Notification topic='PÄIVÄN TIMANTTI: ' body='alksdjlaksdjlaksjdlaksjdlaksdj' color='rgb(65, 150, 164)'/>
      <Notification topic='MAINOS: ' body='alksdjlaksdjlaksjdlaksjdlaksdj' color='rgba(0,184,224)'/>
      <div className='newsContent'>
        <div className='main'>
          <div className='News'>
            <MainNews
              topic='Zuckeberg todistetusti robotti' 
              synopsis='Päivittyvä seuranta: ' 
              body='Zuckerbergin kehosta löydetty komponentteja' 
              image='https://tra.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FBIN.2F2020.2F03.2F04.2Ffea8624c-1118-45f9-9b95-9a5609fe6f17.2Ejpeg/960x722/quality/80/thumbnail.jpeg'
            />
          </div>
          <div className='News'>
            <MainNews
              topic='Facebook miljardööri ei olekaan robotti' 
              synopsis='Facebook: ' 
              body='Kehosta löydetyt komponentit olivatkin pohatan aamupalasta.' 
              image='https://api.time.com/wp-content/uploads/2016/01/ap_794116323555.jpg'
            />
          </div>
        </div>
        <div className='side'>
          <div className='sideHeader'>
            <h2> Luetuimmat </h2>
          </div>
          <SideNews topic='Facebook' body='Pörssi laskussa, tutkijat tutkivat asiaa.' />
          <SideNews topic='Microsoft' body='Pörssi nousussa, kannattaa sijoittaa jos löytyy ylimääräistä rahaa' />
          <SideNews topic='Google' body='Konkursissa. Ei voi mitään, sanoo Marin.' />
          <SideNews topic='Apple' body='Romahtanut. Sama homma ku Googlella!' />
          <SideNews topic='Facebook' body='Pörssi laskussa' />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
