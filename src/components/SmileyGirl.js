import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import SmilingGirl from "../assets/MyImages/SmilingGirl.png";
import smileygirlmoney2 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/smileygirlmoney2.png";
import howto2 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/howto2.png";
import { useScrollTrigger } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyBtnStartSelling = styled("button")({
  color: "black",
  backgroundColor: "white",
  borderRadius: 44,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  border: "3px solid #000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "&:hover": {
    transform: "translateY(-9px) translateX(-9px)",
  },
});

const handleStartSellingClick = () => {
  window.open("https://app.gumroad.com/signup", "_blank");
};

export default function SmileyGirl() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 40, // Adjust threshold as needed
  });

  return (
    <Grid
      container
      sx={{ bgcolor: "#fc72e0", color: "#f0f0f0" }}
      height="100%"
      width="100%"
      display="flex"
      flexDirection="row"
      p={6}
      spacing={2}
    >
      <Grid item xs={6} display="flex" flexDirection="row">
        <Typography
          variant="h2"
          color="black"
          textAlign="center"
          sx={{ fontFamily: "serif", fontSize: 32 }}
          p={7}
          m={7}
        >
          “For years, I had a goal to develop ‘passive’ <br></br> income
          streams, but struggled to make that <br></br> a reality. Last year, I
          started selling <br></br> informational products on Gumroad <br></br>
          and since then have made $10k+ per month <br></br> building products
          that <br></br> I love.” <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography
            variant="h1"
            color="black"
            textAlign="center"
            sx={{ fontFamily: "serif", fontSize: 27 }}
          >
            - Steph Smith sells content tutorials
          </Typography>
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="row"
        justifyContent={"center"}
      >
        <Grid p={4} m={4} xs={6} alignItems="center" justify="center">
          <img src={SmilingGirl} alt="SmileyGirl" />
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          left: 1200,
          top: 10200,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={smileygirlmoney2} alt="smileygirlmoney2" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 1480,
          top: 10500,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={howto2} alt="howto2" />
      </Box>
      <MyBtnStartSelling
        onClick={handleStartSellingClick} // Add onClick event
        sx={{
          fontFamily: "serif",
          fontSize: 30,
          pl: 3,
          p: 1,
          position: "absolute",
          left: 1150,
          top: 10600,
          zIndex: 1230,
          transition: "transform 0.1s ease",
          transform: trigger ? "translateY(-10px)" : "translateY(0)",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#FF90E8" />
          <path
            d="M14.6108 24.0635C9.92396 24.0635 7.16699 20.3043 7.16699 15.6282C7.16699 10.7688 10.1997 6.82617 15.9893 6.82617C21.9627 6.82617 23.9845 10.8604 24.0764 13.1526H19.7572C19.6653 11.869 18.5625 9.94356 15.8974 9.94356C13.0485 9.94356 11.2105 12.4191 11.2105 15.4448C11.2105 18.4705 13.0485 20.9461 15.8974 20.9461C18.4706 20.9461 19.5734 18.929 20.0329 16.9118H15.8974V15.2615H24.575V23.6968H20.768V18.3789C20.4923 20.3043 19.2977 24.0635 14.6108 24.0635Z"
            fill="black"
          />
        </svg>
        stephsmithio
      </MyBtnStartSelling>
    </Grid>
  );
}
