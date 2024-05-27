import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter> */}
      {/* <NavbarComponent /> */}
      
      <Home />
    </div>
  );
}

export default App;
