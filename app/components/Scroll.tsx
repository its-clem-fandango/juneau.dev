import React from "react";

export default function Scroll() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <span className="text-sm uppercase tracking-widest mb-2 opacity-60">
        Scroll
      </span>
      {/* TODO: fix animate-pulse */}
      <div className="w-0.5 h-8 bg-foreground opacity-60 animate-pulse"></div>
    </div>
  );
}
