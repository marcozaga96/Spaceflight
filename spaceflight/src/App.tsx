import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyNav/>}/>
      </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
