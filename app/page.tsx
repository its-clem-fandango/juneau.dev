import AnimatedText from "./utils/AnimatedText";
import Scroll from "./components/Scroll";
import Links from "./components/Links";
import Grid from "./components/Grid";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans">
      {/* HERO SECTION*/}
      <section
        className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <Grid />
        {/* Hero content
        TODO: add leading-[0.9]*/}
        <h1 className="font-sans text-7xl md:text-9xl uppercase font-black tracking-tighter mb-4">
          <AnimatedText delay={300}>JUNEAU</AnimatedText>
          <AnimatedText delay={500}>DAHL</AnimatedText>
        </h1>

        <h2 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-wide mb-12 opacity-80">
          <AnimatedText delay={700}>Developer / Creator</AnimatedText>
        </h2>

        <Links />
        <Scroll />
      </section>

      <Work id="work" />
      <Stack />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
