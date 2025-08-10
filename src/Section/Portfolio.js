import { useState } from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import Slider from "react-slick";
import { Code, DesignServices, VideoLibrary, Brush } from "@mui/icons-material"; // MUI icons

// CSS for slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom heading
import SectionHeading from "Utilis/SectionHeading";

const categories = [
  { title: "Web Development", icon: <Code fontSize="large" /> },
  { title: "UI/UX Design", icon: <DesignServices fontSize="large" /> },
  { title: "Video Editing", icon: <VideoLibrary fontSize="large" /> },
  { title: "Graphic Designing", icon: <Brush fontSize="large" /> }
];

const Portfolio = () => {
  const [items] = useState(categories);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        borderRadius: "16px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
      }}
      id="portfolio"
    >
      <SectionHeading value1="Our Projects" value2="Coming Soon" border={true} />

      <Slider {...settings}>
        {items.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: "16px",
              backgroundColor: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
              }
            }}
          >
            <Box
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#1976d2"
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#222",
                letterSpacing: "0.5px"
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: "#555",
                fontSize: "0.9rem"
              }}
            >
              Our amazing {item.title} projects are coming soon. Stay tuned!
            </Typography>
          </Paper>
        ))}
      </Slider>
    </Container>
  );
};

export default Portfolio;
