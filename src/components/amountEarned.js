// @mui material components
import Grid from "@mui/material/Grid";
import { useScrollTrigger } from "@mui/material";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import coin1 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/coin1.png";
import coin2 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/coin2.png";
import coin3 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/coin3.png";
import coin4 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/coin4.png";
import coin5 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/gcoins.png";
import coin6 from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/gcoins.png";

function BuiltByDevelopers() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 40, // Adjust threshold as needed
  });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      my={6}
      py={6}
    >
      <Box
        sx={{ bgcolor: "#fff", position: "relative" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Grid
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            variant="h1"
            color="black"
            textAlign="center"
            fontFamily={"Mabry pro"}
            sx={{ fontFamily: "Mabry pro, sans-serif ", fontSize: 160 }}
          >
            $3,117,343
          </Typography>

          <Typography
            variant="h1"
            color="black"
            m={5}
            textAlign="center"
            sx={{ fontFamily: "Mabry pro, sans-serif ", fontSize: 27 }}
          >
            The amount of income earned by Gumroad <br></br> digital
            entrepreneurs last week.
          </Typography>
        </Grid>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: 1650,
          top: 10700,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={coin1} alt="coin1" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 1150,
          top: 10690,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={coin3} alt="coin3" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 1250,
          top: 11290,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={coin2} alt="coin2" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 10,
          top: 10740,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={coin3} alt="coin3" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 350,
          top: 10990,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={coin4} alt="coin4" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 1450,
          top: 11100,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={coin6} alt="coin4" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 250,
          top: 11200,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={coin5} alt="coin5" />
      </Box>
    </Grid>
  );
}

export default BuiltByDevelopers;
