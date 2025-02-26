import React from "react";

/* TODO: recfactor: create project data array of projects and a projectCard component --> 4? */

export default function Work() {
  return (
    <>
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t-8 border-foreground">
        <h2 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tight mb-16">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project Card */}

          <div className="group">
            {/* TODO: add dark:bg-gray-800 overflow-hidden */}
            <div className="aspect-video bg-gray-200 mb-4">
              {/* TODO: add w-full h-full to beginning  */}
              <div className="flex items-center justify-center text-4xl font-bold">
                PROJECT 1
              </div>
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:underline">
              Project Title 1
            </h3>
            <p className="text-sm font-medium opacity-70">
              Brief description of the project.
            </p>
          </div>

          {/* Project Card */}
          <div className="group">
            {/* TODO: add dark:bg-gray-800 overflow-hidden */}
            <div className="aspect-video bg-gray-200 mb-4">
              {/* TODO: add w-full h-full to beginning  */}
              <div className="flex items-center justify-center text-4xl font-bold">
                PROJECT 2
              </div>
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:underline">
              Project Title 2
            </h3>
            <p className="text-sm font-medium opacity-70">
              Brief description of the project.
            </p>
          </div>

          {/* Project Card */}
          <div className="group">
            {/* TODO: add dark:bg-gray-800 overflow-hidden */}
            <div className="aspect-video bg-gray-200 mb-4">
              {/* TODO: add w-full h-full to beginning  */}
              <div className="flex items-center justify-center text-4xl font-bold">
                PROJECT 3
              </div>
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:underline ">
              Project Title 3
            </h3>
            <p className="text-sm font-medium opacity-70">
              Brief description of the project.
            </p>
          </div>

          {/* Project Card */}
          <div className="group">
            {/* TODO: add dark:bg-gray-800 overflow-hidden */}
            <div className="aspect-video bg-gray-200 mb-4">
              {/* TODO: add w-full h-full to beginning  */}
              <div className="flex items-center justify-center text-4xl font-bold">
                PROJECT 4
              </div>
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:underline ">
              Project Title 4
            </h3>
            <p className="text-sm font-medium opacity-70">
              Brief description of the project.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
