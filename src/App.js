import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Footer from './componet/Footer';
import Main from './componet/main/Main';
import Calculator from './componet/calculator/Calculator';
import Header from './componet/Header';

import {Route, Routes } from 'react-router-dom';
import Music from './componet/music/Music';
import Summary from './componet/summary/Summay';




function App() {
  

  return (
    <div className="App">
        <h1>My Portfolio Project </h1>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/music' element={<Music/>} />
        </Routes>
        <Footer/>
        

    </div>
  );
}

export default App;


