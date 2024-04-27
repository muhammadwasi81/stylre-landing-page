import { memo } from "react";

const Section3Logos = memo(() => {
  return (
    <section className="cursor-pointer pb-10 flex flex-col items-center mx-auto justify-start pt-[34px]">
      <h1 className="font-inter font-black text-[40px] text-center">
        Order Pick Up with over 1000+ Retailers
      </h1>
      <div className="flex flex-wrap justify-center md:gap-5 gap-[70px] mt-5">
        <div className=" flex items-center justify-center">
          <img
            className="h-[38px]  object-contain"
            alt=""
            src="https://images.dsw.ca/is/image/dswca/dsw-logo-large"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            className="h-[38px]  object-contain"
            alt=""
            src="https://1000logos.net/wp-content/uploads/2020/06/Forever-21-logo.jpg"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            className="h-[38px]  object-contain"
            alt=""
            src="/147b362669385f340d115ade9be5a384-1@2x.png"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            className="h-[30px]  object-contain"
            loading="lazy"
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="h-[35px]  object-contain"
            loading="lazy"
            alt=""
            src="/old-navy-logo-1@2x.png"
          />
        </div>
        {/* Image 3 */}
        <div className=" flex items-center justify-center">
          <img
            className="h-[38px]  object-contain"
            loading="lazy"
            alt=""
            src="/macys.png"
          />
        </div>
        {/* Image 4 */}
        <div className=" flex items-center justify-center">
          <img
            className="h-[38px] object-contain"
            alt=""
            src="https://cdn.truejob.com/uploads/company/logo/22151/Nordstrom-logo-1.jpg"
          />
        </div>
      </div>
    </section>
  );
});

export default Section3Logos;
