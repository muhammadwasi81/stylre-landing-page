import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "#0C1E33",
        fontFamily: "inter",
        color: "white",
        width: "100%",
      }}
    >
      <Container sx={{ p: 4 }}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src="/footer.png"
              alt="Style.Re"
              sx={{ width: 200, mb: 2 }}
            />
            <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
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
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ opacity: 0.8, mb: 1 }}>
                  Company
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Link href="#" color="inherit" underline="hover">
                    About
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Partner with Us
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Contact Us
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ opacity: 0.8, mb: 1 }}>
                  Style.Re Account
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Link href="#" color="inherit" underline="hover">
                    Login/Sign up
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Order Pickups
                  </Link>
                  <Link href="#" color="inherit" underline="hover">
                    Help
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            borderTop: "1px solid #FF6600",
            pt: 2,
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
            fontSize: ".7rem",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img className="w-[30px] cursor-pointer" alt="" src="/svg.svg" />
            <Typography variant="body2" sx={{ fontSize: ".7rem" }}>
              &copy; {currentYear} Style.Re Unlimited & Co. All rights reserved.
              Style.Re and its services are not affiliated or endorsed by the
              retailers on this site. Style.Re does not operate in Alaska.
            </Typography>
          </Box>
          <Box sx={{ fontSize: ".7rem" }}>
            <Link href="#" color="inherit" underline="hover">
              Terms&nbsp;&nbsp;
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
