import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component={"footer"}
      className="w-full font-inter"
      sx={{
        backgroundColor: "#0D161C",
        fontFamily: "inter",
        color: "white",
      }}
    >
      <Container sx={{ p: 4 }}>
        <Grid container spacing={3} justifyContent="space-between" pb={10}>
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src="/footer.png"
              alt="Style.Re"
              className="cursor-pointer relative right-[20px]"
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
                <Typography sx={{ opacity: 0.8, mb: 1 }} className="font-inter">
                  Company
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    className="font-inter"
                  >
                    <span className="font-inter">About</span>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    className="font-inter"
                  >
                    <span className="font-inter">Partner with Us</span>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    className="font-inter"
                  >
                    <span className="font-inter">Contact Us</span>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ opacity: 0.8, mb: 1 }} className="font-inter">
                  Style.Re Account
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    className="font-inter"
                  >
                    <span className="font-inter">Login/Sign up</span>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    className="font-inter"
                  >
                    <span className="font-inter">Order Pickups</span>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    className="font-inter"
                  >
                    <span className="font-inter">Help</span>
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
            <span className="font-inter">
              &copy; {currentYear} Style.Re Unlimited & Co. All rights reserved.
              Style.Re and its services are not affiliated or endorsed by the
              retailers on this site. Style.Re does not operate in Alaska.
            </span>
          </Box>
          <Box sx={{ fontSize: ".7rem" }}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              className="font-inter"
            >
              Terms&nbsp;&nbsp;
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              className="font-inter"
            >
              Privacy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
