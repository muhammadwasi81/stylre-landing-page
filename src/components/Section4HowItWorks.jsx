import { memo } from "react";
import { Container, Box, Grid, styled } from "@mui/material";

const Section = styled("div")(({ theme }) => ({
  color: "#000",
  fontFamily: "inter",
  padding: 1,
  borderRadius: 1,
}));

const Section4HowItWorks = memo(() => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <h1 className="text-center font-inter">How Style.Re Works</h1>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* First Column */}
        <Grid item xs={12} md={3}>
          <Section>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                className="h-[154px] mx-auto"
                loading="lazy"
                alt=""
                src="/divscc4ef60d62@2x.png"
              />
              <h4 className="text-center font-bold">
                Schedule your Order Pickup
              </h4>
              <p className="text-center">
                Request delivery and select a convenient pickup time from the
                retailer.
              </p>
            </Box>
          </Section>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={3}>
          <Section>
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
              <p className="text-center font-bold">Pay for your Delivery</p>
              <p className="text-center">
                Securely pay for the delivery service to get your fashion items
                swiftly to your doorstep.
              </p>
            </Box>
          </Section>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} md={3}>
          <Section>
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
              <p className="text-center font-bold">Receive Your Package</p>
              <p className="text-center">
                Sit back and relax as your package is delivered right to you.
              </p>
            </Box>
          </Section>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Section4HowItWorks;
