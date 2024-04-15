import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../Components/Header";
import DashboardLeftbar from "../Components/DashboardLeftbar";
import DashboardBody from "../Components/DashboardBody";

function DashboardPage() {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = React.useState({});
  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      <Header />
      <Grid
        container
        sx={{ maxHeight: "95%", height: "95%", overflow: "auto" }}
      >
        <DashboardLeftbar
          open={open}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <DashboardBody
          setOpen={setOpen}
          open={open}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </Grid>
    </Box>
  );
}

export default DashboardPage;
