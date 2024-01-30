import { Typography, Box, Button } from "@mui/material";
import pedro from "../../assets/pedro_souza2.jpg";
const ContactUs = () => {
  const HandleLinkedin = () => {
    const url = `https://www.linkedin.com/in/pedro-souza-385794241/`;

    window.open(url, "_blank");
  };

  const handleGithub = () => {
    const url = "https://github.com/iShouldz";
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Typography
        variant="h2"
        color="secondary.main"
        sx={{
          fontWeight: "bold",
          padding: "30px",
        }}
      >
        Contact us
      </Typography>

      <img src={pedro} style={{ width: "20%", borderRadius: "20px" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography>Pedro Souza</Typography>
        <Typography>Front-end developer</Typography>

        <Typography>
          I hope you liked this system. I maked this for 3th project of Compass
          UOL program. Here, I put practice my skills on front-end with React.
          It`s just a beggin! 😁. Let`s go, follow me on Github and linkedin.
        </Typography>

        <div style={{ gap: "20px", display: "flex" }}>
          <Button
            onClick={handleGithub}
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "#EA9801",
              },
            }}
          >
            Github
          </Button>

          <Button
            onClick={HandleLinkedin}
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "#EA9801",
              },
            }}
          >
            Linkedin
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default ContactUs;
