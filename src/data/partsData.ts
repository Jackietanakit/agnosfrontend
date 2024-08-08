interface PartData {
  name: string;
  highlightName: string;
  x: number;
  y: number;
}
// image dimensions: 694x818 -> Scale:0.83816425
const scaled: number = 450 / 818;

const handData: PartData[] = [
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 488 * scaled,
    y: 31 * scaled,
  },
  // line segments: (375, 23) -> (169, 178) (5 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((375 - 169) / 4) * 4 + 169) * scaled,
    y: (((23 - 178) / 4) * 4 + 178) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((375 - 169) / 4) * 3 + 169) * scaled,
    y: (((23 - 178) / 4) * 3 + 178) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((375 - 169) / 4) * 2 + 169) * scaled,
    y: (((23 - 178) / 4) * 2 + 178) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((375 - 169) / 4) * 1 + 169) * scaled,
    y: (((23 - 178) / 4) * 1 + 178) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 169 * scaled,
    y: 178 * scaled,
  },
  // line segments: (133, 274) -> (175, 452) (4 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((133 - 175) / 3) * 3 + 175) * scaled,
    y: (((274 - 452) / 3) * 3 + 452) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((133 - 175) / 3) * 2 + 175) * scaled,
    y: (((274 - 452) / 3) * 2 + 452) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((133 - 175) / 3) * 1 + 175) * scaled,
    y: (((274 - 452) / 3) * 1 + 452) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 175 * scaled,
    y: 452 * scaled,
  },
  // line segments: (274, 474) -> (479,424) (4 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((274 - 479) / 3) * 3 + 479) * scaled,
    y: (((474 - 424) / 3) * 3 + 424) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((274 - 479) / 3) * 2 + 479) * scaled,
    y: (((474 - 424) / 3) * 2 + 424) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((274 - 479) / 3) * 1 + 479) * scaled,
    y: (((474 - 424) / 3) * 1 + 424) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 479 * scaled,
    y: 424 * scaled,
  },
  // line segments: (552, 121) -> (563,371) (4 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((552 - 563) / 3) * 3 + 563) * scaled,
    y: (((121 - 371) / 3) * 3 + 371) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((552 - 563) / 3) * 2 + 563) * scaled,
    y: (((121 - 371) / 3) * 2 + 371) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((552 - 563) / 3) * 1 + 563) * scaled,
    y: (((121 - 371) / 3) * 1 + 371) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 563 * scaled,
    y: 371 * scaled,
  },
  // line segments: (641, 346) -> (736, 399) (2 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((641 - 736) / 1) * 1 + 736) * scaled,
    y: (((346 - 399) / 1) * 1 + 399) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 736 * scaled,
    y: 399 * scaled,
  },
  // line segments: (723, 458) -> (622, 652) (3 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((723 - 622) / 2) * 2 + 622) * scaled,
    y: (((458 - 652) / 2) * 2 + 652) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((723 - 622) / 2) * 1 + 622) * scaled,
    y: (((458 - 652) / 2) * 1 + 652) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 622 * scaled,
    y: 652 * scaled,
  },
  // line segments: (542, 588) -> (511, 465) (2 points)
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: (((542 - 511) / 1) * 1 + 511) * scaled,
    y: (((588 - 465) / 1) * 1 + 465) * scaled,
  },
  {
    name: "LineSegments",
    highlightName: "LineSegments",
    x: 511 * scaled,
    y: 465 * scaled,
  },

  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 195 * scaled,
    y: 250 * scaled,
  }, // 195, 250
  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 295 * scaled,
    y: 150 * scaled,
  }, // 295, 150
  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 385 * scaled,
    y: 105 * scaled,
  }, // 385, 105
  {
    name: "dip-active",
    highlightName: "dip-highlight",
    x: 485 * scaled,
    y: 130 * scaled,
  }, // 485, 130
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 222 * scaled,
    y: 325 * scaled,
  }, // 222, 325
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 300 * scaled,
    y: 250 * scaled,
  }, // 300, 250
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 390 * scaled,
    y: 215 * scaled,
  }, // 390, 215
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 485 * scaled,
    y: 227 * scaled,
  }, // 485, 227
  {
    name: "pip-active",
    highlightName: "pip-highlight",
    x: 660 * scaled,
    y: 425 * scaled,
  }, // 660, 425
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 260 * scaled,
    y: 420 * scaled,
  }, // 260, 420
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 331 * scaled,
    y: 388 * scaled,
  }, // 331, 388
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 400 * scaled,
    y: 365 * scaled,
  }, // 400, 365
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 480 * scaled,
    y: 367 * scaled,
  }, // 480, 367
  {
    name: "mcp-active",
    highlightName: "mcp-highlight",
    x: 593 * scaled,
    y: 536 * scaled,
  }, // 593, 536
  // Add more parts as needed
];

export default handData;
export type { PartData };
