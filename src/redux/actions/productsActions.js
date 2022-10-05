// const getproducts = (quary) => {
//   fetch(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=${quary}&app_id=f013fe7a&app_key=186bb9ac315d7a4d5a71e3db49e1ef5a`
//   )
//     .then((data) => data.json())
//     .then((result) => {
//       return {
//         get_products: (dispatch) => {
//           console.log(result)
//           dispatch({ type: "getproducts", payload: result });
//         },
//       };
//     });
// };

// export default getproducts;