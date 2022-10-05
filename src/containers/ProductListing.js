import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent.jsx";

const ProductListing = (props) => {
  // const products = useSelector((state) => state.allProducts.products);
console.log(props.products)
// console.log(props.searchQuary)


  // const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=f013fe7a&app_key=186bb9ac315d7a4d5a71e3db49e1ef5a`
      )
      .catch((err) => {
        console.log("Err: ", err);
      });
    (() => props.get_products(response.data))();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      {Object.keys(props.products).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <ProductComponent iteams={props.products.hits} />
      )}
    </div>
  );
};
function mapStateToProps(state) {
  // console.log(state);
  return {
    products: state.products,
    searchQuary: state.search,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    get_products: (products) => {
      dispatch({ type: "getproducts", payload: products });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
