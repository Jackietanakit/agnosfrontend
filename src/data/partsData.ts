export interface PartPoint {
  name: string;
  x: number;
  y: number;
}

export interface PartData {
  [key: string]: {
    captionSrc: string;
    highlightSrc: string;
  };
}

// image dimensions: 694x818 -> Scale:0.83816425
const scaled: number = 1;

export const handPointData: PartPoint[] = [
  // OUTLINE SEGMENTS
  { name: "Outline", x: 488, y: 31 },
  {
    name: "Outline",
    x: ((375 - 169) / 4) * 4 + 169,
    y: ((23 - 178) / 4) * 4 + 178,
  },
  {
    name: "Outline",
    x: ((375 - 169) / 4) * 3 + 169,
    y: ((23 - 178) / 4) * 3 + 178,
  },
  {
    name: "Outline",
    x: ((375 - 169) / 4) * 2 + 169,
    y: ((23 - 178) / 4) * 2 + 178,
  },
  {
    name: "Outline",
    x: ((375 - 169) / 4) * 1 + 169,
    y: ((23 - 178) / 4) * 1 + 178,
  },
  { name: "Outline", x: 169, y: 178 },
  {
    name: "Outline",
    x: ((133 - 175) / 3) * 3 + 175,
    y: ((274 - 452) / 3) * 3 + 452,
  },
  {
    name: "Outline",
    x: ((133 - 175) / 3) * 2 + 175,
    y: ((274 - 452) / 3) * 2 + 452,
  },
  {
    name: "Outline",
    x: ((133 - 175) / 3) * 1 + 175,
    y: ((274 - 452) / 3) * 1 + 452,
  },
  { name: "Outline", x: 175, y: 452 },
  {
    name: "Outline",
    x: ((274 - 479) / 3) * 3 + 479,
    y: ((474 - 424) / 3) * 3 + 424,
  },
  {
    name: "Outline",
    x: ((274 - 479) / 3) * 2 + 479,
    y: ((474 - 424) / 3) * 2 + 424,
  },
  {
    name: "Outline",
    x: ((274 - 479) / 3) * 1 + 479,
    y: ((474 - 424) / 3) * 1 + 424,
  },
  { name: "Outline", x: 479, y: 424 },
  {
    name: "Outline",
    x: ((552 - 563) / 3) * 3 + 563,
    y: ((121 - 371) / 3) * 3 + 371,
  },
  {
    name: "Outline",
    x: ((552 - 563) / 3) * 2 + 563,
    y: ((121 - 371) / 3) * 2 + 371,
  },
  {
    name: "Outline",
    x: ((552 - 563) / 3) * 1 + 563,
    y: ((121 - 371) / 3) * 1 + 371,
  },
  { name: "Outline", x: 563, y: 371 },
  { name: "Outline", x: 641, y: 346 },
  { name: "Outline", x: 736, y: 399 },
  {
    name: "Outline",
    x: ((723 - 622) / 2) * 2 + 622,
    y: ((458 - 652) / 2) * 2 + 652,
  },
  {
    name: "Outline",
    x: ((723 - 622) / 2) * 1 + 622,
    y: ((458 - 652) / 2) * 1 + 652,
  },
  { name: "Outline", x: 622, y: 652 },
  { name: "Outline", x: 542, y: 588 },
  { name: "Outline", x: 511, y: 465 },

  // BODY SEGMENTS
  // Dip part
  { name: "dip", x: 195, y: 250 }, // 195, 250
  { name: "dip", x: 295, y: 150 }, // 295, 150
  { name: "dip", x: 385, y: 105 }, // 385, 105
  { name: "dip", x: 485, y: 130 }, // 485, 130

  // Pip part
  { name: "pip", x: 222, y: 325 }, // 222, 325
  { name: "pip", x: 300, y: 250 }, // 300, 250
  { name: "pip", x: 390, y: 215 }, // 390, 215
  { name: "pip", x: 485, y: 227 }, // 485, 227
  { name: "pip", x: 660, y: 425 }, // 660, 425

  // Mcp Part
  { name: "mcp", x: 260, y: 420 }, // 260, 420
  { name: "mcp", x: 331, y: 388 }, // 331, 388
  { name: "mcp", x: 400, y: 365 }, // 400, 365
  { name: "mcp", x: 480, y: 367 }, // 480, 367
  { name: "mcp", x: 593, y: 536 }, // 593, 536
];

export const handPartData: PartData = {
  dip: {
    captionSrc: "/images/dip-active.png",
    highlightSrc: "/images/dip-highlight.png",
  },
  pip: {
    captionSrc: "/images/pip-active.png",
    highlightSrc: "/images/pip-highlight.png",
  },
  mcp: {
    captionSrc: "/images/mcp-active.png",
    highlightSrc: "/images/mcp-highlight.png",
  },
};

export const absPointData: PartPoint[] = [
  // OUTLINE SEGMENTS
  { name: "Outline", x: 473, y: 325 },
  { name: "Outline", x: 512, y: 369 },
  { name: "Outline", x: 567, y: 448 },
  { name: "Outline", x: 581, y: 570 },
  { name: "Outline", x: 543, y: 641 },
  { name: "Outline", x: 448, y: 705 },
  { name: "Outline", x: 355, y: 704 },
  { name: "Outline", x: 249, y: 649 },
  { name: "Outline", x: 209, y: 545 },
  { name: "Outline", x: 208, y: 462 },
  { name: "Outline", x: 266, y: 368 },
  { name: "Outline", x: 332, y: 320 },

  // BODY SEGMENTS
  { name: "epigastrium", x: 400, y: 400 },
  { name: "llq", x: 480, y: 570 },
  { name: "luq", x: 482, y: 462 },
  { name: "rlq", x: 313, y: 568 },
  { name: "ruq", x: 321, y: 464 },
  { name: "suprapubic", x: 400, y: 628 },
  { name: "umbilicus", x: 400, y: 518 },
];

export const absPartData: PartData = {
  epigastrium: {
    captionSrc: "/images/epigastrium-active.png",
    highlightSrc: "/images/epigastrium-highlight.png",
  },
  llq: {
    captionSrc: "/images/llq-active.png",
    highlightSrc: "/images/llq-highlight.png",
  },
  luq: {
    captionSrc: "/images/luq-active.png",
    highlightSrc: "/images/luq-highlight.png",
  },
  rlq: {
    captionSrc: "/images/rlq-active.png",
    highlightSrc: "/images/rlq-highlight.png",
  },
  ruq: {
    captionSrc: "/images/ruq-active.png",
    highlightSrc: "/images/ruq-highlight.png",
  },
  suprapubic: {
    captionSrc: "/images/suprapubic-active.png",
    highlightSrc: "/images/suprapubic-highlight.png",
  },
  umbilicus: {
    captionSrc: "/images/umbilicus-active.png",
    highlightSrc: "/images/umbilicus-highlight.png",
  },
};
