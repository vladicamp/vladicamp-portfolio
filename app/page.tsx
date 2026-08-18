import Footer from "@/components/general/footer";
import Header from "@/components/general/header";
import Hero from "@/components/home/hero";
import Marquee from "@/components/home/marquee";
import Services from "@/components/home/services";
import Work from "@/components/home/work";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import { getGeneralSettings, getSiteLogoSrc } from "@/lib/wordpress/settings";
import { getProfileSettings } from "@/lib/wordpress/profile";

export default async function Home() {
  const settings = await getGeneralSettings();
  const profile = await getProfileSettings();
  const logoSrc = getSiteLogoSrc(settings);

  return (
    <>
      <Header logoSrc={logoSrc} siteTitle={settings.title} />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Contact resumeUrl={profile.resumeUrl} />
      </main>
      <Footer logoSrc={logoSrc} siteTitle={settings.title} />
    </>
  );
}
