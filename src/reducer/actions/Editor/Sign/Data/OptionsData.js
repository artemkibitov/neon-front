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
  warmWhite: {
    key: 'warmWhite',
    title: 'білий теплий',
    textColor: 'text-neutral-900',
    background: 'rgb(255, 253, 207)',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 253, 207) 0px 0px 8px, rgb(255, 253, 207) 0px 0px 12px, rgb(255, 253, 207) 0px 0px 16px, rgb(255, 253, 207) 0px 0px 22px, rgb(255, 253, 207) 0px 0px 30px',
    value: colorBase + 'rgb(255, 253, 207) 0px 0px 8px, rgb(255, 253, 207) 0px 0px 12px, rgb(255, 253, 207) 0px 0px 16px, rgb(255, 253, 207) 0px 0px 22px, rgb(255, 253, 207) 0px 0px 30px'
  },
  white: {
    key: 'white',
    title: 'білий',
    textColor: 'text-neutral-900',
    background: 'rgb(225, 227, 230)',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(225, 227, 230) 0px 0px 8px, rgb(225, 227, 230) 0px 0px 12px, rgb(225, 227, 230) 0px 0px 16px, rgb(225, 227, 230) 0px 0px 22px, rgb(225, 227, 230) 0px 0px 30px',
    value: colorBase + 'rgb(225, 227, 230) 0px 0px 8px, rgb(225, 227, 230) 0px 0px 12px, rgb(225, 227, 230) 0px 0px 16px, rgb(225, 227, 230) 0px 0px 22px, rgb(225, 227, 230) 0px 0px 30px'
  },
  red: {
    key: 'red',
    title: 'Червоний',
    textColor: 'text-neutral-50',
    background: '#ff2a4d',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 42, 77) 0px 0px 8px, rgb(255, 42, 77) 0px 0px 12px, rgb(255, 42, 77) 0px 0px 16px, rgb(255, 42, 77) 0px 0px 22px, rgb(255, 42, 77) 0px 0px 30px',
    value: colorBase + 'rgb(255, 42, 77) 0px 0px 20px, rgb(255, 42, 77) 0px 0px 30px, rgb(255, 42, 77) 0px 0px 40px, ' +
      'rgb(255, 42, 77) 0px 0px 55px, rgb(255, 42, 77) 0px 0px 75px'
  },
  pink: {
    key: 'pink',
    title: 'рожевий',
    textColor: 'text-neutral-50',
    background: '#ff90ff',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 144, 255) 0px 0px 8px, rgb(255, 144, 255) 0px 0px 12px, rgb(255, 144, 255) 0px 0px 16px, rgb(255, 144, 255) 0px 0px 22px, rgb(255, 144, 255) 0px 0px 30px',
    value: colorBase + 'rgb(255, 144, 255) 0 0 20px,rgb(255, 144, 255) 0 0 30px,' +
      'rgb(255, 144, 255) 0 0 40px,rgb(255, 144, 255) 0 0 55px,rgb(255, 144, 255) 0 0 75px'
  },
  lemonYellow: {
    key: 'lemonYellow',
    title: 'Лимонно жовтий',
    textColor: 'text-neutral-50',
    background: 'rgb(255, 249, 124)',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 249, 124) 0px 0px 8px, rgb(255, 249, 124) 0px 0px 12px, rgb(255, 249, 124) 0px 0px 16px, rgb(255, 249, 124) 0px 0px 22px, rgb(255, 249, 124) 0px 0px 30px',
    value: colorBase + 'rgb(255, 249, 124) 0px 0px 8px, rgb(255, 249, 124) 0px 0px 12px, rgb(255, 249, 124)' +
      ' 0px 0px 16px, rgb(255, 249, 124) 0px 0px 22px, rgb(255, 249, 124) 0px 0px 30px'
  },
  goldenYellow: {
    key: 'goldenYellow',
    title: 'Жовтий',
    textColor: 'text-neutral-900',
    background: '#ffd62e',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 214, 46) 0px 0px 8px, rgb(255, 214, 46) 0px 0px 12px, rgb(255, 214, 46) 0px 0px 16px, rgb(255, 214, 46) 0px 0px 22px, rgb(255, 214, 46) 0px 0px 30px',
    value: colorBase + 'rgb(255, 214, 46) 0px 0px 20px, rgb(255, 214, 46) 0px 0px 30px, rgb(255, 214, 46) 0px 0px 40px,' +
      ' rgb(255, 214, 46) 0px 0px 55px, rgb(255, 214, 46) 0px 0px 75px'
  },
  orange: {
    key: 'orange',
    title: 'Помаранчевий',
    textColor: 'text-neutral-900',
    background: '#ff8d02',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 141, 2) 0px 0px 8px, rgb(255, 141, 2) 0px 0px 12px, rgb(255, 141, 2) 0px 0px 16px, rgb(255, 141, 2) 0px 0px 22px, rgb(255, 141, 2) 0px 0px 30px',
    value: colorBase + 'rgb(255, 141, 2) 0px 0px 20px, rgb(255, 141, 2) 0px 0px 30px, rgb(255, 141, 2) 0px 0px 40px, ' +
      'rgb(255, 141, 2) 0px 0px 55px, rgb(255, 141, 2) 0px 0px 75px'
  },
  green: {
    key: 'green',
    title: 'Зелений',
    textColor: 'text-neutral-900',
    background: 'rgb(133, 255, 170)',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(133, 255, 170) 0px 0px 8px, rgb(133, 255, 170) 0px 0px 12px, rgb(133, 255, 170) 0px 0px 16px, rgb(133, 255, 170) 0px 0px 22px, rgb(133, 255, 170) 0px 0px 30px',
    value: colorBase + ' rgb(133, 255, 170) 0px 0px 8px, rgb(133, 255, 170) 0px 0px 12px, rgb(133, 255, 170) ' +
      '0px 0px 16px, rgb(133, 255, 170) 0px 0px 22px, rgb(133, 255, 170) 0px 0px 30px'
  },
  blue: {
    key: 'blue',
    title: 'Блакитний',
    textColor: 'text-neutral-50',
    background: 'rgb(2, 116, 252)',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(2, 116, 252) 0px 0px 8px, rgb(2, 116, 252) 0px 0px 12px, rgb(2, 116, 252) 0px 0px 16px, rgb(2, 116, 252) 0px 0px 22px, rgb(2, 116, 252) 0px 0px 30px',
    value: colorBase + ' rgb(2, 116, 252) 0px 0px 8px, rgb(2, 116, 252) 0px 0px 12px, rgb(2, 116, 252) 0px 0px 16px,' +
      ' rgb(2, 116, 252) 0px 0px 22px, rgb(2, 116, 252) 0px 0px 30px'
  },
  iceBlue: {
    key: 'iceBlue',
    title: 'Блакитний лід',
    textColor: 'text-neutral-50',
    background: 'rgb(144, 220, 255)',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(144, 220, 255) 0px 0px 8px, rgb(144, 220, 255) 0px 0px 12px, rgb(144, 220, 255) 0px 0px 16px, rgb(144, 220, 255) 0px 0px 22px, rgb(144, 220, 255) 0px 0px 30px',
    value: colorBase + 'rgb(144, 220, 255) 0px 0px 8px, rgb(144, 220, 255) 0px 0px 12px, rgb(144, 220, 255)' +
      ' 0px 0px 16px, rgb(144, 220, 255) 0px 0px 22px, rgb(144, 220, 255) 0px 0px 30px'
  },
  purple: {
    key: 'purple',
    title: 'Фіолетовий',
    textColor: 'text-neutral-50',
    background: '#8c59ff',
    textShadow: 'rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(140, 89, 255) 0px 0px 8px, rgb(140, 89, 255) 0px 0px 12px, rgb(140, 89, 255) 0px 0px 16px, rgb(140, 89, 255) 0px 0px 22px, rgb(140, 89, 255) 0px 0px 30px',
    value: colorBase + 'rgb(140, 89, 255) 0px 0px 20px, rgb(140, 89, 255) 0px 0px 30px, ' +
      'rgb(140, 89, 255) 0px 0px 40px, rgb(140, 89, 255) 0px 0px 55px, rgb(140, 89, 255) 0px 0px 75px'
  },
};

export { sizeOptionsData, priceOptionsData, powerAdapterData, lightColorData };
