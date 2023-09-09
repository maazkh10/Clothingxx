import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state/indx";
import Logoimg from '../../assets/logo.jpg'

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="90px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="10"
      left="0"
      zIndex="1"
    >
      <Box
        width="90%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[600]}
        >
          <img src={Logoimg} alt="Logo" />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="30px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black", fontSize: 30 }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black", fontSize: 30 }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "19px",
                minWidth: "19px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black", fontSize: 100 }} 
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black", fontSize: "100px" }}> 
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
