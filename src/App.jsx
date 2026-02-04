import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
      setLoading(false);
      return;
    }

    axios
      .get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(login({ userData: res.data }));
      })
      .catch(() => {
        dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]); // Added dispatch to dependency array, though it's stable just to follow best practices

  if (loading) return null;

  return (
    <>
      {/* Mobile / small screens */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center px-4 lg:hidden">
        <h1 className="text-xl font-semibold text-gray-700">
          This application is optimized for laptops and desktops only.
          <br />
          Please open it on a larger screen.
        </h1>
      </div>

      {/* Desktop app */}
      <div className="hidden lg:block">
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
