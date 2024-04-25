import Hero from "../components/Hero";
import Section from "../components/Section";
import Section2AboutStyleRe from "../components/Section2AboutStyleRe";
import Section3Logos from "../components/Section3Logos";
import Section4HowItWorks from "../components/Section4HowItWorks";
import Section5FAQs from "../components/Section5FAQs";
import Section6ComingSoon from "../components/Section6ComingSoon";
import Footer from "../components/Footer";

const StyleRENewHmpgLP = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start max-w-[1920px] leading-[normal] tracking-[normal] mq950:max-w-full mq1425:max-w-full mq450:max-w-full mq1900:max-w-full">
      <Hero />
      <Section />
      <Section2AboutStyleRe />
      <Section3Logos />
      <Section4HowItWorks />
      <Section5FAQs />
      <Section6ComingSoon />
      <Footer />
    </div>
  );
};

export default StyleRENewHmpgLP;
