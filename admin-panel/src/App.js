import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TripList from './pages/trips/TripList';
import AddBlogPost from './pages/blog-posts/AddBlogPost';
import AddTrip from './pages/trips/AddTrip';
import EditTrip from './pages/trips/EditTrip';
import Home from "./pages/Home";
import Login from './account/Login';
import Register from './account/Register';
import './index.css';
import Navbar from './components/Navbar';
import logo from './images/logo.png';
import BlogPostList from './pages/blog-posts/BlogPostList';
import EditBlogPost from './pages/blog-posts/EditBlogPost';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar logo={logo} />
        <Routes>
          <Route path="/trips" element={<TripList />} />
          <Route path="/trips/add" element={<AddTrip />} />
          <Route path="/trips/:id/edit" element={<EditTrip />} />
          <Route path="/posts" element={<BlogPostList />} />
          <Route path="/posts/add" element={<AddBlogPost />} />
          <Route path="/posts/:id/edit" element={<EditBlogPost />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
