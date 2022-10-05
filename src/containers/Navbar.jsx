import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { connect, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
// import getproducts from "../redux/actions/productsActions"


const Navbar = (props) => {
  const [title, setTitle] = useState("");
  const [first, setfirst] = useState();
  const Search = useSelector((state) => state.search);
  // console.log(products);
  const fetchProducts = async (x) => {
    const response = await axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${x}&app_id=f013fe7a&app_key=186bb9ac315d7a4d5a71e3db49e1ef5a`
      )
      .catch((err) => {
        console.log("Err: ", err);
      });
    (() => props.get_products(response.data))();
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log(search)
  return (
    <>
      <div className="container-fluid bg-light">
        <nav className="navbar fixed-top navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">RECIPE STORE</a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                type="search"
                onChange={(event) => {
                  setTitle(event.target.value);
                  // console.log(title);
                }}
              />
              <button
                className="btn btn-outline-success"
                onClick={(event) => {
                  event.preventDefault();
                  console.log(title);
                  setfirst(title);
                  fetchProducts(title);
                }}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="ui grid container">
        {Object.keys(props.products).length === 0 ? console.log("sds"): (
          <ProductComponent iteams={props.products.hits} />
        )}
      </div>
    </>
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
  return{
    get_products: (products) => {
      dispatch({ type: "getproducts", payload: products });
  }
};
};
export default connect(mapStateToProps ,mapDispatchToProps) (Navbar);