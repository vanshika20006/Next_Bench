import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

// Images
import AboutImage from "Assets/about/about11.png";

// Styles
import styles from "Styles/About/Myselft.styles";

const Myself = () => {
  return (
    <Box sx={styles.Container}>
      <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
        <Typography variant="h4" component="h4" sx={styles.Title}>
          Turning Ideas <br />
          Into Digital Reality
        </Typography>

        <Typography
          variant="body1"
          component="p"
          className="sdjh"
          sx={styles.Description}
        >
          We’re a passionate team of developers and designers dedicated to
          crafting innovative, user-friendly, and high-quality digital
          solutions that help businesses grow and thrive.
        </Typography>

        <Box sx={{ my: "28px" }}>
          <Stack direction="row" sx={styles.Features}>
            <DoneIcon />
            <Typography variant="body1" component="p">
              100% Client Satisfaction
            </Typography>
          </Stack>
          <Stack direction="row" sx={styles.Features}>
            <DoneIcon />
            <Typography variant="body1" component="p">
              World-Class Quality Standards
            </Typography>
          </Stack>
          <Stack direction="row" sx={styles.Features}>
            <DoneIcon />
            <Typography variant="body1" component="p">
              Lifetime Aftersales Support
            </Typography>
          </Stack>
        </Box>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <ButtonBase sx={styles.Button}>
            Contact Us
            <ArrowForwardTwoToneIcon />
          </ButtonBase>
        </Link>
      </Box>

      <Box
        component="img"
        src={AboutImage}
        alt="About"
        sx={styles.Image}
      />
    </Box>
  );
};

export default Myself;
