import Box from "@mui/material/Box";

import PeopleInParkSVG from "../assets/MyImages/GumroadallSVG/MyPNG new/PeopleInPark.png";
import Card from "@mui/material/Card";

function PeopleInPark() {
  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <img
          src={PeopleInParkSVG}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Box>
    </Card>
  );
}

export default PeopleInPark;
