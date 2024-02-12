
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './screens/Login';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Birthdays from './screens/Birthdays';




function App() {
  return (
   <Router>
   <div>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/birthdays" element={<Birthdays />}/>
      
    </Routes>
   </div>
   </Router>
  );
}

export default App;
