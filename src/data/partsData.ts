interface PartData {
  name: string;
  highlightName: string;
  x: number;
  y: number;
}
// image dimensions: 694x818 -> Scale:0.83816425
const scaled: number = 1;

const handData: PartData[] = [
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 488,
    y: 31,
  },
  // line segments: (375, 23) -> (169, 178) (5 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((375 - 169) / 4) * 4 + 169,
    y: ((23 - 178) / 4) * 4 + 178,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((375 - 169) / 4) * 3 + 169,
    y: ((23 - 178) / 4) * 3 + 178,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((375 - 169) / 4) * 2 + 169,
    y: ((23 - 178) / 4) * 2 + 178,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((375 - 169) / 4) * 1 + 169,
    y: ((23 - 178) / 4) * 1 + 178,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 169,
    y: 178,
  },
  // line segments: (133, 274) -> (175, 452) (4 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((133 - 175) / 3) * 3 + 175,
    y: ((274 - 452) / 3) * 3 + 452,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((133 - 175) / 3) * 2 + 175,
    y: ((274 - 452) / 3) * 2 + 452,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((133 - 175) / 3) * 1 + 175,
    y: ((274 - 452) / 3) * 1 + 452,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 175,
    y: 452,
  },
  // line segments: (274, 474) -> (479,424) (4 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((274 - 479) / 3) * 3 + 479,
    y: ((474 - 424) / 3) * 3 + 424,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((274 - 479) / 3) * 2 + 479,
    y: ((474 - 424) / 3) * 2 + 424,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((274 - 479) / 3) * 1 + 479,
    y: ((474 - 424) / 3) * 1 + 424,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 479,
    y: 424,
  },
  // line segments: (552, 121) -> (563,371) (4 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((552 - 563) / 3) * 3 + 563,
    y: ((121 - 371) / 3) * 3 + 371,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((552 - 563) / 3) * 2 + 563,
    y: ((121 - 371) / 3) * 2 + 371,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((552 - 563) / 3) * 1 + 563,
    y: ((121 - 371) / 3) * 1 + 371,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 563,
    y: 371,
  },
  // line segments: (641, 346) -> (736, 399) (2 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((641 - 736) / 1) * 1 + 736,
    y: ((346 - 399) / 1) * 1 + 399,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 736,
    y: 399,
  },
  // line segments: (723, 458) -> (622, 652) (3 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((723 - 622) / 2) * 2 + 622,
    y: ((458 - 652) / 2) * 2 + 652,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((723 - 622) / 2) * 1 + 622,
    y: ((458 - 652) / 2) * 1 + 652,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 622,
    y: 652,
  },
  // line segments: (542, 588) -> (511, 465) (2 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: ((542 - 511) / 1) * 1 + 511,
    y: ((588 - 465) / 1) * 1 + 465,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 511,
    y: 465,
  },

  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 195,
    y: 250,
  }, // 195, 250
  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 295,
    y: 150,
  }, // 295, 150
  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 385,
    y: 105,
  }, // 385, 105
  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 485,
    y: 130,
  }, // 485, 130
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 222,
    y: 325,
  }, // 222, 325
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 300,
    y: 250,
  }, // 300, 250
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 390,
    y: 215,
  }, // 390, 215
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 485,
    y: 227,
  }, // 485, 227
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 660,
    y: 425,
  }, // 660, 425
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 260,
    y: 420,
  }, // 260, 420
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 331,
    y: 388,
  }, // 331, 388
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 400,
    y: 365,
  }, // 400, 365
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 480,
    y: 367,
  }, // 480, 367
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 593,
    y: 536,
  }, // 593, 536
  // Add more parts as needed
];

export default handData;
export type { PartData };
