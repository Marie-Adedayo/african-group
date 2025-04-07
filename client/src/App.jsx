import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // Import useState
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import LoadingScreen from './Components/LoadingScreen'; // Assuming you have a LoadingScreen component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false); // Hide the loading screen
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      )}
    </AnimatePresence>
  );
}

export default App;