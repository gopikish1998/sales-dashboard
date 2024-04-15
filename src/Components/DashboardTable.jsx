import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { dataChart } from "../const";

function DashboardTable() {
  return (
    <Grid
      item
      xs={2}
      overflow={"scroll"}
      sx={{ background: "#12262F", paddingTop: "0.25rem" }}
    >
      <Box sx={{ width: "auto", paddingRight: " 1rem" }}>
        <Grid container columns={17} width={"auto"}>
          <Grid
            item
            xs={1}
            sx={{
              borderBottom: "0.00625rem  solid grey",
              alignContent: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                paddingLeft: "0.5rem",
                color: "white",
              }}
              noWrap
            >
              Data 1
            </Typography>
          </Grid>
          {dataChart?.map((item, index) => (
            <Grid
              item
              xs={1}
              sx={{
                borderBottom: "0.00625rem  solid grey",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "0.75rem",
                  textAlign: "center",
                }}
              >
                {item.value4}
              </Typography>
            </Grid>
          ))}
          <Grid
            item
            xs={1}
            sx={{
              borderBottom: "0.00625rem  solid grey",
              alignContent: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                paddingLeft: "0.5rem",
                color: "white",
              }}
              noWrap
            >
              Data 2
            </Typography>
          </Grid>
          {dataChart?.map((item, index) => (
            <Grid
              item
              xs={1}
              sx={{
                borderBottom: "0.00625rem  solid grey",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "0.75rem",
                  textAlign: "center",
                }}
              >
                {item.value5}
              </Typography>
            </Grid>
          ))}
          <Grid
            item
            xs={1}
            sx={{
              borderBottom: "0.00625rem  solid grey",
              alignContent: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                paddingLeft: "0.5rem",
                color: "white",
              }}
              noWrap
            >
              Data 3
            </Typography>
          </Grid>
          {dataChart?.map((item, index) => (
            <Grid
              item
              xs={1}
              sx={{
                borderBottom: "0.00625rem solid grey",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "0.75rem",
                  textAlign: "center",
                }}
              >
                {item.value6}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}

export default DashboardTable;
