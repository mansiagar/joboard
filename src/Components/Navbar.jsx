import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Job Board
        </Typography>
        <Button color="inherit" component={Link} to="/Home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/JobList">
          JobList
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
