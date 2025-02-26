import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION */}
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
        TODO: add font-sans md:text-9xl uppercase*/}
        <h1 className="text-7xl font-black tracking-tighter mb-4">
          <span className="block">JUNEAU</span>
          <span className="block">DAHL</span>
        </h1>

        <h2 className="">Developer / Digital Craftsman / Creator</h2>

        <div>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <div className="">
        <p className="">more content here</p>
      </div>
    </main>
  );
}
