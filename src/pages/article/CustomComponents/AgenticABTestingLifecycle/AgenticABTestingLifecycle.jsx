import { useMemo, useRef } from "react";
import { Sparkles } from "lucide-react";
import useOnScreen from "../../../../hooks/useOnScreen";
import c from "./agentic-ab-testing-lifecycle.module.scss";

const wrapText = (text, maxCharsPerLine) => {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (nextLine.length <= maxCharsPerLine) {
      currentLine = nextLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) lines.push(currentLine);
  return lines;
};

const curveY = (t, baseY, amplitude) => {
  // Smooth, deterministic curve generated mathematically.
  const primaryWave = Math.sin(t * Math.PI * 2 - 0.45);
  const secondaryWave = Math.sin(t * Math.PI * 4 + 0.8) * 0.22;
  return baseY + (primaryWave + secondaryWave) * amplitude;
};

const buildSmoothPath = (points) => {
  if (!points.length) return "";
  if (points.length === 1) return `M ${points[0].x},${points[0].y}`;

  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    const midY = (prev.y + curr.y) / 2;
    d += ` Q ${prev.x},${prev.y} ${midX},${midY}`;
  }

  const last = points[points.length - 1];
  d += ` T ${last.x},${last.y}`;
  return d;
};

const AgenticABTestingLifecycle = ({
  stages = DEFAULT_STAGES,
  curve = {
    xPadding: 50,
    baseY: 58,
    amplitude: 10,
  },
}) => {
  const wrapperRef = useRef(null);
  const isVisible = useOnScreen(wrapperRef, 0.3);
  const safeStages = stages?.length ? stages : DEFAULT_STAGES;

  const geometry = useMemo(() => {
    const total = safeStages.length;
    const rawPadding = curve.xPadding ?? 8;
    const xPadding = Math.max(4, Math.min(rawPadding > 30 ? 8 : rawPadding, 20));
    const baseY = curve.baseY ?? 58;
    const amplitude = curve.amplitude ?? 10;

    const points = safeStages.map((stage, index) => {
      const t = total === 1 ? 0.5 : index / (total - 1);
      const x = xPadding + (100 - xPadding * 2) * t;
      const y = curveY(t, baseY, amplitude);
      const placement = index % 2 === 0 ? "bottom" : "top";

      return {
        ...stage,
        t,
        x,
        y,
        placement,
      };
    });

    const path = buildSmoothPath(points);

    return {
      points,
      path,
    };
  }, [safeStages, curve]);

  return (
    <div ref={wrapperRef} className={`${c.wrapper} ${isVisible ? c.isVisible : ""}`}>
      <div className={c.desktopChart}>
        <svg
          className={c.pathSvg}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Agentic A/B testing lifecycle path">
          <path d={geometry.path} className={c.pathLine} pathLength="100" />
          <path d={geometry.path} className={c.pathGlow} pathLength="100" />
        </svg>

        {geometry.points.map((point, index) => (
          <span
            key={`node-${index}`}
            className={c.nodeMarker}
            aria-hidden="true"
            style={{ left: `${point.x}%`, top: `${point.y}%`, "--index": index }}
          />
        ))}

        {geometry.points.map((point, index) => {
          const titleLines = wrapText(point.title, 18);
          const wrappedPoints = (point.points || []).map((item) => wrapText(item, 28));

          return (
            <div
              key={index}
              className={`${c.labelGroup} ${point.placement === "top" ? c.top : c.bottom}`}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}>
              <div className={c.labelInner} style={{ "--index": index }}>
                {point.placement === "top" && (
                  <ul className={c.pointsList}>
                    {wrappedPoints.map((lineGroup, listIndex) => (
                      <li key={listIndex}>
                        <span className={c.pointText}>
                          <Sparkles className={c.sparkle} aria-hidden="true" size={14} />
                          <span>
                            {lineGroup.map((line, lineIndex) => (
                              <span key={lineIndex} className={c.line}>
                                {line}
                              </span>
                            ))}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <h3 className={c.stageTitle}>
                  {titleLines.map((line, lineIndex) => (
                    <span key={lineIndex} className={c.line}>
                      {line}
                    </span>
                  ))}
                </h3>
                {point.placement === "bottom" && (
                  <ul className={c.pointsList}>
                    {wrappedPoints.map((lineGroup, listIndex) => (
                      <li key={listIndex}>
                        <span className={c.pointText}>
                          <Sparkles className={c.sparkle} aria-hidden="true" size={14} />
                          <span>
                            {lineGroup.map((line, lineIndex) => (
                              <span key={lineIndex} className={c.line}>
                                {line}
                              </span>
                            ))}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={c.mobileSummary}>
        <ol className={c.mobileList}>
          {safeStages.map((stage, index) => (
            <li key={index} style={{ "--index": index }}>
              <h3>{stage.title}</h3>
              <ul>
                {(stage.points || []).map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <span className={c.pointText}>
                      <Sparkles className={c.sparkle} aria-hidden="true" />
                      <span>{point}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AgenticABTestingLifecycle;
