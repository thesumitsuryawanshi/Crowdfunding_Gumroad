// @mui material components
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Seventeenblocks() {
  const sectionData = [
    {
      color: "#22A194",
      headtext: "3D",
      subheadtext:
        "Perfect your craft with the same tools used at Dreamworks and Pixar.",
      tags: ["Blender", "3D Model", "Spark AR"],
    },
    {
      color: "#E2442F",
      headtext: "Audio",
      subheadtext:
        "Open your ears and mind to interviews, meditations, and true crime thrillers.",
      tags: ["Meditation", "Hypnosis", "Subliminal Messages"],
    },
    {
      color: "#22A194",
      headtext: "Business & Money",
      subheadtext: "Learn to earn in an increasingly unpredictable world.",
      tags: ["Notion Template", "Investing", "Instagram"],
    },
    {
      color: "#F1F232",
      headtext: "Comics & Graphic Novels",
      subheadtext:
        "Sequential art with loads of heart. Welcome to a paradise of panels.",
      tags: ["Comic", "Manga", "Anime"],
    },
    {
      color: "#FEC901",
      headtext: "Design",
      subheadtext:
        "Code, design, and ship your dream product with these technical resources.",
      tags: ["Textures", "Mockup", "Font"],
    },
    {
      color: "#91A9ED",
      headtext: "Drawing & Painting",
      subheadtext:
        "Tutorials, plugins, and brushes from pro concept artists and illustrators.",
      tags: ["Procreate", "Brushes", "Art"],
    },
    {
      color: "#22A194",
      headtext: "Education",
      subheadtext:
        "Pick up a new skill with courses and guides from world-class pros.",
      tags: ["Education", "Certification Exams", "Learning"],
    },
    {
      color: "#91A9ED",
      headtext: "Fiction Books",
      subheadtext:
        "Short stories, novellas, and epic tomes full of interesting characters and worlds.",
      tags: ["Sci-Fi", "Poetry", "Fiction"],
    },
    {
      color: "#E2442F",
      headtext: "Films",
      subheadtext:
        "Have a movie night with some of the best stories to hit the small screen.",
      tags: ["After Effects", "VJ Loops", "LUTs"],
    },
    {
      color: "#FEC901",
      headtext: "Fitness & Health",
      subheadtext:
        "Whether you’re looking to shed or shred, here are coaches to pump you up.",
      tags: ["Fitness", "Workout Program", "Yoga"],
    },
    {
      color: "#E2442F",
      headtext: "Gaming",
      subheadtext:
        "Explore new worlds from the world’s most creative indie developers.",
      tags: ["VRChat", "Avatar", "Assets"],
    },
    {
      color: "#F1F232",
      headtext: "Music & Sound Design",
      subheadtext:
        "Tracks, beats, and loops from the best musicians and engineers in the biz.",
      tags: ["Ableton", "Sample Pack", "Sheet Music"],
    },
    {
      color: "#22A194",
      headtext: "Photography",
      subheadtext:
        "Get snapping with pro presets, stock imagery, and digi darkroom needs.",
      tags: ["Reference Photos", "Stock Photos", "Photobash"],
    },
    {
      color: "#F1F232",
      headtext: "Recorded Music",
      subheadtext:
        "Tracks and albums from the best musicians and artists in the biz.",
      tags: ["Singles", "Jazz", "Instrumental Music"],
    },
    {
      color: "#E2442F",
      headtext: "Self Improvement",
      subheadtext:
        "Move your body and your audience with guides, videos, and more.",
      tags: ["Coloring Page", "Printable", "Productivity"],
    },
    {
      color: "#FEC901",
      headtext: "Software Development",
      subheadtext:
        "Learn to code and tools to help you code more productively.",
      tags: ["Programming", "Windows", "Theme"],
    },
    {
      color: "#91A9ED",
      headtext: "Writing & Publishing",
      subheadtext:
        "Fill your brain with words and wisdom from creative authors and storytellers.",
      tags: ["KDP Interior", "eBook", "Low Content Books"],
    },
  ];

  const renderTags = (tags) =>
    tags.map((tag, index) => (
      <Button
        key={index}
        size="small"
        sx={{ mr: 1, mb: 1, border: "1px solid black", fontWeight: "bold" }}
        variant="contained"
        color="white"
      >
        {tag}
      </Button>
    ));

  const sections = sectionData.map((section, index) => (
    <Grid
      key={index}
      sx={{ width: "33%", p: 1, textAlign: "start" }}
      style={{ display: "inline-block" }}
    >
      <Card
        sx={{
          backgroundColor: section.color,
          margin: 1,
          borderRadius: 5,
          border: "1px solid black",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {section.headtext}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {section.subheadtext}
          </Typography>
          <Typography variant="body2" m={2} style={{ fontWeight: "bold" }}>
            Popular Tags
          </Typography>
          <Typography style={{ display: "flex", flexWrap: "wrap" }}>
            {renderTags(section.tags)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <Box component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", m: 6, mx: "auto", px: 5 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "",
              fontSize: 60,
              fontStyle: "Bold",
              color: "black",
            }}
            fontFamily="Mabry pro , Sans-serif "
          >
            Looking for inspiration on what <br></br> you can sell?
          </Typography>
          <Typography
            variant="body1"
            color="text"
            sx={{
              fontFamily: "Mabry pro , Sans-serif",
              fontSize: 20,
              fontStyle: "Bold",
              color: "black",
            }}
            fontFamily="Mabry pro , Sans-serif"
          >
            Discover the best-selling products and creators on Gumroad.
          </Typography>
        </Grid>
      </Container>

      <React.Fragment style={{ textAlign: "center", justifyContent: "center" }}>
        <Grid
          container
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          {sections}
        </Grid>
      </React.Fragment>
    </Box>
  );
}
export default Seventeenblocks;
