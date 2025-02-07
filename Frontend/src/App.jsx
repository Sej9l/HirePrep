import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
// import Roadmap from './Components/Roadmap'
import Problems from './Components/Problems'
import Core from './Components/Core'
// import PageNotFound from './Components/PageNotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/roadmap" element={<Roadmap />} /> */}
        <Route path="/problems" element={<Problems />} />
        <Route path="/core" element={<Core />} />
        {/* <Route path="*" element={<PageNotFound/>} /> */}

      </Routes>
    </Router>
  );
}

export default App;
