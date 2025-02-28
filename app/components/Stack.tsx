import AnimatedPyramid from "../utils/AnimatedPyramid";

export default function Stack() {
  console.log("Stack component is rendering");
  return (
    <section className="h-screen flex flex-col px-4 sm:px-6 md:px-12 lg:px-24 border-t-8 border-[#ff1493] bg-[#ff1493]">
      <h2 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tight mt-24 mb-8 text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]">
        Tech Stack
      </h2>

      <p className="text-xl font-black mb-6 text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]">
        Drag the blocks to see physics in action. These are the technologies I
        work with.
      </p>

      <div className="flex-grow">
        <AnimatedPyramid />
      </div>
    </section>
  );
}
