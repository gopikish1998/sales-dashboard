import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

function LeftbarCard({ item, i, onClick, checked }) {
  return (
    <Box
      key={i}
      sx={{
        height: "4rem",
        border: checked ? "0.125rem solid #1888D4" : "",
        borderBottom: checked ? "" : "0.0625rem solid grey",
        background: checked ? "#4A5960" : "",
        padding: "0.3rem 0.2rem 1rem 1.5rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
      onClick={() => onClick?.(item)}
    >
      <Checkbox
        size="sm"
        icon={<CheckBoxOutlineBlankOutlinedIcon sx={{ color: "grey" }} />}
        checkedIcon={<CheckBoxOutlinedIcon sx={{ color: "grey" }} />}
        checked={checked}
      />
      <Box display={"flex"} flexDirection={"column"} width={"85%"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          paddingTop={"0.5rem"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} flexDirection={"row"} gap={".2rem"}>
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <Box
                  display={"flex"}
                  sx={{
                    padding: "0.1rem",
                    borderRadius: "0.25rem",
                    background: "white",
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "10px -10px 5px #DDDDDB inset",
                    }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {i == 0 ? (
                      <ArrowDownwardOutlinedIcon sx={{ height: "0.75rem" }} />
                    ) : (
                      <ArrowUpwardOutlinedIcon sx={{ height: "0.75rem" }} />
                    )}

                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
                      F'CAST {i == 0 ? `STAB` : `ACC`}.
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
          <MarkEmailUnreadOutlinedIcon
            height={"1rem"}
            sx={{ color: "#5BE8CF" }}
          />
        </Box>
        <Typography
          sx={{ fontSize: "0.875rem", color: "#CCD0D2", fontWeight: 600 }}
        >
          {item?.name ?? "-"}
        </Typography>
      </Box>
    </Box>
  );
}

export default LeftbarCard;
