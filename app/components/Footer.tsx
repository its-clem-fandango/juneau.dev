import React from "react";

export default function Footer() {
  return (
    /* TODO: add border-foreground */
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm font-medium mb-4 md:mb-0">
          © {new Date().getFullYear()} Juneau Dahl. Some Rights Reserved.
          Licensed under MIT.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-sm font-medium hover:underline">
            Sitemap
          </a>
          <a
            href="https://github.com/its-clem-fandango/juneau.dev/"
            className="text-sm font-medium hover:underline"
          >
            Use this design
          </a>
        </div>
      </div>
    </footer>
  );
}
