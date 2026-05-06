import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const PURPLE_PALETTE = ["#7a49ba", "#9b6fd4", "#d4b8f0", "#c49ee8", "#5c2e9e", "#e8d5f8"];

const useCelebrate = (trigger, forceFire = false) => {
  const firedRef = useRef(false);

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

    confetti({ ...shared, origin: { x: 0.2, y: 0.6 }, angle: 60 });
    confetti({ ...shared, origin: { x: 0.8, y: 0.6 }, angle: 120 });
  }, [trigger, forceFire]);
};

export default useCelebrate;
