import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state/indx";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const itemsJson = await response.json();

      // Assuming the API response is an array of items
      dispatch(setItems(itemsJson));

    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  // Assign categories based on product type
  const categorizedItems = items.map(item => {
    let category = "";
  
    if (item.title.toLowerCase().includes("t-shirt")) {
      category = "T-Shirts";
    } else if (item.title.toLowerCase().includes("jacket")) {
      category = "Jackets";
    } else if (item.title.toLowerCase().includes("bag")) {
      category = "Bags";
    } else {
      category = "Other";
    }
  
    return { ...item, category };
  });

  const filteredItems = value === "all" ? categorizedItems : categorizedItems.filter(item => item.category === value);

  return (
    <>
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="T-Shirts" value="T-Shirts" />
        <Tab label="Jackets" value="Jackets" />
        <Tab label="Bags" value="Bags" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {filteredItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
    <h2 style={{ textAlign: 'center' }}>Explore More →</h2>
    </>
  );
};

export default ShoppingList;
