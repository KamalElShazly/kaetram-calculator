import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box component="footer" sx={{ marginTop: 5, marginBottom: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" color="text.secondary" component="p">
          Made by:{" "}
          <Link color="inherit" href="https://discordapp.com/users/kamal9365" rel="noopener" target="_blank">
            Kamal
          </Link>
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" component="p">
          Huge thanks to:{" "}
          <Link color="inherit" href="https://discordapp.com/users/chends" rel="noopener" target="_blank">
            chends
          </Link>
          {", "}
          the original owner of:{" "}
          <Link color="inherit" href="https://chends888.github.io/coa-calculator" rel="noopener" target="_blank">
            CoA-Calculator
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"All data from "}
          <Link color="inherit" href="https://kaetram.com/" rel="noopener" target="_blank">
            Kaetram
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
