import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import { AnimatePresence } from 'framer-motion'; 
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Survey from './Pages/Survey';
import LoadingScreen from './Components/LoadingScreen'; 

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
            <Route path="/service/survey" element={<Survey />} />
          </Routes>
        </Router>
      )}
    </AnimatePresence>
  );
}

export default App;