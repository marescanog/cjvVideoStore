import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import MovieListing from './pages/MovieListing';
import TVListing from './pages/TVListing';
import Details from './pages/Details';
import Registration from './pages/Registration';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/movies' element={<MovieListing/>} />
          <Route path='/tv' element={<TVListing/>} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Registration/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

