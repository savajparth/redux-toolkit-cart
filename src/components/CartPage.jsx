import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box, Button, Divider, Fab } from "@mui/material";
import { Add, Delete, Remove, ShoppingBag } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div>
      <Box my={6} sx={{ width: "100vw", display: "flex" }}>
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            width: "60%",
            marginLeft: "100px ",
            borderRadius: "10px",
          }}
        >
          <Typography py={2} mx={2} variant="h6" color="primary">
            Cart - {cart.length} items
          </Typography>
          <Divider />
          {cart.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "gray" }}>
                You Shopping <ShoppingBag /> Empty
              </h3>
            </Box>
          ) : (
            <>
              {cart.map((data) => (
                <Box py={3}>
                  <Paper
                    variant={Box}
                    sx={{
                      p: 2,
                      marginLeft: "50px",
                      maxWidth: 800,
                      flexGrow: 1,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase>
                          <img
                            style={{ width: 158, height: 200 }}
                            alt="complex"
                            src={data.img}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              sx={{ color: "#404040" }}
                            >
                              {data.title}
                            </Typography>
                            <Fab
                              onClick={() => dispatch(removeItem(data.id))}
                              size="medium"
                              color="primary"
                              aria-label="add"
                              style={{
                                borderRadius: "10px",

                                height: "20px",
                              }}
                            >
                              <Delete />
                            </Fab>
                          </Grid>
                        </Grid>
                        <Grid item mx={4}>
                          <Box sx={{ display: "flex" }}>
                            <Fab
                              size="medium"
                              color="primary"
                              aria-label="add"
                              style={{
                                borderRadius: "10px",

                                height: "20px",
                              }}
                              onClick={() =>
                                dispatch(decreaseQuantity(data.id))
                              }
                            >
                              <Remove />
                            </Fab>
                            <Typography variant="h6" mx={5}>
                              {data.quantity}
                            </Typography>
                            <Fab
                              size="medium"
                              color="primary"
                              aria-label="add"
                              style={{
                                borderRadius: "10px",

                                height: "20px",
                              }}
                              onClick={() =>
                                dispatch(increaseQuantity(data.id))
                              }
                            >
                              <Add />
                            </Fab>
                          </Box>
                          <Typography
                            my={3}
                            variant="subtitle1"
                            component="div"
                            sx={{ textAlign: "center" }}
                          >
                            {data.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              ))}
            </>
          )}
        </Box>
        <Box>
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              marginLeft: "50px ",
              borderRadius: "10px",
              width: "25vw",
            }}
          >
            <Typography py={2} mx={2} variant="h6" color="primary">
              Summary
            </Typography>
            <Divider />
            <Box mx={2} pt={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2">Total Quantity</Typography>
                <Typography variant="subtitle2">{totalQuantity}</Typography>
              </Box>
              <Box
                my={1}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Total Amount</Typography>
                <Typography variant="subtitle1">{totalPrice}</Typography>
              </Box>
              <Box py={3}>
                <Button fullWidth variant="contained">
                  GO TO CHECKOUT
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CartPage;
