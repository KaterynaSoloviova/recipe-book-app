import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main"></div>
        {/*here RecipeList instead of these div and put class "main" inside RecipeList??*/}
      </div>
      <Footer />
    </>
  );
}

export default App;
