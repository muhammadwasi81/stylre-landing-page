import { memo } from "react";

const Section = memo(() => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start pt-[59px] px-5 pb-[42px] box-border gap-[32px] min-h-[512px] max-w-full text-center text-10xl text-black font-inter mq950:gap-[16px] mq950:pt-[38px] mq950:pb-[27px] mq950:box-border">
      <div className="w-[1078px] flex flex-row items-start justify-center max-w-full">
        <h2 className="m-0 w-[790px] relative text-inherit leading-[32px] font-black font-inherit flex items-center justify-center shrink-0 max-w-full mq450:text-4xl mq450:leading-[26px]">{`Order Pickup & Same Day Delivery you can count on`}</h2>
      </div>
      <div className="w-[1078px] overflow-hidden flex flex-row flex-wrap items-start justify-center gap-[24.1px] max-w-full text-lg text-darkslategray-200">
        <div className="flex-1 rounded-xl flex flex-col items-center justify-start min-w-[257px] max-w-full">
          <img
            className="self-stretch h-[257px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/picture--choosewhatyouwantefca561a8f08c2a5ce5ed77df6c10bf54d4439ca8434f12e9d9641bf91dd2b43jpg@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-xl bg-whitesmoke-100 flex flex-col items-center justify-center py-[33px] px-0">
            <div className="self-stretch flex flex-col items-start justify-start">
              <b className="w-[251.6px] relative leading-[24px] flex items-center justify-center">
                Shop in-store inventory
              </b>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-xl flex flex-col items-start justify-start min-w-[257px] max-w-full">
          <img
            className="self-stretch h-[257px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/picture--seerealtimeupdates1d23ec0f423b24300c0cd6abcb4724f36b0af840fbdf106aa5f140e835cff7ebjpg@2x.png"
          />
          <button className="cursor-pointer [border:none] pt-8 px-[28.2px] pb-[34px] bg-whitesmoke-100 self-stretch rounded-t-none rounded-b-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-100">
            <b className="flex-1 relative text-lg leading-[24px] font-inter text-darkslategray-200 text-center">
              Get your items the same-day
            </b>
          </button>
        </div>
        <div className="h-[279px] flex-1 rounded-xl flex flex-col items-center justify-start py-0 pr-[0.2px] pl-[0.1px] box-border min-w-[257px] max-w-full">
          <img
            className="self-stretch h-[257px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/picture--getyouritemssamedayc85bb8474d3f09fe7eec97688767459f93852e29bf3fa849ab410f73d6f91b3ajpg@2x.png"
          />
          <button className="cursor-pointer [border:none] py-[33px] px-6 bg-whitesmoke-100 self-stretch rounded-t-none rounded-b-xl flex flex-col items-center justify-center">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[14.3px] pl-0">
              <b className="self-stretch relative text-lg leading-[24px] font-inter text-darkslategray-200 text-center">
                Track your delivery in real-time
              </b>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Section;
