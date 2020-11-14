import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'
import Navbar from './components/Navbar/Navbar';
import './App.css'

const App = () => {
  const [mode, setMode] = useState("light");
  return (
    <Router>
      <div class="dark-toogle">
        <input type="checkbox" class="toogle-check" id="dark_mode" onChange={() => setMode(mode === "dark" ? "light" : "dark")} />
        <label class="dark-label" for="dark_mode"></label>
      </div>
      <Navbar theme={mode} />
      <Route path="/" exact component={() => <Join theme={mode} />} />
      <Route path="/chat" render={(routeParams) => <Chat routeParams={routeParams} theme={mode} />} />
    </Router>
  )
}

export default App


