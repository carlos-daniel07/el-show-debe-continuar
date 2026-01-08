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
          path="/e7945322-2726-45f5-bbcd-87e54c81f479"
          element={user ? <CapOne /> : <Navigate to="/" />}
        />
        <Route
          path="/b2951df8-3718-47fc-9dc6-ab472f36d014"
          element={user ? <CapTwo /> : <Navigate to="/" />}
        />
        <Route
          path="/93a8c657-3275-4ead-9901-9cd0173e3b76"
          element={user ? <CapThree /> : <Navigate to="/" />}
        />
        <Route
          path="/2603717f-cd7b-420c-8d16-7d527e41f795"
          element={user ? <CapFour /> : <Navigate to="/" />}
        />
        <Route
          path="/db414bee-d56d-4012-8151-fbf14b6933f0"
          element={user ? <CapFive /> : <Navigate to="/" />}
        />
        <Route
          path="/50863fe3-314a-4d75-a425-dd5db41d30c2"
          element={user ? <CapSix /> : <Navigate to="/" />}
        />
        <Route
          path="/0b987da6-51b0-447e-a8c2-d058f0947116"
          element={user ? <Form /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default Router;
