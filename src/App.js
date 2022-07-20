import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cards from "./Containers/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
