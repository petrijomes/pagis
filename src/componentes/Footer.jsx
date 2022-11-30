import { Box, Link, Grid, Container, Typography } from "@mui/material"
export const Footer = () => {
  return (
    <Grid container direction="column"
    alignItems="center"  justifyContent="center">
      <footer>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          bgcolor="textSecondary"
          color="black"
        >
          <Container maxWidth="lg" >
            <Grid container spacing={5}>
              <Grid item xs={12} >
                <Box borderBottom={1} >Información</Box>
                <Box>
                  <Typography fontSize={14} >
                    Provincia de Cauquenes con pencahue, Maule, Chile.
                  </Typography>
                </Box>
                <Box>
                  <Link href="https://www.instagram.com/pestanaspaolamenao/" >
                  <Typography  fontSize={16} style={{textAlign: "center"}}>Instagram
                  </Typography>
                  </Link>
                </Box>
                <Box>
                  <Typography  fontSize={16} style={{textAlign: "center"}}>+56999875.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </Grid>
  );
};
