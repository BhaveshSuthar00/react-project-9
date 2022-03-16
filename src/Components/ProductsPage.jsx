import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/HomePage.css'
 const ProductsPage = () => {
  const [products, setProducts ] = useState([]);
  const getData = () => {
    axios.get('http://localhost:3004/products').then((response) => {
      setProducts(response.data);
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 35%)",
          justifyContent: "space-evenly",
          width: "500px",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {products.length > 0 ? products.map((el) => {
        return (
          <div
            key={el.id}
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 35%)",
              justifyContent: "space-evenly",
              width: "500px",
              margin: "auto",
              paddingTop: "10px",
            }}
          >
            <div className="name">{el.name}</div>
            <div className="price">{el.price}</div>
            <Link to={`/products/${el.id}`}>more details</Link>
          </div>
        );
      }) : null
    }
    </>
  );
};
export default ProductsPage;