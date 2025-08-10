import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';

//Logo
import Logo from "Assets/header/logo.png";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "30px" }}>
                <Image src={Logo} width={200} height={100} alt="Logo" />
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <MapIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                        NEXTBENCH
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon />
                </Box>
                <Box>
                    <Link href="mailto:nextbenchofficial@gmail.com">
                        <a>
                            <Typography variant="body1" component="p">
                                nextbenchofficial@gmail.com
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            {/* <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                    <Link href="tel:+8801552938771">
                        <a>
                            <Typography variant="body1" component="p">
                                +880 1552-938771
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack> */}
            <Stack direction="row" sx={styles.Social}>
                <Link href="#">
                    <a target="_blank">
                        <ButtonBase>
                            <GitHubIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="#">
                    <a target="_blank">
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="#">
                    <a target="_blank">
                        <ButtonBase>
                            <TwitterIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="#">
                    <a target="_blank">
                        <ButtonBase>
                            <BehaceIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Stack>
        </Box>
    );
};
export default FooterOne;