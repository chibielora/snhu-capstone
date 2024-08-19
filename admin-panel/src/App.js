import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import TripList from './components/TripList';
import AddBlogPost from './pages/blog-posts/AddBlogPost';
import AddTrip from './pages/trips/AddTrip';
import EditTrip from './pages/trips/EditTrip';
import Login from './account/Login';
import Register from './account/Register';
import './index.css';
import Navbar from './components/Navbar';
import logo from './images/logo.png';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Pass login state and handlers to the Navbar */}
        <Navbar logo={logo} />
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="/add" element={<AddTrip />} />
          <Route path="/edit/:id" element={<EditTrip />} />
          <Route path="/blog/new" element={<AddBlogPost />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
