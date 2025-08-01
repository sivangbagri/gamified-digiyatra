
import './App.css'
import HomePage from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/Menu';
import PreviousTrips from './pages/PreviousTrips';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/previous-trips" element={<PreviousTrips />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
