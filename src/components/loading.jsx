import React from "react";

export default function Loading() {
  return (
    <div className="flex-center" style={{height:"100vh", flexDirection:"column", background: "#0d0d2b"}}>
      <div className="rocket-spinner" aria-label="Loading portfolio">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="#8b5cf6"
          viewBox="0 0 24 24"
          >
          <path d="M21 2L13 10V4L9 8v6l-4-4v5l5 5h3v3l8-8V2z"></path>
        </svg>
      </div>
      <p style={{marginTop:"1rem", color:"#8b5cf6"}}>Loading portfolio...</p>
      <style>{`
        .rocket-spinner svg {
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {transform: rotate(0);}
          100% {transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}