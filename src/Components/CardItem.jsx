import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function CardItem({ item, index }) {
  const naviageTo = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "12rem",
        width: "13rem",
        opacity: "0.5",
        borderRadius: "0.75rem",
        background:
          "linear-gradient(to bottom, #28148c, #0047b1, #006ec8, #0092d5, #00b5dd, #23c2dd, #41cedb, #5edad8, #4ad5cc, #36cfbe, #21cab0, #06c4a0)",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => {
        naviageTo(`/cityData/${item + index}`);
      }}
    >
      <Box
        minWidth={"ls"}
        sx={{
          height: "11.5rem",
          width: "12.5rem",
          borderRadius: "0.5rem",
          backgroundColor: "#184050",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "white",
            opacity: 1,
            fontWeight: 600,
            padding: "1rem",
          }}
        >
          {item?.name ?? `City ${index + 1}`}
        </Typography>
        <Box display={"flex"} flexDirection={"row"}>
          <Box display={"flex"} flexDirection={"column"} gap={"0.1rem"}>
            <Typography
              sx={{
                color: "white",
                opacity: 1,
                fontWeight: 600,
                paddingLeft: "1rem",
                fontSize: "0.625rem",
              }}
            >
              {item?.name ?? `City ${index + 1}`}
            </Typography>
            <Typography
              sx={{
                color: "white",
                opacity: 1,
                fontWeight: 600,
                paddingLeft: "1rem",
                fontSize: "1rem",
              }}
            >
              {item?.sales ?? "50T"}
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Box display={"flex"} flexDirection={"column"} gap={"0.1rem"}>
            <Typography
              sx={{
                color: "white",
                opacity: 1,
                fontWeight: 600,
                paddingLeft: "1rem",
                fontSize: "0.625rem",
              }}
            >
              {item?.name ?? `City ${index + 1}`}
            </Typography>
            <Typography
              sx={{
                color: "white",
                opacity: 1,
                fontWeight: 600,
                paddingLeft: "1rem",
                paddingBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              {(item?.sales ?? "50") + "%"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardItem;
