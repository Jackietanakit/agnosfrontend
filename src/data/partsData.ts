interface PartData {
  partName: string;
  partHighlightName: string;
  style: React.CSSProperties;
}

const handData: PartData[] = [
  {
    partName: "dip-active",
    partHighlightName: "dip-highlight",
    style: {
      top: "70%",
      left: "40%",
      width: "20%",
      height: "20%",
      backgroundColor: "red",
    },
  },
  {
    partName: "mcp-active",
    partHighlightName: "mcp-highlight",
    style: {
      top: "40%",
      left: "30%",
      width: "40%",
      height: "30%",
      backgroundColor: "red",
    },
  },
  {
    partName: "pip-active",
    partHighlightName: "pip-highlight",
    style: {
      top: "10%",
      left: "20%",
      width: "60%",
      height: "30%",
      backgroundColor: "red",
    },
  },
  // Add more parts as needed
];

export default handData;
export type { PartData };
