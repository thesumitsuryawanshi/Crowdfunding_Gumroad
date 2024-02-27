import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TopAnimationGuySection from "../assets/MyImages/topAnimationofBoy.png";

function TopAnimationGuy() {
  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        {/* Render the image using the img tag */}
        <img src={TopAnimationGuySection} alt="Top Animation Guy" />
      </Box>
    </Card>
  );
}

export default TopAnimationGuy;
