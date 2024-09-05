import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponents from './components/FetchComponents';
import Details from './components/Details';

const App=() => {
  return (
    <header>
      <MyNav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FetchComponents/>}/>
        <Route path='/details/:id'element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
