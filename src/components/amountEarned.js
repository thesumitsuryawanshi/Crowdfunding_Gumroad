// @mui material components
import Grid from "@mui/material/Grid";
import { useScrollTrigger } from "@mui/material";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
            sx={{ fontFamily: "serif", fontSize: 140 }}
          >
            $3,117,343
          </Typography>

          <Typography
            variant="h1"
            color="black"
            m={5}
            textAlign="center"
            sx={{ fontFamily: "serif", fontSize: 27 }}
          >
            The amount of income earned by Gumroad <br></br> digital
            entrepreneurs last week.
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
}

export default BuiltByDevelopers;
