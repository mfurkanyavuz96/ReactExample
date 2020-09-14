import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import ListElements from "./components/lists"

function App() {
  return (
    <Router>
      <Route path="/" exact component={ListElements} />
    </Router>
  );
}

export default App;
