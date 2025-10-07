import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import "./pages/Dashboard";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
