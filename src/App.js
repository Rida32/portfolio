import './App.css';
import AboutMe from './components/AboutMe';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import { DataProvider } from './components/common/AppContext';
import SnakBar from './components/common/SnakBar';
import Certificate from './components/Certificate';






function App() {
  
 
  return (
 <>
  <DataProvider>
      <SnakBar />
      <BrowserRouter>
        <Routes>

          <Route index element={<Portfolio />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          {/* <Route path="/Layout" element={<Layout />} /> */}
          <Route path="Experience" element={<Experience />} >
          <Route path="HeroSection" element={<HeroSection />} />
          <Route path="Skills" element={<Skills/>} />
          <Route path="Certificate" element={<Certificate />} />
          <Route path="Contact" element={<Contact />} />

          </Route>
        </Routes>

      </BrowserRouter>
    </DataProvider>

 </>
  );
}

export default App;


