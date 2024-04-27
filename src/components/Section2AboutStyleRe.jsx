import { memo } from "react";
import { Box } from "@mui/material";

const Section2AboutStyleRe = memo(() => {
  return (
    <section
      style={{ background: "#FFF5EE" }}
      className="w-full lg:mt-0  mt-[86px] py-[86px] font-inter"
    >
      <Box className="flex justify-center flex-wrap">
        <img
          className="px-0 sm:px-5 relative max-w-full lg:h-[500px] h-auto object-contain"
          style={{
            width: "100%",
            objectFit: "contain",
            maxWidth: "500px",
          }}
          loading="lazy"
          alt=""
          src="/divlazyloadwrapper@2x.png"
        />
        <div className="w-[500px] md:w-full lg:px-0 px-5 relative bottom-[30px]">
          <h1 className="font-inter font-black text-[40px]">
            Style.Re is <br /> your go-to fashion <br /> companion
          </h1>
          <p className="relative bottom-[20px] font-inter">
            The ultimate solution for your last-minute fashion needs, whether
            you're on the go or find yourself pressed for time. Order Pickup
            through Style.Re is where convenience meets style.
          </p>
          <button
            className="
            cursor-pointer [border:none]  py-2 relative bottom-[20px] bg-orangered w-[80px] rounded-3xl text-white font-semibold"
          >
            Sign up
          </button>
        </div>
      </Box>
    </section>
  );
});

export default Section2AboutStyleRe;
