import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import { items } from "./Data";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main">
          <RecipeList items={items} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
