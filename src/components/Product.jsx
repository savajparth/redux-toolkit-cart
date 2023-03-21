import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  return (
    <Box
      style={{
        margin: "50px auto ",
        width: "100%",
      }}
    >
      <Grid
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={2}
      >
        {items.map((val) => (
          <Grid item xs={2} sm={4} md={3.5} key={val.id}>
            <Card
              sx={{
                maxWidth: 345,
                height: "300px",
                border: "none",
                boxShadow:
                  "0px 2px 11px 1px rgba(0, 0, 0, 0.1) ,0px 1px 11px 1px rgba(0, 0, 0, 0.1) ,0px 0px 11px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={val.img}
                  alt="green iguana"
                  sx={{ objectFit: "inherit" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => dispatch(addToCart(val))}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
