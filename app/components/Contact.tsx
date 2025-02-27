import React from "react";

interface ContactProps {
  id?: string;
}

export default function Contact({ id }: ContactProps) {
  return (
    /* TODO: add  bg-foreground text-background  */
    <div id={id}>
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background">
        {/* TODO: add max-w-5xl */}
        <div className="mx-auto">
          <h2 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tight mb-16">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl font-bold mb-8">
              Interested in working together? Have a project in mind? Let&apos;s
              talk about how we can collaborate
            </p>

            <a
              href="mailto:juneaud@gmail.com"
              className="text-2xl font-bold underline underline-offset-4 hover:no-underline"
            >
              juneaud@gmail.com
            </a>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              <a
                href="https://github.com/its-clem-fandango"
                className="text-xl font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/juneaud/"
                className="text-xl font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
