// src/components/Home.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showMission, setShowMission] = useState(true);
  const [videoFinished, setVideoFinished] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const videoRef = useRef(null);

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const handleVideoEnd = () => {
    setVideoFinished(true);
    console.log("Objetivo: Video visto ✅");
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    console.log("Objetivo: Suscrito ✅");
  };

  const isNextDisabled = !videoFinished || !subscribed;

  return (
    <div className="bg-[#1d1d1d] text-center text-white min-h-screen flex flex-col justify-center items-center gap-10 selection:bg-yellow-500 overflow-x-hidden">
      <div className="w-full top-0 mb-0 flex justify-start ">
        <button
          style={{ fontFamily: "Pricedown, sans-serif" }}
          onClick={handleLogout}
          className="bg-[#ff0000] border-4 border-black px-6 py-2 text-2xl shadow-[4px_4px_0px_black] hover:bg-white hover:text-red-600 transition-all active:translate-y-1"
        >
          ← Cerrar sesión
        </button>
      </div>

      {showMission && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-pulse"
          onClick={() => setShowMission(false)}
        >
          <h2 className="text-[100px] text-yellow-500 font-['Pricedown'] drop-shadow-[10px_10px_0px_black]">
            MISSION PASSED!
          </h2>
        </div>
      )}

      <div className="text-center mb-2 transform -rotate-2">
        <h1
          style={{ fontFamily: "Pricedown, sans-serif" }}
          className="text-6xl text-yellow-500 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase mb-10"
        >
          Bienvenido al show
        </h1>
        <p
          style={{ fontFamily: "Permanent Marker, sans-serif" }}
          className="text-3xl font-bold drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-10"
        >
          Unicamente los reales llegan hasta aqui... ahora, iniciemos con la
          historia
        </p>
        <p className="text-xl font-['Permanent_Marker'] text-yellow-500 mt-2">
          {!videoFinished
            ? "• Mira el video completo"
            : "• Video completado ✅"}{" "}
          <br />
          {!subscribed
            ? "• Suscribete al canal de turkano"
            : "• Suscripción verificada ✅"}
        </p>
      </div>

      <div className="relative border-8 border-black shadow-[20px_20px_0px_rgba(0,0,0,0.5)] bg-gray-900 max-w-4xl w-full">
        <div className="p-2 bg-linear-to-b from-gray-700 to-black">
          <video
            className="w-full"
            controls
            ref={videoRef}
            onEnded={handleVideoEnd}
          >
            <source
              src="https://d34d3fyadl2nvt.cloudfront.net/El+show+debe+continuar/Introducci%C3%B3n.mp4"
              type="video/mp4"
            />
          </video>
          {videoFinished && (
            <div className="absolute top-4 right-4 bg-green-500 text-black px-4 py-1 font-bold border-2 border-black animate-bounce">
              VIDEO VISTO
            </div>
          )}
        </div>
      </div>
      {/* <div className="absolute -bottom-15 -right-1 bg-yellow-500 text-black p-4 border-4 border-black rotate-12">
          <p className="text-2xl font-bold font-mono">RESPECT +</p>
        </div> */}

       <p className="text-xl font-['Permanent_Marker'] text-yellow-500 mt-2">
            Para continuar primero debes suscribirte
        </p>
      <div className="flex flex-col gap-10 mt-7 mb-6">
        <a
          target="_blank"
          href="https://www.youtube.com/@19117records"
          onClick={(e) => subscribed && e.preventDefault()}
        >
          <button
            onClick={handleSubscribe}
            disabled={subscribed}
            style={{ fontFamily: "Pricedown, sans-serif" }}
            className={`flex-1 border-4 border-black text-white text-4xl py-4 px-8 transition-all uppercase italic ${
              subscribed
                ? "bg-[#1b4332] text-gray-400 cursor-default shadow-none translate-x-1 translate-y-1 opacity-90"
                : "bg-[#0070ff] shadow-[6px_6px_0px_black] hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_black]"
            }`}
          >
            {subscribed ? "Suscrito" : "Suscribete"}
          </button>
        </a>

        {isNextDisabled ? (
          /* Botón bloqueado sin Link */
          <button
            style={{ fontFamily: "Pricedown, sans-serif" }}
            disabled
            className="bg-gray-700 border-4 mb-10 border-black text-gray-500 text-4xl px-12 py-4 shadow-[8px_8px_0px_black] font['Pricedown'] cursor-not-allowed grayscale"
          >
            NEXT
          </button>
        ) : (
          /* Botón desbloqueado con Link */
          <Link to="/CapOne">
            <button
              style={{ fontFamily: "Pricedown, sans-serif" }}
              className="bg-[#00cf6e] border-4 border-black text-white text-4xl px-12 py-4 shadow-[8px_8px_0px_black] hover:scale-110 transition-transform font['Pricedown'] active:translate-y-1 mb-10"
            >
              NEXT
            </button>
          </Link>
        )}
      </div>
      {!isNextDisabled && (
        <div className="mt-2 bg-[#facc15] text-black px-8 py-3 border-4 border-black font-black text-4xl rotate-3 animate-pulse shadow-2xl mb-15">
          MISSION PASSED!
        </div>
      )}
    </div>
  );
}
