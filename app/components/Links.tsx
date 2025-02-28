"use client";

import React from "react";
import Link from "next/link";

export default function Links() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col sm:flex-row md:flex-row gap-4 md:gap-6 md:mt-8 opacity-0 animate-fadeIn"
      style={{ animationDelay: "1s", animationFillMode: "forwards" }}
    >
      <a
        href="#work"
        onClick={(e) => scrollToSection(e, "work")}
        className="px-8 py-4 bg-foreground text-background font-sans text-xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-block text-center"
      >
        Projects
      </a>
      <Link
        href="#contact"
        className="px-8 py-4 border-4 border-foreground font-sans text-xl font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all inline-block text-center"
      >
        Contact
      </Link>
    </div>
  );
}
