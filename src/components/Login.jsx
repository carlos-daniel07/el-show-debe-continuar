// src/components/Login.jsx
import { useState } from "react";
// const { setUser } = useAuth();
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { fetchAuthSession, getCurrentUser, signIn } from "aws-amplify/auth";

// Estilos inline (sin módulos, para simplicidad)

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn({ username, password });

      if (result.isSignedIn) {
        // ✅ Login exitoso
        const user = { username };
        setUser(user);
        navigate("/home", { replace: true });
      } else if (
        result.nextStep.signInStep ===
        "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
      ) {
        setError("Debes cambiar tu contraseña temporal");
      } else {
        setError("Inicio de sesión requiere paso adicional");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setError(err.message || "Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto md:rounded-2xl flex flex-col md:flex-row gap-2.5 justify-center items-center bg-[#1d1d1d] h-screen md:h-150 shadow-[1px_1px_30px_#1764ff] md:mt-10">
      {/* Izquierda: branding */}
      <section className="w-1/2 h-full relative hidden md:block">
        <a
          href="https://www.youtube.com/@19117records"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/alb-1.jpeg"
            alt="Turkano"
            className="h-full w-full object-cover md:rounded-l-2xl"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#1a1a1a]"></div>
        </a>
      </section>

      {/* Derecha: formulario */}
      <section className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center g-[#fa2f2f]">
        <img
          src="/images/alb-2.svg"
          alt="Turkano"
          className="w-60 object-top bottom-0 left-0 absolute z-0 opacity-40 md:hidden"
          style={{
            maskImage:
              "linear-gradient(to top, black 80%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 80%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <div className="text-center w-full py-4">
          <h1
            style={{ fontFamily: "Pricedown" }}
            className="text-5xl uppercase text-white font-bold mb-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            El show debe continuar
          </h1>
          <h2
            style={{ fontFamily: "Permanent Marker" }}
            className="text-4xl text-red-600 text-center mb-10 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)] -rotate-3"
          >
            Turkano
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xs flex flex-col gap-5 z-10"
        >
          {error && (
            <p className="text-red-600 font-bold text-center bg-red-50 py-2 px-4 rounded animate-bounce">
              {error}
            </p>
          )}

          <div className="field flex flex-col gap-2">
            <label
              style={{ fontFamily: "Permanent Marker" }}
              htmlFor="username"
              className="text-blue-500 block mb-2 transition-colors group-focus-within:text-white text-center text-2xl md:text-3xl "
            >
              Username
            </label>
            <input
              className="w-full bg-transparent border-b-2 border-blue-500 outline-none text-white py-1 focus:border-white transition-all placeholder:text-gray-500 font-mono text-xl"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="field flex flex-col gap-2">
            <label
              style={{ fontFamily: "Permanent Marker" }}
              htmlFor="password"
              className="text-blue-500 block mb-2 transition-colors group-focus-within:text-white text-center text-2xl md:text-3xl"
            >
              Password
            </label>
            <input
              className="w-full bg-transparent border-b-2 border-blue-500 outline-none text-white py-1 focus:border-white transition-all placeholder:text-gray-500 font-mono text-xl"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            style={{ fontFamily: "Pricedown" }}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-4xl font-bold py-3 mt-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer "
            type="submit"
            disabled={loading}
          >
            {loading ? "Iniciando..." : "Iniciar Sesión"}
          </button>
        </form>
      </section>
    </div>
  );
}
