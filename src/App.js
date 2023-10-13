import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MassageList from "./components/pages/MassageList";
import About from "./components/pages/About";
import NavBar from "./components/pages/NavBar";
import useTelegram from "./hooks/useTelegram";
import FormSend from "./components/pages/FormSend";
import { TelegramContextProvider } from "./context/context";

function App() {
  const { ready } = useTelegram;
  useEffect(() => {
    ready();
  }, [ready]);

  return (
    <div>
      <NavBar />
      <TelegramContextProvider>
        <Routes>
          <Route path="/" element={<MassageList />} />
          <Route path="about" element={<About />} />
          <Route path="sendform" element={<FormSend />} />
        </Routes>
      </TelegramContextProvider>
    </div>
  );
}

export default App;
