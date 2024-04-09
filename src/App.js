import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Careers from "./Pages/Careers";
import Contactus from "./Pages/Contactus";
import Notfound from "./Pages/Notfound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/putfyre-innovations" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/products" Component={Products} />
        <Route path="/careers" Component={Careers} />
        <Route path="/contact" Component={Contactus} />
        <Route path="/*" Component={Notfound} />
      </Routes>
      <Contact />
    </Router>
  );
};

export default App;
