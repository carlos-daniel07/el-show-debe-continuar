import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Login from "../components/Login.jsx";
import Home from "../components/Home.jsx";
import CapTwo from "../components/CapTwo.jsx";
import CapOne from "../components/CapOne.jsx";
import CapThree from "../components/CapThree.jsx";
import CapFour from "../components/CapFour.jsx";
import CapFive from "../components/CapFive.jsx";
import CapSix from "../components/CapSix.jsx";
import Form from "../components/Form.jsx";
const Router = () => {
  const { user, loading } = useAuth();
  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/CapOne"
          element={user ? <CapOne /> : <Navigate to="/" />}
        />
        <Route
          path="/CapTwo"
          element={user ? <CapTwo /> : <Navigate to="/" />}
        />
        <Route
          path="/CapThree"
          element={user ? <CapThree /> : <Navigate to="/" />}
        />
        <Route
          path="/CapFour"
          element={user ? <CapFour /> : <Navigate to="/" />}
        />
        <Route
          path="/CapFour"
          element={user ? <CapFour /> : <Navigate to="/" />}
        />
        <Route
          path="/CapFive"
          element={user ? <CapFive /> : <Navigate to="/" />}
        />
        <Route
          path="/CapSix"
          element={user ? <CapSix /> : <Navigate to="/" />}
        />
        <Route path="/Form" element={user ? <Form /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Router;
