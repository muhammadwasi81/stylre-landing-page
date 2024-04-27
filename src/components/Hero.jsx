import { memo } from "react";

const Hero = memo(() => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-[26px] px-[35px] pb-[229px] box-border gap-[159px] bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[676px] max-w-full text-left text-45xl text-gray-500 font-inter mq950:gap-[40px] mq950:pt-5 mq950:pb-[149px] mq950:box-border mq1425:gap-[79px]">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-0.5 box-border max-w-full mq950:gap-[370px] mq1425:gap-[740px] mq450:gap-[185px]">
        <header className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px]">
          <div className="w-[184.5px] flex flex-col items-start justify-start">
            <img
              className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/footer.png"
            />
          </div>
          <div className="w-[184.5px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 pr-3 pl-0 box-border gap-[8px]">
            <button className="cursor-pointer [border:none] py-2 px-3 bg-orangered w-[78px] rounded-3xl flex flex-col items-center justify-center box-border">
              <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
                <b className="self-stretch relative text-lg tracking-[-0.51px] leading-[24px] font-roboto text-white text-center">
                  Login
                </b>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2 px-3 bg-white flex-1 rounded-3xl flex flex-col items-center justify-center">
              <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
                <b className="self-stretch relative text-lg tracking-[-0.51px] leading-[24px] inline-block font-roboto text-darkslategray-100 text-center min-w-[62.7px] whitespace-nowrap hover:text-darkslategray">
                  Sign Up
                </b>
              </div>
            </button>
          </div>
        </header>
      </div>
      <div className="px-5 w-[633px] overflow-hidden flex flex-col items-start justify-start gap-[40px] max-w-full mq950:gap-[20px]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
          <h1 className="m-0 self-stretch relative text-inherit leading-[68px] font-extrabold font-inherit mq950:text-32xl mq950:leading-[54px] mq450:text-19xl mq450:leading-[41px]">
            <p className="m-0">Fashion delivered</p>
            <p className="m-0">to your front door</p>
          </h1>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[334px] overflow-hidden flex flex-col items-end justify-center max-w-full">
          <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.2)] rounded-3xl bg-orangered flex flex-col items-center justify-center py-[11px] px-[49px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-2 pl-0">
              <div className="w-[228px] overflow-hidden shrink-0 flex flex-col items-end justify-center py-[3px] pr-0 pl-[23px] box-border">
                <b className="ml-2 self-stretch relative text-base leading-[16px] font-roboto text-white text-left">
                  Schedule an Order Pickup
                </b>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain z-[1] ml-[-222px]"
                alt=""
                src="/schedule@2x.png"
              />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
});

export default Hero;
