import {
  Grid,
  Toolbar,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { tipos as data } from "../data/servicios";
import { useState, useEffect } from "react";

export const Review = () => {
  const [service, setservice] = useState([]);
  useEffect(() => {
    setservice(data);
  }, []);

  return (
    <>
      <Toolbar />
      <Toolbar />
      <Toolbar />

      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {service.map((service) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  Width: 362,
                  padding: 3,
                  height: 400,
                  background: "#B48BB5",
                }}
                elevation={18}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={service.imagen}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="white" fontSize={13}>
                    <h1>{service.title}</h1>

                    <p>{service.description}</p>
                    <h3>{service.precio}</h3>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item>
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Button
              variant="contained"
              sx={{
                background: "#4EA2A6",
                width: 310,
                height: 110,
                fontSize: 35,
              }}
            >
              Reservar
            </Button>
          </Grid>
        </Grid>
      </>
    </>
  );
};
