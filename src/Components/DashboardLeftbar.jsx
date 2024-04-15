import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import LeftbarCard from "./LeftbarCard";
import { stackData } from "../const";

const tabs = [
  {
    name: "Backlog",
    count: stackData?.length,
  },
  {
    name: "Pending",
    count: "0",
  },
  {
    name: "Final Sign-off",
    count: "0",
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DashboardLeftbar({ open, setSelectedItem, selectedItem }) {
  const naviageTo = useNavigate();
  const [page, setPage] = useState(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (Object.keys(selectedItem).length === 0) {
      setSelectedItem(stackData?.[0]);
    }
  }, []);
  return (
    <Grid
      item
      xs={3}
      sx={{
        background: "#12262F",
        boxShadow: "-10px 10px 20px 5px #0E1D23 inset",
        overflow: "hidden",
        height: "100%",
        display: !open ? "none" : "block",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        padding={"1rem 1rem 0rem"}
        gap={"0.02rem"}
        borderBottom="0.5px solid grey"
      >
        <Box>
          <IconButton
            onClick={() => {
              naviageTo("/");
            }}
          >
            <ArrowBackOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          padding={"0.5rem"}
          gap={"0.4rem"}
        >
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Box
                key={i}
                height={page === i ? "1.2rem" : "1rem"}
                width={page === i ? "1.7rem" : "1.5rem"}
                borderRadius={"0.25rem"}
                backgroundColor={page === i ? "#88E8FF" : "#284D58"}
              />
            ))}
        </Box>
        <Typography
          sx={{
            paddingLeft: "0.5rem",
            fontSize: "1.25rem",
            color: "white",
          }}
        >
          Sample Stacks
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            ".MuiButtonBase-root": {
              color: "#BCBCBC",
            },
            ".MuiButtonBase-root.Mui-selected": {
              color: "#5BE8CF",
            },
            ".MuiTabs-indicator": {
              background: "#5BE8CF",
            },
          }}
        >
          {tabs?.map((tab, i) => (
            <Tab
              sx={{ padding: "0.5rem" }}
              label={
                <Box display={"flex"} alignItems={"center"} gap={"0.2rem"}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      ".Mui-selected": {
                        color: "#5BE8CF",
                      },
                    }}
                  >
                    {tab.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.625rem",
                      fontWeight: 400,
                      color: "#BCBCBC",
                    }}
                  >
                    ({tab.count})
                  </Typography>
                </Box>
              }
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        padding={"0.5rem 0rem 1rem 0rem"}
        height={"78%"}
      >
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "#5BE8CF",
            marginLeft: "1rem",
            height: "6.6%",
          }}
        >
          <Box display={"flex"}>
            <Typography>Filter</Typography>
            <FilterListOutlinedIcon />
          </Box>
        </Button>
        <Box sx={{ width: "100%", height: "88%", overflow: "auto " }}>
          {value == 0 &&
            stackData.map((item, i) => (
              <LeftbarCard
                item={item}
                i={i}
                onClick={() => setSelectedItem(item)}
                checked={selectedItem.id == item.id}
              />
            ))}
        </Box>
      </Box>
    </Grid>
  );
}

export default DashboardLeftbar;
