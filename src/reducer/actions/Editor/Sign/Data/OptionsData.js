const sizeOptionsData = {
  s: { key: "s", name: "міні", width: 5, height: 7, space: 1, lineSpace: 2, totalSize: { width: 0, height: 0 } },
  m: { key: "m", name: "середній", width: 8, height: 15, space: 2, lineSpace: 2.5, totalSize: { width: 0, height: 0 } },
  l: { key: "l", name: "великий", width: 16, height: 27, space: 3, lineSpace: 3, totalSize: { width: 0, height: 0 } },
  xl: { key: "xl", name: "мега", width: 20, height: 32, space: 4, lineSpace: 3.5, totalSize: { width: 0, height: 0 } }
};

const priceOptionsData = {
  s: { key: "s", cost: 350, space: 4, lineSpace: 4, price: 0 },
  m: { key: "m", cost: 500, space: 4, lineSpace: 4, price: 0 },
  l: { key: "l", cost: 1000, space: 4, lineSpace: 4, price: 0 },
  xl: { key: "xl", cost: 1400, space: 4, lineSpace: 4, price: 0 }
};

const powerAdapterData = {
  s: { key: 's', adapter: 100 },
  m: { key: 'm', adapter: 200 },
  l: { key: 'l', adapter: 300 },
  xl: { key: 'xl', adapter: 400 },
}

const colorBase = 'rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,';

const lightColorData = {
  white: {
    key: 'white',
    title: 'білий',
    textColor: 'text-neutral-900',
    background: '#e1e3e6',
    value: colorBase + 'rgb(225, 227, 230) 0px 0px 20px, rgb(225, 227, 230) 0px 0px 30px, ' +
      'rgb(225, 227, 230) 0px 0px 40px, rgb(225, 227, 230) 0px 0px 55px, rgb(225, 227, 230) 0px 0px 75px'
  },
  lightRed: {
    key: 'lightRed',
    title: 'Світло-червоний',
    textColor: 'text-neutral-50',
    background: '#ff7575',
    value: colorBase + 'rgb(255, 117, 117) 0px 0px 20px, rgb(255, 117, 117) 0px 0px 30px, ' +
      'rgb(255, 117, 117) 0px 0px 40px, rgb(255, 117, 117) 0px 0px 55px, rgb(255, 117, 117) 0px 0px 75px'
  },
  red: {
    key: 'red',
    title: 'Червоний',
    textColor: 'text-neutral-50',
    background: '#ff2a4d',
    value: colorBase + 'rgb(255, 42, 77) 0px 0px 20px, rgb(255, 42, 77) 0px 0px 30px, rgb(255, 42, 77) 0px 0px 40px, ' +
      'rgb(255, 42, 77) 0px 0px 55px, rgb(255, 42, 77) 0px 0px 75px'
  },
  orange: {
    key: 'orange',
    title: 'помаранчевий',
    textColor: 'text-neutral-900',
    background: '#ff8d02',
    value: colorBase + 'rgb(255, 141, 2) 0px 0px 20px, rgb(255, 141, 2) 0px 0px 30px, rgb(255, 141, 2) 0px 0px 40px, ' +
      'rgb(255, 141, 2) 0px 0px 55px, rgb(255, 141, 2) 0px 0px 75px'
  },
  goldenYellow: {
    key: 'goldenYellow',
    title: 'Золотисто-жовтий',
    textColor: 'text-neutral-900',
    background: '#ffd62e',
    value: colorBase + 'rgb(255, 214, 46) 0px 0px 20px, rgb(255, 214, 46) 0px 0px 30px, rgb(255, 214, 46) 0px 0px 40px,' +
      ' rgb(255, 214, 46) 0px 0px 55px, rgb(255, 214, 46) 0px 0px 75px'
  },
  pink: {
    key: 'pink',
    title: 'рожевий',
    textColor: 'text-neutral-50',
    background: '#ff90ff',
    value: colorBase + 'rgb(255, 144, 255) 0 0 20px,rgb(255, 144, 255) 0 0 30px,' +
      'rgb(255, 144, 255) 0 0 40px,rgb(255, 144, 255) 0 0 55px,rgb(255, 144, 255) 0 0 75px'
  },
  electricBlue: {
    key: 'electricBlue',
    title: 'Електричний блакитний',
    textColor: 'text-neutral-50',
    background: '#63aaff',
    value: colorBase + 'rgb(99, 170, 255) 0px 0px 20px, rgb(99, 170, 255) 0px 0px 30px, rgb(99, 170, 255) 0px 0px 40px,' +
      ' rgb(99, 170, 255) 0px 0px 55px, rgb(99, 170, 255) 0px 0px 75px'
  },
  cyan: {
    key: 'cyan',
    title: 'тропічний синій',
    textColor: 'text-neutral-50',
    background: '#24b7de',
    value: colorBase + 'rgb(36, 183, 222) 0px 0px 20px, rgb(36, 183, 222) 0px 0px 30px, ' +
      'rgb(36, 183, 222) 0px 0px 40px, rgb(36, 183, 222) 0px 0px 55px, rgb(36, 183, 222) 0px 0px 75px'
  },
  purple: {
    key: 'purple',
    title: 'Фіолетовий',
    textColor: 'text-neutral-50',
    background: '#8c59ff',
    value: colorBase + 'rgb(140, 89, 255) 0px 0px 20px, rgb(140, 89, 255) 0px 0px 30px, ' +
      'rgb(140, 89, 255) 0px 0px 40px, rgb(140, 89, 255) 0px 0px 55px, rgb(140, 89, 255) 0px 0px 75px'
  },
};

export { sizeOptionsData, priceOptionsData, powerAdapterData, lightColorData };
