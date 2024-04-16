import React, { useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import formatNumber from "../utils";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

function CardItem({ item, index }) {
  const naviageTo = useNavigate();

  useLayoutEffect(() => {
    if (item) {
      let root = am5.Root.new(`chartdiv${item?.id}`);
      let root2 = am5.Root.new(`chartdiv2${item?.id}`);
      root.setThemes([am5themes_Animated.new(root), am5themes_Micro.new(root)]);
      root2.setThemes([
        am5themes_Animated.new(root2),
        am5themes_Micro.new(root2),
      ]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          wheelY: "zoomX",
          layout: root.verticalLayout,
          maxTooltipDistance: 0,
        })
      );
      let chart2 = root2.container.children.push(
        am5xy.XYChart.new(root2, {
          panY: false,
          wheelY: "zoomX",
          layout: root2.verticalLayout,
          maxTooltipDistance: 0,
        })
      );

      // Define data
      let data = [
        {
          date: new Date(2021, 0, 1).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 2).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 3).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 4).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 5).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
      ];
      let data2 = [
        {
          date: new Date(2021, 0, 1).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 2).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 3).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 4).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
        {
          date: new Date(2021, 0, 5).getTime(),
          value: Math.random() * 20,
          value2: Math.random() * 25,
        },
      ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          extraTooltipPrecision: 1,
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );
      let yAxis2 = chart2.yAxes.push(
        am5xy.ValueAxis.new(root2, {
          extraTooltipPrecision: 1,
          renderer: am5xy.AxisRendererY.new(root2, {}),
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 20,
          }),
        })
      );
      let xAxis2 = chart2.xAxes.push(
        am5xy.DateAxis.new(root2, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5xy.AxisRendererX.new(root2, {
            minGridDistance: 20,
          }),
        })
      );

      // Create series
      function createSeries(name, field, index) {
        let series = chart.series.push(
          am5xy.SmoothedXLineSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: field,
            valueXField: "date",
          })
        );
        series.strokes.template.setAll({
          strokeWidth: 2,
          strokeDasharray: index == 1 ? [] : [10, 5],
        });
        series.data.setAll(data);
      }
      function createSeries2(name, field, index) {
        let series = chart2.series.push(
          am5xy.SmoothedXLineSeries.new(root2, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: field,
            valueXField: "date",
          })
        );
        series.strokes.template.setAll({
          strokeWidth: 2,
          strokeDasharray: index == 1 ? [] : [10, 5],
        });
        series.data.setAll(data2);
      }
      createSeries("Series #1", "value", 1);
      createSeries("Series #2", "value2", 2);
      createSeries2("Series #1", "value", 1);
      createSeries2("Series #2", "value2", 2);
      // Add cursor

      return () => {
        root.dispose();
        root2.dispose();
      };
    }
  }, [item]);

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
        naviageTo(`/cityData/${item?.id + index}`);
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
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"3rem"}
          width={"100%"}
        >
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
              Current
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
              {formatNumber(item?.sales ?? 0, 0) ?? "50T"}
            </Typography>
          </Box>

          <Tooltip
            title={<Box>Sales: {item?.sales}</Box>}
            arrow
            placement="right"
            sx={{ opacity: "1" }}
          >
            <div
              id={`chartdiv${item?.id}`}
              style={{
                width: "4rem",
                height: "4rem",
                position: "relative",
                paddingTop: "-10%",
              }}
            ></div>
          </Tooltip>
          <NorthIcon sx={{ color: "green" }} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          gap={"3rem"}
          alignItems={"center"}
          width={"100%"}
        >
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
              Forecast
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
              {formatNumber(item?.forecast ?? "50%")}
            </Typography>
          </Box>
          <Tooltip
            title={<Box>Forecast: {item?.forecast}</Box>}
            arrow
            placement="right"
            sx={{ opacity: "1" }}
          >
            <div
              id={`chartdiv2${item?.id}`}
              style={{
                width: "4rem",
                height: "4rem",
                position: "relative",
                paddingTop: "-10%",
              }}
            ></div>
          </Tooltip>
          <SouthIcon sx={{ color: "red" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default CardItem;
