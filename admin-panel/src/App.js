import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import TripList from './components/TripList';
import AddTrip from './pages/AddTrip';
import EditTrip from './pages/EditTrip';
import Login from './account/Login';
import Register from './account/Register';
import './index.css';
import Navbar from './components/Navbar';
import logo from './images/logo.png';

const App = () => {
  // State to manage login status and admin status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Pass login state and handlers to the Navbar */}
        <Navbar 
          logo={logo} 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
          isAdmin={isAdmin} 
        />
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="/add" element={<AddTrip />} />
          <Route 
            path="/login" 
            element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} 
          />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<EditTrip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
