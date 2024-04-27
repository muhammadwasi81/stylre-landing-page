import { memo } from "react";
import { Container, Box, Grid } from "@mui/material";

const Section4HowItWorks = memo(() => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <h1 className="font-inter text-center font-black text-[40px]">
        How Style.Re Works
      </h1>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* First Column */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              color: "#191919",
            }}
          >
            <img
              className="h-[154px] mx-auto"
              loading="lazy"
              alt=""
              src="/divscc4ef60d62@2x.png"
            />
            <h1 className="font-inter text-center font-black text-[28px]">
              Schedule your Order Pickup
            </h1>
            <p className="text-center font-inter relative bottom-[20px]">
              Request delivery and select a convenient pickup time from the
              retailer.
            </p>
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              className="h-[154px] w-[150px] mx-auto"
              loading="lazy"
              alt=""
              src="/frame@2x.png"
            />
            <h1 className="font-inter text-center font-black text-[28px]">
              Pay for your Delivery
            </h1>
            <p className="text-center font-inter relative bottom-[20px]">
              Securely pay for the delivery service to get your fashion items
              swiftly to your doorstep.
            </p>
          </Box>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              className="h-[135.7px] w-[150px] mx-auto"
              alt=""
              src="/frame-1@2x.png"
            />
            <h1 className="font-inter text-center font-black text-[28px]">
              Receive Your Package
            </h1>
            <p className="text-center font-inter relative bottom-[20px]">
              Sit back and relax as your package is delivered right to you.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Section4HowItWorks;
