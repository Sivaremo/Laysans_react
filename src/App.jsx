import './Static/CSS/style.css';
import './Static/CSS/chat.css';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // changed to HashRouter
import Navbar from './Elements/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Elements/Footer';
import MetaTags from './Elements/MetaTags';
import Clients from './pages/Client';
import Careers from './pages/Careers';
import Services from './pages/Services';
import CareerForm from './pages/CareerForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <Router>
        <MetaTags />
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="client" element={<Clients />} />
            <Route path="careers" element={<Careers />} />
            <Route path="services" element={<Services />} />
            <Route path="careerform" element={<CareerForm />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
