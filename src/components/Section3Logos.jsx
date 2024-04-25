import { memo } from "react";

const Section3Logos = memo(() => {
  return (
    <section className="cursor-pointer self-stretch bg-white gap-10 flex flex-col items-center justify-start pt-[34px] gap-10 max-w-full text-center text-21xl text-gray-300 font-inter mq950:gap-[18px] mq1425:pl-[25px] mq1425:pr-[25px] mq1425:box-border">
      <div className="self-stretch flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 h-[88px] w-[989px] relative text-inherit tracking-[-0.57px] leading-[44px] font-black font-inherit flex items-center justify-center shrink-0 max-w-full mq950:text-13xl mq950:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
          Order Pick Up with over 1000+ Retailers
        </h1>
      </div>
      <div className="flex flex-wrap justify-center py-6 pr-0 pl-14 box-border gap-x-4 max-w-full mq950:gap-x-2">
        <div className="w-[130px] h-[104px] flex items-center justify-center">
          <img
            className="h-[38px] max-w-full object-contain"
            alt=""
            src="/147b362669385f340d115ade9be5a384-1@2x.png"
          />
        </div>
        <div className="w-[130px] h-[104px] flex items-center justify-center">
          <img
            className="h-[38px] max-w-full object-contain"
            loading="lazy"
            alt=""
            src="https://churchillsquare.com/wp-content/uploads/2018/05/zara.png"
          />
        </div>
        <div className="w-[130px] h-[104px] flex items-center justify-center">
          <img
            className="h-[38px] max-w-full object-contain"
            loading="lazy"
            alt=""
            src="/old-navy-logo-1@2x.png"
          />
        </div>
        {/* Image 3 */}
        <div className="w-[130px] h-[104px] flex items-center justify-center">
          <img
            className="h-[38px] max-w-full object-contain"
            loading="lazy"
            alt=""
            src="/macys.png"
          />
        </div>
        {/* Image 4 */}
        <div className="w-[130px] h-[104px] flex items-center justify-center">
          <img
            className="h-[38px] max-w-full object-contain"
            alt=""
            src="https://seeklogo.com/images/N/nordstrom-logo-42E5659A4B-seeklogo.com.png"
          />
        </div>
        <div className="w-[130px] h-[104px] flex items-center justify-center">
          <img
            className="h-[38px] max-w-full object-contain"
            alt=""
            src="https://logo-logos.com/2016/11/Dillards_logo.png"
          />
        </div>
      </div>
    </section>
  );
});

export default Section3Logos;
