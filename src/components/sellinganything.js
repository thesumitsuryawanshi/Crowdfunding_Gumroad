import Grid from "@mui/material/Grid"; // Import Grid component
import Typography from "@mui/material/Typography";
import { useScrollTrigger } from "@mui/material";

import selllanything from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/SellAnything2.png";

function SellAnything() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 40, // Adjust threshold as needed
  });

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 2,
        border: "1px solid black",
        textAlign: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#23A195",

          pt: 6,
          fontFamily: "Mabry pro, sans-serif  ",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        <img src={selllanything}></img>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#fff",
          m: 0,
          p: 0,
          fontFamily: "Mabry pro, sans-serif ",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 35,
            fontStyle: "bold",
            m: 6,
            p: 6,
            textAlign: "Start",
            fontFamily: "Mabry pro, sans-serif ",
            bgcolor: "#fff",
            color: "#000",
          }}
        >
          <Typography
            sx={{
              fontSize: 70,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "Mabry pro, sans-serif ",
              color: "#000",
            }}
          >
            Sell anything
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontSize: 30,
              fontStyle: "bold",

              textAlign: "Start",
              fontFamily: "Mabry pro, ",
              color: "#000",
            }}
          >
            Video Lessons Monthly subscriptions. Physical products. Whatever!
            Gumroad was created to help you experiment with all kinds of ideas
            and formats.
          </Typography>

          <Typography
            sx={{
              fontSize: 24,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            {" "}
            <br></br> ➛ Sell your Top 10 lists
            <br></br> ➛ Sell your crypto tips
            <br></br> ➛ Sell your fractal pack
            <br></br> ➛ Sell your keto cookbook
            <br></br> ➛ Sell your C4D scenes
            <br></br> ➛ Sell your new emojis
            <br></br> ➛ Seriously, sell anything!
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SellAnything;
