import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'
import Navbar from './components/Navbar/Navbar';
import './App.css'

const App = () => {
  const [mode, setMode] = useState("dark");
  return (
    <Router>
      <button id="mode-toggle" onClick={() => setMode(mode === "dark" ? "light" : "dark")}>Mode</button>
      <Navbar theme={mode} />
      <Route path="/" exact component={() => <Join theme={mode} />} />
      <Route path="/chat" component={() => <Chat theme={mode} />} />
    </Router>
  )
}

export default App


