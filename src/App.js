import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from './pages/News'
import Odds from './pages/Odds'
import Tips from './pages/Tips'
import Scores from './pages/Scores'
// import MyTweet from './components/twitter/twitter';
import BookMaker from './pages/BookMaker'
import './App.css'

function App() {
  return (
  <BrowserRouter className='main-App'>
  <Navbar/>
  <Routes>
    {/* <Route path='/' element ={<Navbar/>}/> */}
    <Route index element={<News/>} />
    <Route path="odds" element={<Odds/>} />
    <Route path="tips" element={<Tips/>} />
    <Route path="scores" element={<Scores/>} />
    <Route path="bookmaker" element={<BookMaker/>} />
  </Routes>
  {/* <MyTweet/> */}
  </BrowserRouter>
  )
}

export default App
