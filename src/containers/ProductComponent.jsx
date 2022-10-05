import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productcomponents.css";

const ProductComponent = (props) => {
  const products = useSelector((state) => state.products);
  // let iteams = props.iteams
  console.log(products.hits[2]);

  return (
    <>
      <div className="row cards">
        
        {props.iteams.map((iteams, index) => {
          // console.log(iteams.recipe.label);
          return (
            
            <div className="container col-md-6" key={iteams.recipe.image}>
              {/* {console.log(iteams.recipe.images)} */}
              <a href={iteams.recipe.url}>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4 zoom-img">
                    

                  <img
                      src={iteams.recipe.images.REGULAR.url}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ padding: "20px" }}
                    ></img>
                  </div>
                  <div className="col-md-4 ">
                    <div className="card-body">
                      <h4 className="card-title">
                        <strong>{iteams.recipe.label}</strong>
                      </h4>
                      <div className="cuisine" style={{textTransform: "capitalize"}}>
                        {iteams.recipe.cuisineType.map((keys, index) => {
                          return (
                            <p
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: "5px",
                              }}
                            >
                              <span className="dot"></span> {keys}
                            </p>
                          );
                        })}
                      </div>
                      <div className="dishtype " style={{textTransform: "capitalize", textAlign:"center" , paddingTop :"5px"}}>
                        <p ><span className="dot"></span> {iteams.recipe.dishType}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};


export default ProductComponent;
