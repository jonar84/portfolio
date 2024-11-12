import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() { 
  return (
    <div>    
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<Home />}></Route>
            <Route path='/project' ></Route>
            <Route path='/contact' ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
