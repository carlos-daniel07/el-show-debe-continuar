// src/components/Home.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showMission, setShowMission] = useState(true);
  const [showAlbumPromo, setShowAlbumPromo] = useState(true);
  const [videoFinished, setVideoFinished] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const videoRef = useRef(null);

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const handleVideoEnd = () => {
    setVideoFinished(true);
    // console.log("Objetivo: Video visto ✅");
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    // console.log("Objetivo: Suscrito ✅");
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

      {!showMission && showAlbumPromo && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setShowAlbumPromo(false)}
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="album-promo-title"
            className="relative w-full max-w-2xl -rotate-1 border-8 border-black bg-yellow-400 p-3 text-black shadow-[14px_14px_0px_#ef0000] sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowAlbumPromo(false)}
              aria-label="Cerrar anuncio del álbum"
              className="absolute -right-4 -top-4 z-10 flex h-12 w-12 items-center justify-center border-4 border-black bg-white text-3xl font-black shadow-[4px_4px_0px_#000] transition-transform hover:scale-110"
            >
              ×
            </button>

            <div className="grid items-center gap-5 bg-[#1d1d1d] p-4 text-white sm:grid-cols-[220px_1fr]">
              <img
                src="/images/alb-1.jpeg"
                alt="Portada de Lo más fresco de la city"
                className="mx-auto aspect-square w-full max-w-55 border-4 border-black object-cover shadow-[6px_6px_0px_#ef0000]"
              />
              <div className="text-center sm:text-left">
                <p className="mb-2 font-['Permanent_Marker'] text-lg text-yellow-400">
                  Álbum de preestreno
                </p>
                <h2
                  id="album-promo-title"
                  style={{ fontFamily: "Pricedown, sans-serif" }}
                  className="text-4xl uppercase leading-none text-white drop-shadow-[4px_4px_0px_#ef0000] sm:text-5xl"
                >
                  Lo más fresco de la city
                </h2>
                <p className="my-4 font-bold text-gray-200">
                  Escúchalo ahora y descubre lo nuevo de Turkano.
                </p>
                <a
                  href="https://youtu.be/Af-ZeY72rZ4"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border-4 border-black bg-red-600 px-5 py-3 text-white shadow-[5px_5px_0px_#000] transition-transform hover:scale-105 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-current"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                  <span
                    style={{ fontFamily: "Pricedown, sans-serif" }}
                    className="text-2xl uppercase"
                  >
                    Escuchar en YouTube
                  </span>
                </a>
              </div>
            </div>
          </section>
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
            <div
              style={{ fontFamily: "Pricedown, sans-serif" }}
              className="text-white text-xl absolute top-4 right-4 bg-green-500 px-4 py-1 font-bold border-2 border-black animate-bounce"
            >
              VIDEO VISTO
            </div>
          )}
        </div>
      </div>

      {!videoFinished || !subscribed ? (
        <p className="text-lg font-['Permanent_Marker'] text-yellow-500 mt-2 -rotate-2">
          ( Para continuar primero debes mirar el video y suscribirte )
        </p>
      ) : null}
      <div className="flex flex-col gap-10 mt-4 mb-6">
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
          <Link to="/e7945322-2726-45f5-bbcd-87e54c81f479">
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
