import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const ProductsDetailsPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const getProduct = () => {
    axios.get(`http://localhost:3004/products/${id}`).then((response)=>{
    setProduct(response.data)
    }).catch((err) => {
      console.log(err.message);
    })

  }
  useEffect(() => {
    getProduct();
  }, [])
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={product.image} alt={product.image ? 'all good' : '404'} />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">
              {product.name ?  product.name : 'not found'}
              </h2>
            <h5 className="productPrice">
              Price : {product.price ? product.price : null}
              </h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
            {product.name ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero debitis, alias officiis, enim sed' : null }
             
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsDetailsPage;