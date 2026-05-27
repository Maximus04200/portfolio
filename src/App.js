import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Acceuil";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisation from "./pages/Realisations";
import MentionsLegales from "./pages/MentionsLegales";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisation />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;