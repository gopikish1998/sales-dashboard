import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import Chart from "./Chart";

function DashBoardCharts({ selectedItem }) {
  const [toggle1, setToggle1] = useState(false);
  return (
    <Grid item xs={10}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0.2rem 0.2rem 0.2rem 3.5rem",
          gap: "0.5rem",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "0.75rem" }}>
          Forecase Horizon
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Latest Issue <ArrowDropDownIcon sx={{ height: "1rem" }} />
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#5BE8CF" }} />
        <Box
          borderRight={"0.0625rem solid grey"}
          height={"1rem"}
          marginLeft={"2rem"}
        />
        {toggle1 ? (
          <ToggleOffOutlinedIcon
            sx={{ color: "gray" }}
            onClick={() => {
              setToggle1((prev) => !prev);
            }}
          />
        ) : (
          <ToggleOnOutlinedIcon
            sx={{ color: "gray" }}
            onClick={() => {
              setToggle1((prev) => !prev);
            }}
          />
        )}
        <Typography
          sx={{
            color: "white",
            fontSize: "0.5rem",
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase",
          }}
        >
          Show confindential Interval
        </Typography>
      </Box>
      <Chart selectedItem={selectedItem} />
    </Grid>
  );
}

export default DashBoardCharts;
