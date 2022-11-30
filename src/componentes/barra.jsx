import {
  AppBar,
  Button,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";


export const Navbr = () => {
  const [Estado, setEstado] = useState(0);

  return (
    <AppBar container position="absolute" sx={{ background: "#4EA2A6" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pestañas Paola Mena
        </Typography>
        <Tabs textColor="inherit" value={Estado} onChange={(evento,Estado) =>setEstado(Estado) } indicatorColor="primary" >
          <Tab label="inicio" />
          <Tab label="reserva" />
        </Tabs>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">iniciar sesion</Button>
          <Button color="inherit">registrarse</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
