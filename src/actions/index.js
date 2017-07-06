export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCTS',
  removeProduct: 'REMOVE_PRODUCTS'
};

export function addProduct(product) {
  // debugger;
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}

export function removeProduct(product) {
  // debugger;
  return {
    type: ACTION_TYPES.removeProduct,
    payload: {
      product,
    }
  }
}


