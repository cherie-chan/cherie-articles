import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const PURPLE_PALETTE = ["#7a49ba", "#9b6fd4", "#d4b8f0", "#c49ee8", "#5c2e9e", "#e8d5f8"];

const useCelebrate = (trigger, forceFire = false) => {
  const firedRef = useRef(false);
  const canvasRef = useRef(null);
  const confettiRef = useRef(null);

  const getConfettiInstance = () => {
    const fullscreenContainer = document.fullscreenElement;
    const container = fullscreenContainer || document.body;

    if (!container) return null;

    const existingCanvas = canvasRef.current;
    const canvasInWrongContainer = existingCanvas && existingCanvas.parentElement !== container;

    if (!existingCanvas || canvasInWrongContainer) {
      if (existingCanvas?.parentElement) {
        existingCanvas.parentElement.removeChild(existingCanvas);
      }

      const canvas = document.createElement("canvas");
      canvas.style.position = fullscreenContainer ? "absolute" : "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "2147483647";

      container.appendChild(canvas);
      canvasRef.current = canvas;
      confettiRef.current = confetti.create(canvas, { resize: true, useWorker: true });
    }

    return confettiRef.current;
  };

  useEffect(() => {
    if ((!trigger && !forceFire) || firedRef.current) return;
    firedRef.current = true;

    // Subtle dual-burst from both sides, low particle count
    const shared = {
      particleCount: 35,
      spread: 55,
      colors: PURPLE_PALETTE,
      scalar: 0.85,
      gravity: 1.2,
      drift: 0,
      ticks: 180,
    };

    const shootConfetti = getConfettiInstance();
    if (!shootConfetti) return;

    shootConfetti({ ...shared, origin: { x: 0.2, y: 0.6 }, angle: 60 });
    shootConfetti({ ...shared, origin: { x: 0.8, y: 0.6 }, angle: 120 });
  }, [trigger, forceFire]);

  useEffect(() => {
    return () => {
      if (canvasRef.current?.parentElement) {
        canvasRef.current.parentElement.removeChild(canvasRef.current);
      }

      canvasRef.current = null;
      confettiRef.current = null;
    };
  }, []);
};

export default useCelebrate;
