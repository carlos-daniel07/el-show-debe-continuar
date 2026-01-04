import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // ✅ Así se accede a Auth en Amplify v6+ con configure()
        const { Auth } = window.aws_amplify;
        await Auth.currentAuthenticatedUser();
      } catch {
        navigate("/", { replace: true });
      }
    };
    checkAuth();
  }, [navigate]);

  return children;
}
