import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import { dataChart, legendData, legendDataForcast } from "../const";

function Chart({ selectedItem }) {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  useLayoutEffect(() => {
    if (Object.keys(selectedItem)?.length > 0) {
      let root = am5.Root.new("chartdiv");

      const myTheme = am5.Theme.new(root);

      myTheme.rule("AxisLabel").setAll({
        fill: am5.color(0x7b7f80),
        fontSize: "0.75rem",
        textAlign: "center",
      });

      root.setThemes([myTheme, am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          // panY: false,
          layout: root.verticalLayout,
        })
      );

      // Define data

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 1,
            strokeWidth: 2,
            stroke: am5.color(0x406a8d),
            minGridDistance: 75,
          }),
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {
            strokeOpacity: 1,
            strokeWidth: 2,
            stroke: am5.color(0x406a8d),
            minGridDistance: 1,
          }),
          categoryField: "category",
        })
      );
      xAxis.data.setAll(selectedItem?.data);

      let xRenderer = xAxis.get("renderer");
      xRenderer.grid.template.setAll({
        stroke: am5.color(0x406a8d),
        strokeWidth: 1,
        strokeOpacity: 0.5,
      });
      xRenderer.grid.template.setAll({
        location: 0.5,
      });

      xRenderer.labels.template.setAll({});

      let yRenderer = yAxis.get("renderer");

      // Create series
      let tooltip = am5.Tooltip.new(root, {
        getFillFromSprite: false,
        labelText: "[bold]{categoryX}[/]\n: {valueY}",
      });

      tooltip.get("background").setAll({
        fill: am5.color(0xffffff),
        fillOpacity: 0.8,
      });

      let series1 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category",
          locationX: 0.5,
          tooltip: am5.Tooltip.new(root, {
            labelText: "[bold]{categoryX}[/]\n: {valueY}",
          }),
          stroke: am5.color(legendData[0].colorHex),
        })
      );
      let series2 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category",
          locationX: 0.5,
          tooltip: am5.Tooltip.new(root, {
            labelText: "[bold]{categoryX}[/]\n: {valueY}",
          }),
          stroke: am5.color(legendData[1].colorHex),
        })
      );
      let series3 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value3",
          categoryXField: "category",
          locationX: 0.5,
          tooltip: am5.Tooltip.new(root, {
            labelText: "[bold]{categoryX}[/]\n: {valueY}",
          }),
          stroke: am5.color(0x79c0ff),
        })
      );
      let series4 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value4",
          categoryXField: "category",
          locationX: 0.5,
          tooltip: am5.Tooltip.new(root, {
            labelText: "[bold]{categoryX}[/]\n: {valueY}",
          }),
          stroke: am5.color(legendDataForcast[0].colorHex),
        })
      );
      let series5 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value5",
          categoryXField: "category",
          locationX: 0.5,
          tooltip: am5.Tooltip.new(root, {
            labelText: "[bold]{categoryX}[/]\n: {valueY}",
          }),
          stroke: am5.color(legendDataForcast[1].colorHex),
        })
      );
      let series6 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value6",
          categoryXField: "category",
          locationX: 0.5,
          tooltip: am5.Tooltip.new(root, {
            labelText: "[bold]{categoryX}[/]\n: {valueY}",
          }),
          stroke: am5.color(legendDataForcast[2].colorHex),
        })
      );
      series1.data.setAll(selectedItem?.data);
      series2.data.setAll(selectedItem?.data);
      series3.data.setAll(selectedItem?.data);
      series4.data.setAll(selectedItem?.data);
      series5.data.setAll(selectedItem?.data);
      series6.data.setAll(selectedItem?.data);
      series4.strokes.template.setAll({
        strokeWidth: 1,
        strokeDasharray: [10, 5],
      });
      series5.strokes.template.setAll({
        strokeWidth: 1,
        strokeDasharray: [10, 5],
      });
      series6.strokes.template.setAll({
        strokeWidth: 1,
        strokeDasharray: [10, 5],
      });

      if (!toggle1) {
        series1.hide();
        series4.hide();
      }
      if (!toggle2) {
        series2.hide();
        series5.hide();
      }
      // Add legend
      // let legend = chart.children.push(am5.Legend.new(root, {}));
      // legend.data.setAll(chart.series.values);

      // Add cursor
      let cursor = chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
          behavior: "selectX",
        })
      );
      // let cursor = chart.set(
      //   "cursor",
      //   am5xy.XYCursor.new(root, {
      //     behavior: "none",
      //   })
      // );
      cursor.lineY.set("visible", false);

      return () => {
        root.dispose();
      };
    }
  }, [toggle1, toggle2, selectedItem]);

  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "90%",
        position: "relative",
        paddingTop: "1.5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0.2rem 0.2rem 0.2rem 3.5rem",
          gap: "0.5rem",
          position: "absolute",
          top: "-5%",
          right: "50%",
          zIndex: 10000,
        }}
      >
        {legendData?.map((_, i) => {
          return (
            <Box display={"flex"} gap={"0.4rem"} alignItems={"center"}>
              {(i == 0 ? !toggle1 : !toggle2) ? (
                <ToggleOffOutlinedIcon
                  sx={{ color: "gray" }}
                  onClick={() => {
                    (i == 0 ? setToggle1 : setToggle2)?.((prev) => !prev);
                  }}
                />
              ) : (
                <ToggleOnOutlinedIcon
                  sx={{ color: "gray" }}
                  onClick={() => {
                    (i == 0 ? setToggle1 : setToggle2)?.((prev) => !prev);
                  }}
                />
              )}
              <Box
                sx={{
                  height: "0.5rem",
                  width: "0.125rem",
                  background: _.color,
                }}
              />
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {_.label}
              </Typography>
              <Box
                sx={{
                  margin: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                }}
              >
                <CircularProgress
                  variant="determinate"
                  sx={{ color: "#5BE8CF", height: "1rem" }}
                  size={16}
                  value={i == 0 ? 88 : 80}
                />
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  {i == 0 ? "88%" : "80%"}
                </Typography>
              </Box>
            </Box>
          );
        })}
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Box
            sx={{
              width: "1rem",
              height: "0rem",
              border: "0.125rem solid #79C0FF",
            }}
          />
          <Typography
            sx={{
              color: "gray",
              fontSize: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            Consumption
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "40%",
          top: "-2%",
          textTransform: "uppercase",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "0.75rem" }}>
          Historical
        </Typography>
      </Box>
      <Box
        sx={{ position: "absolute", left: "52%", top: "-1%", height: "100%" }}
      >
        <Box height={"93%"} width={"0rem"} border={"0.0625rem dashed gray"} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "55%",
          top: "-2%",
          textTransform: "uppercase",
        }}
      >
        <Typography sx={{ color: "#5BE8CF", fontSize: "0.75rem" }}>
          Forecast
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0.5rem 0.2rem 0.2rem 0rem",
          gap: "2rem",
          position: "absolute",
          top: "2%",
          left: "55%",
          zIndex: 10000,
        }}
      >
        {legendDataForcast?.map((_, i) => {
          return (
            <Box display={"flex"} gap={"0.4rem"} alignItems={"center"}>
              <Box
                sx={{
                  height: "0rem",
                  width: "1rem",
                  border: `0.0625rem dashed ${_.color}`,
                }}
              />
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {_.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
export default Chart;
