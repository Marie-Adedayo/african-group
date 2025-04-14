import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Survey from './Pages/Survey';
import Agro from './Pages/Agro';
import Construction from './Pages/Construction';
import Tech from './Pages/Tech';
import LoadingScreen from './Components/LoadingScreen';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      <div className="relative">
        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/survey" element={<Survey />} />
          <Route path="/service/constrution" element={<Construction />} />
          <Route path="/service/agro" element={<Agro />} />
          <Route path="/service/tech" element={<Tech />} />
        </Routes>

        {/* Loading screen overlay */}
        <AnimatePresence>
          {!loadingComplete && (
            <LoadingScreen onComplete={() => setLoadingComplete(true)} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
