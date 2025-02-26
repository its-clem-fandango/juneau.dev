import Link from "next/link";
import AnimatedText from "./utils/AnimatedText";

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION
      TODO: add relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 */}
      <section className="">
        {/* Grid background
        TODO: add opacity-5*/}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            /* TODO: add border-foreground */
            <div key={i} className="h-full border-r"></div>
          ))}
        </div>

        {/* Hero content
        TODO: add font-sans md:text-9xl uppercase leading-[0.9]*/}
        <h1 className="text-7xl font-black tracking-tighter mb-4">
          <AnimatedText delay={300}>YOUR</AnimatedText>
          <AnimatedText delay={500}>NAME</AnimatedText>
        </h1>

        {/* TODO: add font-sans text-2xl md:text-4xl*/}
        <h2 className="font-bold uppercase tracking-wide mb-12 opacity-80">
          <AnimatedText delay={700}>
            Developer / Designer / Creator
          </AnimatedText>
        </h2>

        {/* TODO: add md:flex-row mt-8*/}
        <div className="flex flex-col gap-6">
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
      </section>

      {/* OTHER SECTIONS */}
      <div className="">
        <p className="">more content here</p>
      </div>
    </main>
  );
}
