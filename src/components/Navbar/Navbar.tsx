import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SDLFDE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
