// src/App.jsx
import { useLocation } from "react-router-dom";
import Router from "./routes/Router.jsx";

export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="h-full">
      <Router />
    </div>
  );
}
