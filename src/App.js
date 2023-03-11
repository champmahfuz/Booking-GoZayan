import Booking from './components/Booking';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Dashboard/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
