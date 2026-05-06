import React from "react";
import c from "./experimentation-lifecycle.module.scss";

// All coordinates are in viewBox units (760 × 520).
// Ring: cx=380, cy=270, outer-r=140, inner-r=70
// Left  line: ring at 315° (281,171) → (210,100)  — 45° diagonal
// Right line: ring at  45° (479,171) → (550,100)  — 45° diagonal
// Bottom line: ring at 180° (380,410) → (380,458) — vertical

const ExperimentationLifecycle = () => (
  <div className={c.wrapper}>
    <svg
      className={c.diagram}
      viewBox="0 0 760 520"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Experimentation lifecycle diagram">
      {/* ── Animated tricolor ring ───────────────────────────────────────── */}
      {/* All three arcs rotate as one group so the ring is always gapless.  */}
      {/* Each arc's math length is 150; round caps add 35 on each end       */}
      {/* (strokeWidth/2), bringing each visual arc to exactly 120°.         */}
      {/*
        Chain z-order: each arc's HEAD sits on top of the previous arc's tail.
        Clockwise sequence is now Light(0°)→Dark(120°)→Medium(240°).
        Base order Medium→Light→Dark gives Dark head over Light tail (✓)
        and Light head over Medium tail (✓). The one junction that needs a fix
        is Medium head over Dark tail — handled by a partial head-copy of
        Medium drawn at z=4.
      */}
      <g className={c.ring}>
        {/* z=3 — Deep purple base, offset 120° */}
        <circle
          cx="380"
          cy="270"
          r="105"
          fill="none"
          stroke="#7a49ba"
          strokeWidth="70"
          strokeDasharray="210 460"
          strokeLinecap="round"
          transform="rotate(120 380 270)"
        />
        {/* z=2 — Light lavender base, offset 0° */}
        <circle
          cx="380"
          cy="270"
          r="105"
          fill="none"
          stroke="#d4b8f0"
          strokeWidth="70"
          strokeDasharray="210 460"
          strokeLinecap="round"
        />
        {/* z=1 — Medium purple base, offset 240° */}
        <circle
          cx="380"
          cy="270"
          r="105"
          fill="none"
          stroke="#9b6fd4"
          strokeWidth="70"
          strokeDasharray="210 460"
          strokeLinecap="round"
          transform="rotate(240 380 270)"
        />

        {/* z=4 — Medium head copy: fixes Medium's head over Dark's tail */}
        <circle
          cx="380"
          cy="270"
          r="105"
          fill="none"
          stroke="#7a49ba"
          strokeWidth="70"
          strokeDasharray="0 600"
          strokeLinecap="round"
          transform="rotate(240 380 270)"
        />
      </g>
      {/* White centre fill so text sits on a clean background */}
      <circle cx="380" cy="270" r="69" fill="#fff" />

      {/* ── Centre label ─────────────────────────── */}
      <text
        x="380"
        y="274"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Poppins,sans-serif"
        fontSize="15"
        fontWeight="700"
        fill="#000">
        Shared Learnings
      </text>

      {/* ── Lines ────────────────────────────────── */}
      <line x1="240" y1="130" x2="295" y2="185" stroke="#000" strokeWidth="2" />
      <line x1="465" y1="185" x2="520" y2="130" stroke="#000" strokeWidth="2" />
      <line x1="380" y1="390" x2="380" y2="458" stroke="#000" strokeWidth="2" />

      {/* ── Left callout ─────────────────────────── */}
      <text x="235" y="76" textAnchor="end" fontFamily="Poppins,sans-serif" fontSize="16" fontWeight="700" fill="#000">
        Early Stage Experimentation
      </text>
      <text x="235" y="94" textAnchor="end" fontFamily="Poppins,sans-serif" fontSize="12" fill="#333">
        Validate ideas before
      </text>
      <text x="235" y="110" textAnchor="end" fontFamily="Poppins,sans-serif" fontSize="12" fill="#333">
        engineering investment
      </text>

      {/* ── Right callout ────────────────────────── */}
      <text
        x="525"
        y="76"
        textAnchor="start"
        fontFamily="Poppins,sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#000">
        In Market A/B testing
      </text>
      <text x="525" y="94" textAnchor="start" fontFamily="Poppins,sans-serif" fontSize="12" fill="#333">
        Validate Impact at scale in
      </text>
      <text x="525" y="110" textAnchor="start" fontFamily="Poppins,sans-serif" fontSize="12" fill="#333">
        real environments.
      </text>

      {/* ── Bottom callout ───────────────────────── */}
      <text
        x="380"
        y="476"
        textAnchor="middle"
        fontFamily="Poppins,sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#000">
        Experiment &gt; Production Transition
      </text>
      <text x="380" y="494" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fill="#333">
        Ensure validated learnings translate into long-term value
      </text>
    </svg>
  </div>
);

export default ExperimentationLifecycle;
