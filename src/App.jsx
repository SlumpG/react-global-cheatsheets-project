import "./App.css";
import React from "react";
import SideBar from "./components/features/sidebar/SideBar";
import Footer from "./components/features/footer/Footer";
import Container from "./components/pages/container/Container";
import Header from "./components/features/header/Header";
import { BrowserRouter as Router } from "react-router-dom";

// Routes Link at SideBar Components;
// What i recommend you to begin with:
// - Using useTranslate Hook on the application at <Header/> Component on Select > Options Method.
// - Search Input - using filter and OnChange to get the hooks routes;
// - Continue the Routes and add Content for each Hook.
// - if finished , Try to begin and make the Website Responsive for phones.

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="align-main">
          <SideBar />
          <Container />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
