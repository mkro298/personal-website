import React from 'react'
import {Home, Projects, Solutions, Resume} from './pages'
import "./App.css"
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate
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
          path = "/solutions"
          element={<Solutions />}
        />
        <Route 
          exact 
          path = "/resume"
          element={<Resume />}
        />
        </Routes>
      </Router>
    </>
  ); 
}

export default App