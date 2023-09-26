import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import LandingPage from "./components/LandingPage/LandigPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import About from "./components/About/About"


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />     
          <Route path='/about' element={<About />} />
          <Route path='/videogames/:id' element={<Details />} />
          <Route path='/createGame' element={<Create />} />
        </Routes>
      </Router>
      </div>
   
  );
}

export default App;