import React from 'react';
import Login from './components/login/login';
import Signup from './components/singup/signup';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Acceuille from './components/acceuille/acceuille';
import Profile from './components/profile/Profile';
import Settings from './components/settings/settings';
import Article from './components/articles/Article';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route  path="/" element={<Login/>}/>
        <Route  path="/home" element={<Acceuille/>}/>
        <Route  path="/signUp" element={<Signup/>}/>
        <Route  path="/home/:id" element={<Acceuille/>}/>
        <Route  path="/profile/:id/:idf" element={<Profile/>}/>
        <Route  path="/settings/:id" element={<Settings/>}/>
        <Route path='/articles' element={<Article/>}/>

      </Routes>
      
      </Router>
    </>
  );
}

export default App;
