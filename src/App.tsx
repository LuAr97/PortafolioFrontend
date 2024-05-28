import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Introduction from './components/Introduction';
import Home from './pages/Home';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
        <Routes>
          <Route path="/home" element={<Home /> }/>
        </Routes>
      </BrowserRouter> */}
      <Home />
      
      
    </div>
  );
}

export default App;
