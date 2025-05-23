import ContactSection from "@/components/landingPage/ContactSection";
import HeroSect from "@/components/landingPage/HeroSect";
import TestimonialSection from "@/components/landingPage/TestimonialSection";

const page = () => {
  return (
    <div>
      <HeroSect />
      <ContactSection/>
      <TestimonialSection/>
    </div>
  );
};

export default page;