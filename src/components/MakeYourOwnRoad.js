import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function MakeYourOwnRoad() {
  return (
    <>
      <Grid sx={{ textAlign: "center", py: 3 }}>
        <Typography
          variant="h1"
          sx={{
            m: 4,
            py: 3,
            alignItems: "center",
            fontFamily: "serif",
            fontSize: "66px", // Increase font size to 72px
          }}
          color="#000"
        >
          Make your own road
        </Typography>
        <Typography
          variant="h3"
          color="dark"
          sx={{ my: 3, px: 30, fontFamily: "serif" }} // Specify the font family
          fontSize="40px"
          font-weight="400"
        >
          Whether you need more balance, flexibility, or just a different gig,
          we make it easier to chart a new path. You dont have to be a tech
          expert or even understand how to start a business. You just gotta take
          what you know and sell it.
          <br></br> <br></br>
        </Typography>
        <Typography
          variant="h3"
          color="dark"
          sx={{
            my: 3,
            px: 30,
            fontFamily: "serif",
            textDecoration: "underline",
            transition: "text-decoration 0.3s ease", // Add animation to underline
            "&:hover": {
              textDecoration: "underline",
            },
          }} // Specify the font family
          fontSize="40px"
          font-weight="400"
          fontStyle={"BOLD"}
        >
          Explore Features →
        </Typography>
      </Grid>
    </>
  );
}

export default MakeYourOwnRoad;
