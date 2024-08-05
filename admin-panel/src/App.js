import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TripList from './components/TripList';
import AddTrip from './pages/AddTrip';
import EditTrip from './pages/EditTrip';
import Login from './account/Login';
import Register from './account/Register';
import './index.css';
import Navbar from './components/Navbar';
import logo from './images/logo.png';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar logo={logo} />
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="/add" element={<AddTrip />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<EditTrip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;