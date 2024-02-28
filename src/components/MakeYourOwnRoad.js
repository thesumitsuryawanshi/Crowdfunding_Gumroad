import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function MakeYourOwnRoad() {
  return (
    <>
      <Grid sx={{ textAlign: "center", py: 6 }}>
        <Typography
          variant="h1"
          sx={{
            m: 4,
            py: 3,
            alignItems: "center",
            fontFamily: "Mabry pro, sans-serif ",
            fontSize: "86px", // Increase font size to 72px
          }}
          color="#000"
        >
          Make your own road
        </Typography>
        <Typography
          variant="h3"
          color="dark"
          sx={{ my: 3, px: 30, fontFamily: "Mabry pro, sans-serif " }} // Specify the font family
          fontSize="30px"
          font-weight="400"
        >
          Whether you need more balance, flexibility, or just a different gig,{" "}
          <br></br>
          we make it easier to chart a new path. You dont have <br></br> to be a
          tech expert or even understand how to start <br></br> a business. You
          just gotta take what you know <br></br> and sell it.
          <br></br> <br></br>
        </Typography>
        <Typography
          variant="h3"
          color="dark"
          sx={{
            my: 3,
            px: 30,
            fontFamily: "Mabry pro, sans-serif ",
            transition: "text-decoration 1.3s ease", // Add animation to underline
            "&:hover": {
              textDecoration: "underline",
            },
          }} // Specify the font family
          fontSize="25px"
          font-weight="400"
          fontWeight={"BOLD"}
        >
          Explore Features →
        </Typography>
      </Grid>
    </>
  );
}

export default MakeYourOwnRoad;
