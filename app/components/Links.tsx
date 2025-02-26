import React from "react";
import Link from "next/link";

export default function Links() {
  {
    /* TODO: add md:flex-row mt-8?*/
  }
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-8 opacity-0 animate-fadeIn"
      style={{ animationDelay: "1s", animationFillMode: "forwards" }}
    >
      {/* TODO: add bg-foreground text-background font-sans transition-opacity inline-block*/}
      <Link
        href="/projects"
        className="px-8 py-4 text-xl font-bold uppercase tracking-wider hover:opacity-90 text-center"
      >
        Projects
      </Link>
      {/* TODO: add border-foreground font-sans hover:bg-foreground hover:text-background transition-all duration-300 inline-block  */}
      <Link
        href="/about"
        className="px-8 py-4 border-4 text-xl font-bold uppercase tracking-wider text-center"
      >
        About
      </Link>
    </div>
  );
}
