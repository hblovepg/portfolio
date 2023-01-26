import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import Hero from "./sections/Hero";
import Resume from "./sections/Resume";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Work from "./sections/Work";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Resume />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};
