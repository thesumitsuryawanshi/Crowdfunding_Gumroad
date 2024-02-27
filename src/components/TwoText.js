import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Import Grid component

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
          bgcolor: "#B23287",
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
            bgcolor: "#B23287",
            color: "#000",
          }}
        >
          Don’t take risks. <br /> That’s scary!
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#FE91E8",
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
            bgcolor: "#FE91E8",
            color: "#000",
          }}
        >
          Place Small Bets. <br /> Thats Exciting!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default MakeYourOwnRoad;
