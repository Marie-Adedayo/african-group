import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import { AnimatePresence } from 'framer-motion'; 
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Survey from './Pages/Survey';
import LoadingScreen from './Components/LoadingScreen'; 
import Agro from './Pages/Agro';
import Construction from './Pages/Construction';
import Tech from './Pages/Tech';

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
            <Route path="/service/constrution" element={<Construction />} />
            <Route path="/service/agro" element={<Agro />} />
            <Route path="/service/tech" element={<Tech />} />
          </Routes>
        </Router>
      )}
    </AnimatePresence>
  );
}

export default App;