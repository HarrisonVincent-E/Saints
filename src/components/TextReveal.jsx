import { useState } from 'react';

export default function TextReveal({ word = "Cinematic Reveal", className = "" }) {
  return (
    <div className={`text-reveal-container ${className}`}>
      
      <div className="text-wrapper">
        <h1 className="title" aria-label={word}>
          {word.split("").map((char, i) => (
            <span
              key={i}
              className="char"
              style={{
                "--index": i,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      <style jsx>{`
        /* --- Layout & Container --- */
        .text-reveal-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .text-wrapper {
          position: relative;
          z-index: 10;
        }

        /* --- Typography --- */
        .title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          color: #fafafa;
        }

        /* --- Character Animation --- */
        .char {
          display: inline-block;
          opacity: 0;
          filter: blur(12px);
          transform: translateY(40%) scale(1.1) translateZ(0);
          animation: cinematic-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(0.03s * var(--index));
          will-change: transform, opacity, filter;
        }

        /* --- Keyframes --- */
        @keyframes cinematic-reveal {
          0% {
            opacity: 0;
            filter: blur(12px);
            transform: translateY(40%) scale(1.1);
          }
          50% {
             opacity: 0.7;
             filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .char {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
