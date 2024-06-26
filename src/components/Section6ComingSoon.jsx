import { Grid, Container, Box } from "@mui/material";
import { memo } from "react";

const Section6ComingSoon = memo(() => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"auto"}
      >
        <Grid item xs={12} sm={6} md={6}>
          <h1 className="font-inter font-black text-[40px]">
            StyleRe App <br /> Coming Soon
          </h1>
          <Box>
            <img
              className="cursor-pointer h-[50px] w-[200px] object-contain bg-[#D3D3D3] rounded-lg"
              alt=""
              src="/apple.png"
            />
            <img
              className="cursor-pointer h-[50px] w-[200px] object-contain"
              loading="lazy"
              alt=""
              src="/link--download-on-the-google-play-store@2x.png"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img
            className="max-w-full max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/neutral-minimal-phone-frames-mockup-pinterest-pin1-1@2x.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
});

export default Section6ComingSoon;
