import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DashBoardCharts from "./DashBoardCharts";
import DashboardTable from "./DashboardTable";
import DashboardHeader from "./DashboardHeader";

function DashboardBody({ setOpen, open, selectedItem }) {
  return (
    <Grid
      item
      xs={12}
      md={open ? 9 : 12}
      sx={{ background: "#0A1016" }}
      display={"flex"}
      flexDirection={"column"}
      height="100%"
    >
      <DashboardHeader
        setOpen={setOpen}
        open={open}
        selectedItem={selectedItem}
      />
      <Grid container direction={"column"} height={"100%"}>
        <DashBoardCharts selectedItem={selectedItem} />
        <DashboardTable selectedItem={selectedItem} />
      </Grid>
    </Grid>
  );
}

export default DashboardBody;
