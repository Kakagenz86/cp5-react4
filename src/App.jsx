import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Users from './pages/Users';

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/User" element={<Users />}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;