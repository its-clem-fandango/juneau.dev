import React from "react";

export default function Grid() {
  {
    /* Grid background
      TODO: add opacity-5*/
  }
  return (
    <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        /* TODO: replace with className={`h-full border-r ${i >= 6 ? "hidden md:block" : ""}`}*/
        <div key={i} className="h-full border-r"></div>
      ))}
    </div>
  );
}
