import React, { useState } from "react";
import { loremIpsum } from "https://cdn.skypack.dev/lorem-ipsum@2.0.4";

const FrameComponent = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  const content = loremIpsum({
    count: Math.floor(Math.random() * 5) + 1,
    units: "paragraphs",
    sentenceLowerBound: 4,
    sentenceUpperBound: 8,
    formatParagraphs: true,
  });

  return (
    <div
      className={`rounded-2xl box-border mb-5 overflow-hidden flex flex-col items-start justify-start py-3 px-5 gap-[13px] border-[1px] border-solid border-gray-600 ${
        isOpen ? "bg-[#fff]" : ""
      }`}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex-1 pt-[10px] relative tracking-[-0.04em] font-medium inline-block max-w-[calc(100%_-_36px)] mq450:text-base">
          {title}
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-cover pt-[10px]"
          loading="lazy"
          alt=""
          src={isOpen ? "/iconsaxlinearminus@2x.png" : "/iconsaxlinearadd.svg"}
        />
      </div>
      <div
        className={`self-stretch relative text-base leading-[24px] text-darkslategray-400 transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default FrameComponent;
