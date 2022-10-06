import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export default class Content extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={< Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    )
  }
}