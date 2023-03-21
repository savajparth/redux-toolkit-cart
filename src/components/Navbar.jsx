import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";

function Navbar() {
  const { cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "#263238" }}
            >
              LOGO
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "#263238" }}
            >
              <Typography>All Product</Typography>
            </NavLink>
          </Box>
          <NavLink to="/cart" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ backgroundColor: "#263238" }}>
              CART ({cart.length})
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
