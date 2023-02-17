import './App.css';
import React from "react";
import Navbar from './components/navbar';
import Allroutes from './routes/route';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
    </div>
  );
}

export default App;
