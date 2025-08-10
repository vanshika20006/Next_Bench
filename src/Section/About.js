import { Container, Typography, Box } from "@mui/material";

// SectionHeading
import SectionHeading from "Utilis/SectionHeading";

// Component
import Solution from "Components/About/Solution";
import Myself from "Components/About/Myself";

const About = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
            component="section"
            sx={{
                pt: { xs: "4.5em", md: "6em" },
                pb: { xs: "3.5em", md: "5.5em" },
                background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
                px: { xs: "1.5em", sm: "3em", md: "5em" }
            }}
            id="about"
        >
            {/* Section Heading */}
            <SectionHeading
                value1="Your Vision"
                value2="Our Expertise"
                border={true}
                sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: { xs: "1.75rem", md: "2.2rem" }, // Smaller & balanced
                    background: "linear-gradient(90deg, #d45a4c 0%, #f28b74 100%)", // Softer orange-red
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.3px"
                }}
            />

            {/* Short intro text */}
            <Box
                sx={{
                    maxWidth: "780px",
                    mx: "auto",
                    textAlign: "center",
                    mb: { xs: "2.2em", md: "3.5em" },
                    mt: "0.8em"
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: "#444", // Darker gray for premium look
                        fontSize: { xs: "0.97rem", md: "1.05rem" },
                        lineHeight: 1.65
                    }}
                >
                    At <strong>Next Bench</strong>, we transform ideas into{" "}
                    <span style={{ color: "#d45a4c", fontWeight: 600 }}>powerful digital solutions</span>.
                    From crafting intuitive interfaces to developing high-performance web and mobile applications,
                    our expert team ensures your business stands out in today’s competitive market.
                </Typography>
            </Box>

            {/* Services / Solutions */}
            <Box sx={{ mb: { xs: "2.8em", md: "4.5em" } }}>
                <Solution />
            </Box>

            {/* About Founder / Agency Story */}
            <Myself />
        </Container>
    );
};

export default About;
