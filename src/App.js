import "./App.css";
import FrontPage from "./components/FrontPage.js";
import Causes from "./components/CausesPage";
import Donate from "./components/DonatePage";
import About from "./components/AboutPage";
import Contact from "./components/ContactPage";
import CSP from "./components/CSP_Page";
import { Routes, Route } from "react-router-dom";
import PaymentSuccess from "./components/PaymentSuccess.js";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/csp" element={<CSP />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </div>
  );
}

export default App;
