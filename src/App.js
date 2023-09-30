import './App.css';
import { Route,Routes } from 'react-router';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header />

    <main className="main">

      <Routes style={{height:"100%"}} >
       <Route path="/" element={<AboutMe/>} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/resume" element={<Resume/>} />
      </Routes>

    </main>

    <Footer/>
    </div>
  );
}

export default App;
