import React from "react";
import "./App.css";
import TextContainer from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header id="home" className="w-screen h-screen">
        <TextContainer />
      </header>
    </>
  );
}

export default App;
