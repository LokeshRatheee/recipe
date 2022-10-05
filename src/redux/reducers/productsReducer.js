
const intialState = {
  products: [],
  search : [],
};

const productsReducer = (state = intialState, { type, payload }) => {
  if(type==="getproducts"){
    return{
      products:payload
    }
  }
  else if (type==="quary"){
    return{
      search:payload
    }
  }
  return state;
};
  


export default productsReducer;

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };
