import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
