import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";

const Item = styled("div")({
  padding: 2,
  paddingTop: 8,
  textAlign: "center",
});

let images = [image1, image2, image3, image4];

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, pt: 5 }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={4}>
          <Box sx={{ m: 1 }}>
            <Stack>
              <img src={image1} alt="" width="100%" />
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 1 }}
            >
              {images.map((imge) => (
                <Item key={imge}>
                  <img src={imge} alt="my" width="100%" />
                </Item>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography
            variant="button"
            color={orange[500]}
            sx={{ fontWeight: 600 }}
            gutterBottom
          >
            Sneaker company
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Fall Limited Edition Sneakers
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575" }} gutterBottom>
            These low profile sneakers are your perfect casual wear companion .
            fearuring a durable outer sole .they will withstand everything the
            eather can offer.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
              $125.00
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "1rem", color: orange[900] }}
              gutterBottom
            >
              50%
            </Typography>
          </Stack>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#757575", fontSize: "1rem" }}
            gutterBottom
          >
            $250.00
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} py="2rem">
            <Stack direction="row" spacing={2}>
              <IconButton aria-label="increase" size="small">
                <RemoveIcon sx={{ color: orange[700] }} />
              </IconButton>
              <IconButton
                aria-label="increase"
                size="small"
                sx={{ color: "black", fontWeight: 600 }}
              >
                0
              </IconButton>
              <IconButton aria-label="increase" size="small">
                <AddIcon sx={{ color: orange[700] }} />
              </IconButton>
            </Stack>
            <Button
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={{
                bgcolor: orange[700],
                "&:hover": {
                  bgcolor: "orange",
                },
              }}
            >
              Add to Cart
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
