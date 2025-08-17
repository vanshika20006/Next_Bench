import { Container, Grid, Card, CardContent, Typography, Avatar, Button, Box } from "@mui/material";
import SectionHeading from "Utilis/SectionHeading";

const freelancers = [
  {
    name: "Josh Joseph",
    skill: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    portfolio: "https://joshjoseph.vercel.app/"
  },
  {
    name: "Harsh Singh Baghel",
    skill: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    portfolio: "https://harshbaghel.me"
  },
  {
    name: "Janhavi Dubey",
    skill: "Full Stack Developer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    portfolio: "https://github.com/buildwithjanhavi"
  },
  {
    name: "Coming Soon",
    skill: "Graphic Designer",
    img: "https://via.placeholder.com/150", // placeholder image
    portfolio: "#"
  }
];

const FreelancerSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        borderRadius: "16px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
      }}
      id="freelancers"
    >
      {/* Custom Heading */}
      <Box mb={4}>
        <SectionHeading value1="Meet Our" value2="Freelancers" border={true} />
      </Box>

      {/* Freelancer Cards */}
      <Grid container spacing={4} justifyContent="center">
        {freelancers.map((freelancer, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: "16px",
                height: "100%",
                minHeight: 300, // ✅ same height for all cards
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)"
                }
              }}
            >
              <Box display="flex" justifyContent="center" mb={2}>
                <Avatar
                  src={freelancer.img}
                  alt={freelancer.name}
                  sx={{ width: 80, height: 80 }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="#222"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2, // ✅ max 2 lines
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {freelancer.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, mb: 2 }}
                >
                  {freelancer.skill}
                </Typography>
              </CardContent>

              <Button
                variant="contained"
                color="primary"
                size="small"
                href={freelancer.portfolio}
                target="_blank"
                sx={{ borderRadius: "8px", textTransform: "none" }}
              >
                View Portfolio
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FreelancerSection;
