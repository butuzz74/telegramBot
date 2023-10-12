import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MassageList from "./components/pages/MassageList";
import About from "./components/pages/About";
import NavBar from "./components/pages/NavBar";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  // const onClose = () => {
  //   tg.close();
  // };
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MassageList />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
