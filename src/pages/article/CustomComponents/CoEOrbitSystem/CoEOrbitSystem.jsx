import { useEffect, useState, useRef } from "react";
import c from "./coe-orbit-system.module.scss";

const DEFAULT_OWNS = ["Frameworks", "Standards", "Docs", "Integrity", "Governance"];
const DEFAULT_GUIDES = ["Approach", "Prioritisation", "Decision"];

const OrbitTracker = ({ items, isOwns, duration }) => {
  const trackerRefs = useRef([]);
  const [positions, setPositions] = useState([]);
  const sceneRef = useRef(null);

  const itemCount = items.length || 1;
  const anglePerItem = 360 / itemCount;
  const durationSeconds = parseFloat(duration);
  const delayPerItem = -(durationSeconds * anglePerItem) / 360;

  const getTextScale = (label) => {
    const length = (label || "").trim().length || 1;
    return Math.max(0.58, Math.min(1, 11 / length));
  };

  const getPlanetZIndex = (yPos) => {
    const centerY = (sceneRef.current?.clientHeight || 0) / 2;
    const isTopHalf = yPos < centerY;

    if (isTopHalf) {
      return isOwns ? -1 : -2;
    }
    return isOwns ? 1 : 2;
  };

  useEffect(() => {
    const updatePositions = () => {
      const sceneEl = sceneRef.current;
      const sceneRect = sceneEl?.getBoundingClientRect();
      if (!sceneRect) return;

      // Parent transforms (fullscreen/presentation scaling) change viewport coords.
      // Convert measured tracker screen coords back to the scene's local coord space.
      const localWidth = sceneEl.clientWidth || 1;
      const localHeight = sceneEl.clientHeight || 1;
      const scaleX = sceneRect.width / localWidth;
      const scaleY = sceneRect.height / localHeight;

      const newPositions = trackerRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return {
            x: (rect.left - sceneRect.left) / (scaleX || 1),
            y: (rect.top - sceneRect.top) / (scaleY || 1),
          };
        }
        return { x: 0, y: 0 };
      });
      setPositions(newPositions);
    };

    const interval = setInterval(updatePositions, 16);
    updatePositions();
    return () => clearInterval(interval);
  }, []);

  if (!sceneRef.current) {
    return (
      <>
        {items.map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              trackerRefs.current[index] = el;
              if (!sceneRef.current) {
                sceneRef.current = el?.closest(`.${c.scene}`) || el?.parentElement?.parentElement;
              }
            }}
            className={isOwns ? c.trackerOwns : c.trackerGuides}
            style={{
              "--index": index,
              "--duration": duration,
              "--delay": `${delayPerItem * index}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </>
    );
  }

  return (
    <>
      {items.map((_, index) => (
        <div
          key={index}
          ref={(el) => (trackerRefs.current[index] = el)}
          className={isOwns ? c.trackerOwns : c.trackerGuides}
          style={{
            "--index": index,
            "--duration": duration,
            "--delay": `${delayPerItem * index}s`,
          }}
          aria-hidden="true"
        />
      ))}
      {positions.map((pos, index) => (
        <div
          key={`planet-${index}`}
          className={`${c.planet} ${isOwns ? c.planetOwns : c.planetGuides}`}
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            zIndex: getPlanetZIndex(pos.y),
          }}>
          <span style={{ "--text-scale": getTextScale(items[index]) }}>{items[index]}</span>
        </div>
      ))}
    </>
  );
};

const CoEOrbitSystem = ({
  centerLabel = "CoE",
  ownsTitle = "CoE Owns",
  guidesTitle = "CoE Guides",
  owns = DEFAULT_OWNS,
  guides = DEFAULT_GUIDES,
}) => {
  return (
    <section className={c.wrapper} aria-label="Centre of Excellence operating model orbit diagram">
      <div className={c.scene}>
        <svg className={c.orbitSvg} aria-hidden="true">
          <ellipse className={c.ellipseOwns} />
          <ellipse className={c.ellipseGuides} />
        </svg>

        <div className={c.core}>
          <span>{centerLabel}</span>
        </div>

        <div className={`${c.orbitLayer} ${c.ownsLayer}`}>
          <OrbitTracker items={owns?.length ? owns : DEFAULT_OWNS} isOwns duration="28s" />
        </div>

        <div className={`${c.orbitLayer} ${c.guidesLayer}`}>
          <OrbitTracker items={guides?.length ? guides : DEFAULT_GUIDES} isOwns={false} duration="38s" />
        </div>
      </div>
    </section>
  );
};

export default CoEOrbitSystem;
