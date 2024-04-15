import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function DashboardHeader({ setOpen, open, selectedItem }) {
  return (
    // <Grid item xs={3} md={3}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "0.2rem",
      }}
    >
      <Box
        sx={{
          background: "#12262F",
          padding: "0.5rem",
          paddingLeft: "0rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          sx={{
            height: "1.8rem",
            width: "1.5rem",
            padding: "0.2rem",
            borderRadius: "0rem 0.2rem 0.2rem 0rem",
            color: "black",
            background: "#5BE8CF",
            ":hover": {
              background: "#5BE8CF",
            },
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <KeyboardDoubleArrowLeftIcon />
          ) : (
            <KeyboardDoubleArrowRightIcon />
          )}
        </IconButton>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"20rem"}
          gap={"0.5rem"}
          borderRight={"0.0625rem solid grey"}
          marginLeft={"2rem"}
        >
          <ReportProblemOutlinedIcon
            sx={{ height: "1.5rem", color: "#E19E48" }}
          />
          <Typography
            sx={{ fontSize: "1rem", fontWeight: 600, color: "white" }}
          >
            {selectedItem?.name ?? "Sample Stack"}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          width={"12rem"}
          gap={"0.5rem"}
          marginLeft={"1rem"}
        >
          <Typography
            sx={{ fontSize: "0.75rem", fontWeight: 400, color: "white" }}
          >
            Stack Id: {selectedItem?.id}
          </Typography>
          <ViewListOutlinedIcon sx={{ height: "1rem", color: "#5BE8CF" }} />
        </Box>
        <Box
          marginLeft={"0.5rem"}
          padding={"0.5rem 1rem"}
          backgroundColor={"#193D4D"}
          borderRadius={"0.5rem"}
          display={"flex"}
          flexDirection={"row"}
          w
        >
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <Box display={"flex"} flexDirection={"column"} width={"10rem"}>
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                  }}
                >
                  Forecast
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem" }}>
                  89%
                </Typography>
              </Box>
            ))}
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginLeft={"1rem"}
        >
          <OutlinedFlagIcon sx={{ color: "grey", height: "1.5rem" }} />
        </Box>
        <Box marginLeft={"1rem"} />
      </Box>
      <Box
        sx={{
          background: "#12262F",
          padding: "0.5rem",
          paddingLeft: "0rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{ padding: "0rem 1.5rem 0rem 3.5rem" }}
          display={"flex"}
          gap={"0.2rem"}
          alignItems={"center"}
          borderRight={"0.0625rem solid grey"}
        >
          <FilePresentOutlinedIcon sx={{ color: "grey" }} />
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "white",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Special Requirements
          </Typography>
          <Switch />
          <Typography
            sx={{
              fontSize: "0.625rem",
              color: "white",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            Include
          </Typography>
        </Box>
        <IconButton
          sx={{
            padding: "0.2rem",
            color: "white",
          }}
        >
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
    // </Grid>
  );
}

export default DashboardHeader;
