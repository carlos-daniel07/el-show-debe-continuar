import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const handleIframeLoad = () => {
    setLoadCount((prevCount) => prevCount + 1);
    if (loadCount === 1) {
      setSubmitted(true);
      // ! Poner el audio aqui
      console.log("Mision cumplida");
    }
  };

  return (
    <div className="flex flex-col items-center px-4 bg-transparent min-h-screen text-center ">
      {!submitted ? (
        <>
          <h2
            style={{ fontFamily: "Pricedown, sans-serif" }}
            className="text-5xl text-white mb-6 uppercase drop-shadow-[4px_4px_0px_black]"
          >
            Misión: Completar Reporte
          </h2>
          <p className="my-8 text-yellow-500 font-['Permanent_Marker'] text-2xl animate-pulse">
            ¡No dejes campos vacíos!
          </p>
          <div className="w-full max-w-4xl border-[6px] border-black shadow-[12px_12px_0px_black] bg-white overflow-hidden ">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeeAp6kJUXZwowudNnETGQEB9XKH82K4FQ7UJuOqq6p5NG28g/viewform?embedded=true"
              width="100%"
              height="700"
              className="grayscale-[0.2] contrast-[1.1] bg-[#1d1d1d]"
              onLoad={handleIframeLoad}
            >
              Cargando...
            </iframe>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 min-h-screen">
          <div
            style={{ fontFamily: "Pricedown, sans-serif" }}
            className="bg-[rgba(0,255,0,0.5)] text-black px-6 py-6 border-8 border-black -rotate-3 shadow-[4px_4px_0px_rgba(0,255,0,0.5)]"
          >
            <h1
              style={{ fontFamily: "Pricedown, sans-serif" }}
              className="text-7xl md:text-9xl uppercase  text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-10"
            >
              MISSION PASSED!
            </h1>
            <div className="flex justify-between mt-4 border-t-4 border-black pt-2">
              <p className=" text-4xl text-yellow-500 uppercase drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                Respect +
              </p>
            </div>
          </div>
          <div className="text-white mt-10">
            <p>
              Gracias por llegar hasta el final. Recuerda que puedes ser uno de
              los 10 ganadores. Escucha todo mi flow en las diferentes
              plataformas y apoya el contenido.
            </p>
          </div>
          <div className="w-full mb-0 flex justify-start fixed bottom-0">
            <button
              style={{ fontFamily: "Pricedown, sans-serif" }}
              onClick={handleLogout}
              className="bg-[#ff0000] border-4 border-black px-6 py-2 text-2xl shadow-[4px_4px_0px_black] hover:bg-white hover:text-red-600 transition-all active:translate-y-1"
            >
              ← Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
