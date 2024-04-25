import { memo } from "react";

const FrameComponent = memo(({ linkHome }) => {
  return (
    <div className="w-[688px] rounded-2xl box-border overflow-hidden flex flex-col items-start justify-start py-[22px] px-[23px] text-left text-xl text-gray-400 font-inter border-[1px] border-solid border-gray-700">
      <div className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full">
        <div className="flex-1 relative tracking-[-0.04em] font-medium inline-block max-w-[calc(100%_-_36px)] mq450:text-base">
          {linkHome}
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/iconsaxlinearadd.svg"
        />
      </div>
    </div>
  );
});

export default FrameComponent;
