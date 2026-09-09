import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/szolgaltatasok" element={<Services />} />
        <Route path="/szolgaltatasok/:slug" element={<ServicePage />} />
        <Route path="/kapcsolat" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;