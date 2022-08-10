import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Banner = ({ title, subTitle }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: "40px",
        my: 1,
        backgroundColor: "#006d77",
        color: "#ffffff",
        borderRadius: "4px",
        boxShadow: "0px 0px 30px #ffffff",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom align="center">
        {title}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        {subTitle}
      </Typography>
    </Container>
  );
};
