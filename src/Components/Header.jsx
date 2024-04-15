import React from "react";
import { Box } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useLocation } from "react-router-dom";

const alignmentDropDownList = [
  {
    id: "top",
    name: "Top Align",
  },
  {
    id: "bottom",
    name: "Bottom Align",
  },
  {
    id: "left",
    name: "Left Align",
  },
  {
    id: "right",
    name: "Right Align",
  },
];

const userDropDownList = [
  {
    id: "profile",
    name: "Profile",
  },
  {
    id: "logout",
    name: "Logout",
  },
];

function Header({ setAlignment }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const location = useLocation();
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleSelect = (item) => {
    setAlignment(item?.id);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  return (
    <Box
      sx={{
        height: "5%",
        background: "#000000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 16px",
          color: "white",
        }}
      >
        <Box sx={{ color: "white" }}>
          <IconButton onClick={handleClick}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          {!location.pathname.includes("/cityData") ? (
            <Menu
              anchorEl={anchorEl}
              onClose={handleClose}
              open={open}
              sx={{
                ".MuiMenu-paper": {
                  background: "#11252f",
                  opacity: "0.7 !important",
                  color: "white",
                },
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 800, padding: "4px" }}
              >
                Alignment Customization
              </Typography>
              {alignmentDropDownList.map((item) => (
                <MenuItem
                  key={item?.name}
                  onClick={() => {
                    handleSelect(item);
                    handleClose();
                  }}
                  sx={{
                    opacity: "1 !important",
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <></>
          )}
        </Box>
        <Typography>Web App</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 16px",
          color: "white",
        }}
      >
        <Box sx={{ color: "white" }}>
          <IconButton onClick={handleClick2} id="basic-button2">
            <Person2OutlinedIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl2}
            onClose={handleClose}
            open={open2}
            sx={{
              ".MuiMenu-paper": {
                background: "#11252f",
                opacity: "0.7 !important",
                color: "white",
              },
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button2",
            }}
          >
            {userDropDownList.map((item) => (
              <MenuItem
                key={item?.name}
                onClick={() => {
                  handleClose();
                }}
                sx={{
                  opacity: "1 !important",
                }}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
