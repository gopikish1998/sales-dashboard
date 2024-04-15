import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardItem from "./CardItem";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function CardContainer({ alignment }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        width: alignment === "top" || alignment === "bottom" ? "90%" : "auto",
        position: "absolute",
        top: alignment === "bottom" ? "" : "10%",
        bottom: alignment === "bottom" ? "10%" : "",
        left: alignment !== "right" ? "5%" : "",
        right: alignment === "right" ? "5%" : "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "2rem",
            color: "white",
          }}
        >
          Hello User,
        </Typography>
        <Box
          sx={{
            background: "#72CFFE",
            fontSize: "0.875rem",
            color: "black",
            height: "1.5rem",
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            borderRadius: "0.25rem",
            marginLeft: "0.25rem",
            cursor: "pointer",
          }}
        >
          <ErrorOutlineOutlinedIcon
            sx={{ height: "1rem", marginRight: "0.25rem" }}
          />
          There are two aciton items
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems:
            alignment == "left"
              ? "flex-start"
              : alignment == "right"
              ? "flex-end"
              : "center",
          width: alignment == "right" || alignment == "left" ? "auto" : "100%",
          height: alignment == "right" || alignment == "left" ? "80vh" : "",
          gap: "0.5rem",
          flexDirection:
            alignment == "right" || alignment == "left" ? "column" : "row",
        }}
        overflow={"scroll"}
      >
        {Array(7)
          .fill(0)
          .map((item, index) => (
            <Box>
              <CardItem item={item} index={index} />
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default CardContainer;
