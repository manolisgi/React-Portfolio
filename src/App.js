import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes basename="React-Portfolio">
          <Route path="/React-Portfolio/" element={<Home />} />
          <Route path="/React-Portfolio/about" element={<About />} />
          <Route path="/React-Portfolio/blog" element={<Blog />} />
          <Route path="/React-Portfolio/projects" element={<Projects />} />
          <Route path="/React-Portfolio/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

