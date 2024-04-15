import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect } from "react";

let cities = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "New York City",
      },
      geometry: {
        type: "Point",
        coordinates: [-73.778137, 40.641312],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "London",
      },
      geometry: {
        type: "Point",
        coordinates: [-0.454296, 51.47002],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Beijing",
      },
      geometry: {
        type: "Point",
        coordinates: [116.597504, 40.072498],
      },
    },
  ],
};

function Map(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
        minZoomLevel: 2,
        maxZoomLevel: 16,
        zoomLevel: 2,
      })
    );
    chart.chartContainer.set(
      "background",
      am5.Rectangle.new(root, {
        fill: am5.color(0x11252f),
        fillOpacity: 1,
      })
    );
    chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {
        scale: 0.5,
      })
    );
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );
    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        // ...
        geoJSON: cities,
        // autoScale: true,
      })
    );

    pointSeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 5,
        fill: am5.color(0xffffff),
        tooltipText: "City: {name}\nCurrent Slaes: 50T",
      });

      circle.states.create("hover", {
        fill: am5.color(0x193d4d),
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0x193d4d),
      interactive: true,
      fillOpacity: 1,
      // tooltipText: "{name}",
    });
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x297373),
    });

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100vw", height: "95%" }}></div>;
}
export default Map;
