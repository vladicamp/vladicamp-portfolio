import Footer from "@/components/general/footer";
import Header from "@/components/general/header";
import Hero from "@/components/home/hero";
import Marquee from "@/components/home/marquee";
import Services from "@/components/home/services";
import Work from "@/components/home/work";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
