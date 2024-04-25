import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="self-stretch bg-gray-200 flex flex-col items-center justify-start pt-10 pb-[50px] pr-5 pl-6 box-border max-w-full text-left text-xs-3 text-gray-800 font-inter mq450:pt-[26px] mq450:pb-[86px] mq450:box-border">
      <div className="w-[1568px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="h-[123px] flex flex-col items-start justify-start py-0 pr-[980px] pl-0 box-border gap-[10px] max-w-[calc(100%_-_274px)] mq950:pr-[245px] mq950:box-border mq1425:pr-[490px] mq1425:box-border mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start">
            <button className="cursor-pointer [border:none] py-1.5 pr-5 pl-0 bg-[transparent] flex flex-row items-center justify-start">
              <img
                className="h-10 w-[203.8px] relative object-contain"
                alt=""
                src="/footer.png"
              />
            </button>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[27px] pl-4 gap-[12px]">
            <img
              className="h-[21px] w-6 relative object-cover min-h-[21px]"
              loading="lazy"
              alt=""
              src="/link--doordash-on-facebook@2x.png"
            />
            <img
              className="h-[21px] w-6 relative object-cover min-h-[21px]"
              loading="lazy"
              alt=""
              src="/link--doordash-on-twitter@2x.png"
            />
            <img
              className="h-[21px] w-6 relative min-h-[21px]"
              loading="lazy"
              alt=""
              src="/link--doordash-on-instagram.svg"
            />
          </div>
        </div>
        <div className="w-[117px] flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
            <div className="flex flex-col items-start justify-start opacity-[0.8]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.2px] leading-[22px] inline-block min-w-[50px]">
                  Company
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-center text-mini-9 text-white">
            <div className="w-[113px] flex flex-col items-start justify-start font-roboto">
              <div className="overflow-hidden flex flex-col items-start justify-center py-0 pr-0.5 pl-0">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[41px] whitespace-nowrap">{`About `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0 text-mini-6">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[109px]">
                      Partner with Us
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-mini-4">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start py-0 pr-[0.1px] pl-[0.3px]">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[78px]">
                      Contact Us
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[113px] flex flex-col items-start justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-px h-[26px]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-px h-[26px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[117px] flex flex-col items-start justify-start gap-[12px]">
          <div className="overflow-hidden flex flex-col items-start justify-center py-0 pr-[29px] pl-0">
            <div className="flex flex-col items-start justify-start opacity-[0.8]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.2px] leading-[22px] inline-block min-w-[88px]">
                  Style.Re Account
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-center text-mini-9 text-white">
            <div className="flex flex-col items-start justify-start font-roboto">
              <div className="overflow-hidden flex flex-col items-start justify-center py-0 pr-5 pl-0">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[93px]">
                      Login/Sign up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-3.5 pl-0 text-mini-6">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[99px]">
                      Order Pickups
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-mini-4">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start py-0 pr-0 pl-[0.3px]">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[32px]">
                      Help
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[113px] flex flex-col items-start justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-px h-[26px]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-px h-[26px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1568px] box-border flex flex-row items-start justify-start pt-[13px] px-0 pb-[22px] max-w-full text-sm text-white font-roboto border-t-[2px] border-solid border-orangered">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[7px] px-0 box-border max-w-full [row-gap:20px]">
          <div className="w-8 flex flex-row items-start justify-start py-[8.5px] pr-[31px] pl-0 box-border relative text-blue font-inter">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg.svg"
            />
            <div className="ml-[-10392px] h-px flex-1 overflow-hidden flex flex-row items-start justify-start relative">
              <div className="h-[17px] w-[66px] absolute !m-[0] right-[-65px] bottom-[-16px] flex items-center z-[1]">
                DoorDash
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border min-w-[833px] max-w-full mq950:min-w-full">
            <div className="self-stretch relative leading-[18px] whitespace-pre-wrap">
              &copy; {new Date().getFullYear()} Style.Re Unlimited & Co. All
              rights reserved. Style.Re and its services are not affiliated or
              endorsed by the retailers on this site. Style.Re does not operate
              in Alaska.
            </div>
          </div>
          <div className="w-[254px] flex flex-row items-start justify-start gap-[8px] text-right text-xs-6">
            <div className="flex-1 relative leading-[18px]">Terms</div>
            <div className="w-[58px] relative text-xs leading-[18px] flex items-center shrink-0">
              Privacy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
