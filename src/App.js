import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home'
import DinoGame from "./components/dinosaurGame/dinoGame";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>{/* USE ELEMENT ATTRIBUTE TO REFER TO COMPONENTS*/}
          <Route path="/dinoGame" element={<DinoGame/>}/>
        </Routes>      
      </Router>
      </div>
  );
}

export default App;
