import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import History from "./pages/History";
import Scan from "./pages/Scan";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/result/:plant" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;