import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";

//myips
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

//images
import BounceBall from "../assets/MyImages/GumroadallSVG/BlocksSVGS/bouncedball.svg";
import Mike from "../assets/MyImages/GumroadallSVG/BlocksSVGS/mike.svg";
import Scissor from "../assets/MyImages/GumroadallSVG/BlocksSVGS/scissor.svg";
import BoomSpark from "../assets/MyImages/GumroadallSVG/BlocksSVGS/boomspark.svg";

import Soft_Developement1 from "../assets/MyImages/GumroadallSVG/BlocksSVGS/soft_developement.svg";
import LoudSpeaker3 from "../assets/MyImages/GumroadallSVG/BlocksSVGS/loud speakers.svg";
import Books from "../assets/MyImages/GumroadallSVG/BlocksSVGS/books.svg";

import Films from "../assets/MyImages/GumroadallSVG/BlocksSVGS/Films.svg";
import Volleyball_finger from "../assets/MyImages/GumroadallSVG/BlocksSVGS/volleyball_onFinger.svg";
import Gaming from "../assets/MyImages/GumroadallSVG/BlocksSVGS/Gaming.svg";

import LoudSpeaker1 from "../assets/MyImages/GumroadallSVG/BlocksSVGS/loud speakers.svg";
import Camera from "../assets/MyImages/GumroadallSVG/BlocksSVGS/camera.svg";
import Shoes from "../assets/MyImages/GumroadallSVG/BlocksSVGS/shoes.svg";

import windowClick from "../assets/MyImages/GumroadallSVG/BlocksSVGS/windowClick.svg";
import PinkPaintBrush from "../assets/MyImages/GumroadallSVG/BlocksSVGS/PinkPaintBrush.svg";
import GreenWritingPen from "../assets/MyImages/GumroadallSVG/BlocksSVGS/greenWritingPen.svg";

