import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Profilepage from './Profilepage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration/>} />
    <Route path="/register" element={<Registration/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profilepage />} />
  </Routes>
  );
};

export default App;
