const allKeys = [
  "key",
  "name",
  "width",
  "height",
  "space",
  "lineSpace",
  "totalSize",
  "cost",
  "price",
];

const sizeOptionsData = {
  s: { key: "s", name: "компактний", width: 5, height: 7, space: 1, lineSpace: 2, totalSize: { width: 0, height: 0 } },
  m: { key: "m", name: "середній", width: 8, height: 15, space: 2, lineSpace: 2.5, totalSize: { width: 0, height: 0 } },
  l: { key: "l", name: "великий", width: 16, height: 27, space: 3, lineSpace: 3, totalSize: { width: 0, height: 0 } },
  xl: { key: "xl", name: "мега", width: 20, height: 32, space: 4, lineSpace: 3.5, totalSize: { width: 0, height: 0 } }
};

const priceOptionsData = {
  s: { key: "s", name: "компактний", cost: 350, space: 4, lineSpace: 4, price: 0 },
  m: { key: "m", name: "середній", cost: 500, space: 4, lineSpace: 4, price: 0 },
  l: { key: "l", name: "великий", cost: 1000, space: 4, lineSpace: 4, price: 0 },
  xl: { key: "xl", name: "мега", cost: 1400, space: 4, lineSpace: 4, price: 0 }
};

export { allKeys, sizeOptionsData, priceOptionsData };