import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state/indx";
import { useDispatch } from "react-redux";
import CartMenu from "../global/CartMenu"; // Adjust the import path

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
    setAddedToCart(true);
  };

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const itemJson = await response.json();
        setItem(itemJson);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    const getItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const itemsJson = await response.json();
        setItems(itemsJson);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    getItem();
    getItems();
  }, [itemId]);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.title}
            width="100%"
            height="100%"
            src={item?.image}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.title}</Typography>
            <Typography>${item?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>{item?.description}</Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.category}</Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && <div>{item?.description}</div>}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.title}-${i}`} item={item} />
          ))}
        </Box>
      </Box>

      {/* Popup for added to cart */}
      {addedToCart && (
        <CartMenu
          item={item} // Pass the item details to CartMenu
          setAddedToCart={setAddedToCart} // Optionally pass the state updater function
        />
      )}
    </Box>
  );
};

export default ItemDetails;
