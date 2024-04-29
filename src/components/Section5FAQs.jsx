import { memo } from "react";
import FrameComponent from "./FrameComponent";
import { Grid, Container } from "@mui/material";

const accordionTitles = [
  "How does Style.Re order pickup work?",
  "How much does it cost?",
  "Is there contactless delivery?",
  "Will my items be safe?",
];

const Section5FAQs = memo(() => {
  return (
    <section className="bg-[#F6F8FC] w-full">
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
          my={5}
        >
          <Grid item xs={12} sm={6} md={4.8}>
            <div className="relative bottom-[30px] flex flex-col items-start justify-start box-border gap-[21px]">
              <div className="leading-[32px] text-[#343538] flex items-center mq450:text-base mq450:leading-[26px]">
                Frequently Asked Questions
              </div>
              <h1 className="m-0  text-21xl tracking-[-0.04em] font-black font-inherit text-black mq950:text-13xl mq450:text-5xl">
                Got questions? We got answers!
              </h1>
              <div className=" text-2xl leading-[150%] text-slategray mq450:text-mid mq450:leading-[25px]">
                Feel free to reach out to us if you have more questions for us.
              </div>
              <button className="cursor-pointer py-3.5 px-[31px] bg-darkslategray-300 rounded-xl flex flex-row items-center justify-center gap-[4px] whitespace-nowrap border-[1px] border-solid border-gainsboro-200 hover:bg-dimgray hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                <div className="  text-base tracking-[-0.04em] font-semibold font-inter text-white text-left inline-block min-w-[79px]">
                  Contact us
                </div>
                <img
                  className="h-6 w-6  overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/arrownarrowupoutline@2x.png"
                />
              </button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            {accordionTitles.map((title, index) => (
              <FrameComponent key={index} title={title} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
});

export default Section5FAQs;