function SellAnything() {
  const sectionData = [
    {
      icon: BounceBall,
      color: "#22A194",
      headtext: "3D",
      subheadtext:
        "with Gumroad Perfect your craft with the same tools used at Dreamworks and Pixar.",
      tags: ["Blender", "3D Model", "Spark AR"],
    },
    {
      icon: Mike,
      color: "#E2442F",
      headtext: "Audio",
      subheadtext:
        "Open your ears and mind to interviews, meditations, and true crime thrillers.",
      tags: ["Meditation", "Hypnosis", "Subliminal Messages"],
    },
    {
      icon: Scissor,
      color: "#22A194",
      headtext: "Business & Money",
      subheadtext:
        "with Gumroad now, you can Learn to earn in an increasingly unpredictable world.",
      tags: ["Notion Template", "Investing", "Instagram"],
    },
    {
      icon: BoomSpark,
      color: "#F1F232",
      headtext: "Comics & Graphic Novels",
      subheadtext:
        "With Gumroad Sequential art with loads of heart. Welcome to a paradise of panels.",
      tags: ["Comic", "Manga", "Anime"],
    },
    {
      icon: windowClick,
      color: "#FEC901",
      headtext: "Design",
      subheadtext:
        "Code, design, and ship your dream product with these technical resources.",
      tags: ["Textures", "Mockup", "Font"],
    },
    {
      icon: PinkPaintBrush,
      color: "#91A9ED",
      headtext: "Drawing & Painting",
      subheadtext:
        "with gumroad Tutorials, plugins, and brushes from pro concept artists and illustrators.",
      tags: ["Procreate", "Brushes", "Art"],
    },
    {
      icon: Books,
      color: "#22A194",
      headtext: "Education",
      subheadtext:
        "Choose any Pick up a new skill with courses and guides from world-class pros.",
      tags: ["Education", "Certification Exams", "Learning"],
    },
    {
      icon: GreenWritingPen,
      color: "#91A9ED",
      headtext: "Fiction Books",
      subheadtext:
        "Short stories, novellas, and epic tomes full of interesting characters and worlds.",
      tags: ["Sci-Fi", "Poetry", "Fiction"],
    },
    {
      icon: Films,
      color: "#E2442F",
      headtext: "Films",
      subheadtext:
        "With Gumroad Have a movie night with some of the best stories to hit the small screen.",
      tags: ["After Effects", "VJ Loops", "LUTs"],
    },
    {
      icon: Volleyball_finger,
      color: "#FEC901",
      headtext: "Fitness & Health",
      subheadtext:
        "Whether you’re looking to shed or shred, here are coaches to pump you up.",
      tags: ["Fitness", "Workout Program", "Yoga"],
    },
    {
      icon: Gaming,
      color: "#E2442F",
      headtext: "Gaming",
      subheadtext:
        "Explore new worlds with Gumroad from the world’s most creative indie developers.",
      tags: ["VRChat", "Avatar", "Assets"],
    },
    {
      icon: LoudSpeaker1,
      color: "#F1F232",
      headtext: "Music & Sound Design",
      subheadtext:
        "Tracks, beats, and loops from the best musicians and engineers in the biz.",
      tags: ["Ableton", "Sample Pack", "Sheet Music"],
    },
    {
      icon: Camera,
      color: "#22A194",
      headtext: "Photography",
      subheadtext:
        "with Gumroad Get snapping with pro presets, stock imagery, and digi darkroom needs.",
      tags: ["Reference Photos", "Stock Photos", "Photobash"],
    },
    {
      icon: LoudSpeaker3,
      color: "#F1F232",
      headtext: "Recorded Music",
      subheadtext:
        "Now , You can Tracks and albums from the best musicians and artists in the biz.",
      tags: ["Singles", "Jazz", "Instrumental Music"],
    },
    {
      icon: Shoes,
      color: "#E2442F",
      headtext: "Self Improvement",
      subheadtext:
        "with Gumroad you can now Move your body and your audience with guides, videos, and more.",
      tags: ["Coloring Page", "Printable", "Productivity"],
    },
    {
      icon: Soft_Developement1,
      color: "#FEC901",
      headtext: "Software Development",
      subheadtext:
        "With Gumroad Learn to code and tools to help you code more productively.",
      tags: ["Programming", "Windows", "Theme"],
    },
    {
      icon: GreenWritingPen,
      color: "#91A9ED",
      headtext: "Writing & Publishing",
      subheadtext:
        "Fill your brain with words and wisdom from creative authors and storytellers.",
      tags: ["KDP Interior", "eBook", "Low Content Books"],
    },
  ];

  return (
    <>
      <Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: 64,
              fontStyle: "bold",
              fontFamily: "Mabry, ",
              color: "#000",
              p: 5,
            }}
          >
            Looking for inspiration on what <br></br> you can sell?
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: 32,
              fontStyle: "bold",
              fontFamily: "Mabry, ",
              color: "#000",
            }}
          >
            Discover the best-selling products and creators on Gumroad
          </Typography>
        </Grid>
        <Grid container>
          <Grid
            container
            spacing={3}
            style={{ margin: 30, padding: 30 }}
            py={5}
          >
            {sectionData.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  style={{
                    backgroundColor: data.color,
                    border: "1px solid black",
                    borderRadius: "15px ",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        variant="rounded"
                        src={data.icon}
                        sx={{ width: 80, height: 80 }}
                      />
                    }
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight={"BOLD"}
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"start"}
                    >
                      {data.headtext}
                    </Typography>
                    <Typography
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"start"}
                      align="start"
                      p={1}
                    >
                      {data.subheadtext}
                    </Typography>
                    <div
                      style={{}}
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"start"}
                      align="start"
                      alignItems="start"
                    >
                      {data.tags.map((tag, index) => (
                        <Button
                          key={index}
                          display={"flex"}
                          flexDirection={"row"}
                          justifyContent={"start"}
                          style={{
                            margin: 2,
                            color: "#000",
                            fontSize: 10, // Set the font size here
                            backgroundColor: "#fff",
                            border: "1px solid black",
                            borderRadius: "20px",
                          }}
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SellAnything;
