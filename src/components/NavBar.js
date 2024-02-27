import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button, Box } from "@mui/material";

function DefaultNavBar() {
  const linkProps = {
    component: "a",
    href: "https://www.gumroad.com",
    target: "_blank",
    style: {
      textDecoration: "none",
    },
  };

  return (
    <Box border="1px solid black">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexGrow: 1,
              p: 1,
            }}
          >
            {/* Updated Button components */}
            <Typography
              {...linkProps}
              padding="13px 0px 13px 20px"
              fontSize="18px"
              fontFamily="Mabry pro"
              color="#000"
            >
              Features
            </Typography>
            <Typography
              {...linkProps}
              padding="13px"
              fontSize="18px"
              fontFamily="Mabry pro"
              color="#000"
            >
              Pricing
            </Typography>
            <Typography
              {...linkProps}
              padding="13px"
              fontSize="18px"
              fontFamily="Mabry pro"
              color="#000"
            >
              Blog
            </Typography>
            <Typography
              {...linkProps}
              padding="13px"
              fontSize="18px"
              fontFamily="Mabry pro"
              color="#000"
            >
              Discover
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* Updated Typography components */}
          <Typography
            {...linkProps}
            padding="18px 35px"
            fontSize="21px"
            fontFamily="Mabry pro"
            border="1px solid black"
            marginRight={0} // Remove margin-right
            color="#000" // Changed color to white
          >
            Login
          </Typography>
          <Typography
            {...linkProps}
            fontFamily="Mabry pro"
            padding="18px 30px"
            border="1px solid black"
            backgroundColor="#000"
            fontSize="18px"
            color="#fff" // Changed color to white
          >
            Start Selling
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DefaultNavBar;
