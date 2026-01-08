import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CapSix = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoFinished(true);
    // console.log("Objetivo: Video visto ✅");
  };
  const isNextDisabled = !videoFinished;
  return (
    <div className="bg-transparent text-center text-white min-h-screen flex flex-col items-center gap-10 selection:bg-yellow-500 overflow-x-hidden mt-10">
      <div className="text-center mb-2 transform -rotate-2">
        <h1
          style={{ fontFamily: "Pricedown, sans-serif" }}
          className="text-6xl text-yellow-500 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase mb-10 "
        >
          Capítulo 6:
        </h1>
        <p
          style={{ fontFamily: "Permanent Marker, sans-serif" }}
          className="text-3xl font-bold drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-10"
        >
          El desenlace
        </p>
        <p className="text-xl font-['Permanent_Marker'] text-yellow-500 mt-2">
          {!videoFinished
            ? "• Mira el video completo"
            : "• Video completado ✅"}{" "}
          <br />
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
              src="https://d34d3fyadl2nvt.cloudfront.net/El+show+debe+continuar/6.+El+desenlace.mp4"
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
      {!videoFinished ? (
        <p className="text-lg font-['Permanent_Marker'] text-yellow-500 mt-2 -rotate-2">
          ( Para continuar primero debes mirar el video )
        </p>
      ) : null}
      <div className="flex flex-col gap-10 mt-7 mb-6">
        {isNextDisabled ? (
          /* Botón bloqueado sin Link */
          <button
            style={{ fontFamily: "Pricedown, sans-serif" }}
            disabled
            className="bg-gray-700 border-4 mb-10 border-black text-gray-500 text-4xl px-12 py-4 shadow-[8px_8px_0px_black] font['Pricedown'] cursor-not-allowed grayscale"
          >
            RESPONDER FORMULARIO
          </button>
        ) : (
          /* Botón desbloqueado con Link */
          <Link to="/0b987da6-51b0-447e-a8c2-d058f0947116">
            <button
              style={{ fontFamily: "Pricedown, sans-serif" }}
              className="bg-[#00cf6e] border-4 border-black text-white text-4xl px-12 py-4 shadow-[8px_8px_0px_black] hover:scale-110 transition-transform font['Pricedown'] active:translate-y-1 mb-10"
            >
              RESPONDER FORMULARIO
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
};

export default CapSix;
