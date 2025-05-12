import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Create from './pages/create';
import Destinations from './pages/destinations';
import DestinationDetails from './pages/destinations/[id]';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:id" element={<DestinationDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
