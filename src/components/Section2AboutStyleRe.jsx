import { memo } from "react";
import { Grid, Typography, Button } from "@mui/material";

const Section2AboutStyleRe = memo(() => {
  return (
    <section style={{ background: "#FFF5EE" }} className="w-full py-[86px]">
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1200px", margin: "auto" }}
      >
        <Grid item xs={12} lg={6}>
          <img
            style={{
              height: "300px",
              width: "100%",
              objectFit: "contain",
              maxWidth: "500px",
            }}
            loading="lazy"
            alt=""
            src="/divlazyloadwrapper@2x.png"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div style={{ paddingLeft: 0, paddingBottom: 0 }}>
            <Typography variant="h2" fontWeight="bold" paragraph>
              Style.Re is <br /> your go-to fashion companion
            </Typography>
            <Typography variant="body1" paragraph>
              The ultimate solution for your last-minute fashion needs, whether
              you're on the go or find yourself pressed for time. Order Pickup
              through Style.Re is where convenience meets style.
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FF4500",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              Sign-up
            </Button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
});

export default Section2AboutStyleRe;
