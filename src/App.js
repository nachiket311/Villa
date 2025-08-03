import "./App.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Propertiespage from "./Pages/Propertiespage";
import Propertydetail from "./Pages/Propertydetail";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Property" element={<Propertiespage/>} />
          <Route exact path="/PropertyDetails" element={<Propertydetail/>} />
          <Route exact path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
