import { memo } from "react";
import FrameComponent from "./FrameComponent";

const accordionTitles = [
  "How does Style.Re order pickup work?",
  "How much does it cost?",
  "Is there contactless delivery?",
  "Will my items be safe?",
];

const Section5FAQs = memo(() => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center max-w-full text-left text-xl text-darkslategray-200 font-inter">
      <div className="self-stretch bg-ghostwhite overflow-hidden flex flex-row flex-wrap items-start justify-center pt-[62px] px-5 pb-[245px]">
        <div className="w-[451px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border gap-[21px] max-w-full">
          <div className="w-[300px] relative leading-[32px] flex items-center mq450:text-base mq450:leading-[26px]">
            Frequently Asked Questions
          </div>
          <h1 className="m-0 self-stretch relative text-21xl tracking-[-0.04em] font-black font-inherit text-black mq950:text-13xl mq450:text-5xl">
            Got questions? We got answers!
          </h1>
          <div className="self-stretch relative text-2xl leading-[150%] text-slategray mq450:text-mid mq450:leading-[25px]">
            Feel free to reach out to us if you have more questions for us.
          </div>
          <button className="cursor-pointer py-3.5 px-[31px] bg-darkslategray-300 rounded-xl flex flex-row items-center justify-center gap-[4px] whitespace-nowrap border-[1px] border-solid border-gainsboro-200 hover:bg-dimgray hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
            <div className=" relative text-base tracking-[-0.04em] font-semibold font-inter text-white text-left inline-block min-w-[79px]">
              Contact us
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrownarrowupoutline@2x.png"
            />
          </button>
        </div>
        <div className="cursor-pointer mt-3 flex flex-col items-start justify-start py-0 pr-0 pl-0 lg:pl-8 box-border max-w-full text-gray-400">
          <div className="lg:w-[688px] overflow-x-auto flex flex-col items-start justify-start gap-[20px] max-w-full lg:max-w-[688px]">
            <div className="w-[688px] rounded-2xl bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[22px] px-[23px] gap-[13px] border-[1px] border-solid border-gray-600">
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full">
                <div className="flex-1 relative tracking-[-0.04em] font-medium inline-block max-w-[calc(100%_-_36px)] mq450:text-base">
                  How does Style.Re order pickup work?
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/iconsaxlinearminus@2x.png"
                />
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-darkslategray-400">
                Login to your account, upload your order pickup barcode from th
                retailer and schedule a pickup from a Style.Re runner.
              </div>
            </div>
            <div className="cursor-pointer flex flex-col items-start justify-start py-0 pr-0 pl-0 lg:pl-8 box-border max-w-full text-gray-400">
              <div className="lg:w-[688px] overflow-x-auto flex flex-col items-start justify-start gap-[20px] max-w-full lg:max-w-[688px]">
                {accordionTitles.map((title, index) => (
                  <FrameComponent key={index} title={title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section5FAQs;
