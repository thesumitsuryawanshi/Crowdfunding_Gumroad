import Grid from "@mui/material/Grid"; // Import Grid component
import ConfusedOnLaptop from "../assets/MyImages/GumroadallSVG/MyPNG new/confusedOnLaptop.png";
import UnderTree2 from "../assets/MyImages/GumroadallSVG/MyPNG new/GuyUnderTree.png";

import Typography from "@mui/material/Typography";

//myip's
import Box from "@mui/material/Box";
import BOOKSVG from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/exciting.svg";

//myconponents

function MakeYourOwnRoad() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
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
          bgcolor: "#000",
          m: 0,
          p: 0,
          fontFamily: "serif",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        <Typography
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            m: 6,
            p: 6,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#000",
            color: "#000",
          }}
        >
          <img src={ConfusedOnLaptop}></img>
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#FEC901",
          m: 0,
          p: 0,
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 60,
            fontStyle: "bold",
            m: 6,
            p: 6,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#FEC901",
            color: "#000",
          }}
        >
          <img src={UnderTree2}></img>
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: 1470,
            top: 2700,
            zIndex: 1230,
            transition: "transform 0.1s ease",
          }}
        >
          <img src={BOOKSVG} alt="Description of your image" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default MakeYourOwnRoad;
