import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                We are <br />
                Next Bench
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                Your Ideas, Our Expertise
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                At Next Bench, we craft digital solutions that elevate your business. 
                From sleek websites to powerful web apps, we help startups, brands, and entrepreneurs 
                bring their vision to life with innovation and precision.
            </Typography>
            <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
            >
                <ButtonBase sx={styles.Button}>
                    Explore Our Work
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Link>
        </Box>
    );
};

export default HeroContent;
