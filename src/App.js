import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Questionaire from './pages/Questionaire'
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';

function App() {
  return (
    <div className="App">
     <Router>

      <Routes>

        <Route path="/" exact element={<Dashboard/>}/>
        <Route path="/questionaire" exact element={<Questionaire/>}/>
        <Route path="/create" exact element={<Create/>}/>

      </Routes>

     </Router>
    </div>
  );
}

export default App;
