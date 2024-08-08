import { PartData } from "@/data/partsData";
import * as d3 from "d3-voronoi";

export const calculateVoronoiCells = (
  width: number,
  height: number,
  scaleX: number,
  scaleY: number,
  data: PartData[]
) => {
  const voronoi = d3.voronoi().extent([
    [0, 0],
    [width, height],
  ]);

  const diagram = voronoi(data.map((p) => [p.x * scaleX, p.y * scaleY]));

  // Create a mapping of parts to their polygons
  const partToPolygon: {
    [key: string]: { polygons: string[]; highlightName: string };
  } = {};

  diagram.polygons().forEach((polygon) => {
    if (polygon) {
      const [x, y] = polygon.data;
      const scaledX = Math.round(x / scaleX); // Reverse scaling for matching
      const scaledY = Math.round(y / scaleY);
      const point = data.find(
        (p) => Math.round(p.x) === scaledX && Math.round(p.y) === scaledY
      );

      if (point) {
        if (!partToPolygon[point.name]) {
          partToPolygon[point.name] = {
            polygons: [],
            highlightName: point.highlightName,
          };
        }
        partToPolygon[point.name].polygons.push(
          polygon.map((point) => point.join(",")).join(" ")
        );
      }
    }
  });

  return Object.entries(partToPolygon).map(
    ([name, { polygons, highlightName }]) => ({
      name: name,
      polygons: polygons,
      highlightName: highlightName,
    })
  );
};
