export const productInfos = {
  FR1: { value: 3.11, name: 'Fruit Tea' },
  AP1: { value: 5.00, name: 'Apple' },
  CF1: { value: 11.23, name: 'Coffee' },
};

export const getProductCodes = () => (
  Object.keys(productInfos).sort()
);

export const getProductName = (itemCode) => (
  productInfos[itemCode].name
);

export const getProductValue = (itemCode) => (
  productInfos[itemCode].value
);

