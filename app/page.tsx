import AnimatedText from "./utils/AnimatedText";
import Scroll from "./components/Scroll";
import Links from "./components/Links";
import Grid from "./components/Grid";
import Work from "./components/Work";

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION
      TODO: add md:px-12 lg:px-24 */}
      <section className="relative h-screen flex flex-col justify-center px-6">
        <Grid />

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

        <Links />
        <Scroll />
      </section>

      <Work />
      {/* OTHER SECTIONS */}
      <div className="">
        <p className="">more content here</p>
      </div>
    </main>
  );
}
