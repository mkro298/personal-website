import React from 'react'
import {Home, Projects, About, Resume} from './pages'
import "./App.css"
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom"; 

const App = () => {
  return (
    <>  
      <Router>
        <Routes>
        <Route 
          exact 
          path = "/"
          element={<Home />}
        />
        <Route 
          exact 
          path = "/projects"
          element={<Projects />}
        />
        <Route 
          exact 
          path = "/experiences"
          element={<Resume />}
        />
        <Route 
          exact 
          path = "/about"
          element={<About />}
        />
        </Routes>
      </Router>
    </>
  ); 
}

export default App