import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import '../Styles/HomePage.css'
{/* Iterate over products and show links */}
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    axios.get('http://localhost:3004/products').then((response) => {
    console.log(response.data);
      setProducts(response.data);
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() =>{
    getData();
  },[])
  return (
    <div className="container">
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
        > */}
        
        {/* </div> */}
        {products.map((el) => {
          return <Link to={`/products/${el.id}`} className="product">
              <div>
                <img src={el.image}alt="alter"/>
                <p>
                  {el.name} {el.price}
                </p>
              </div>
          </Link>
        })}
      {/* </div> */}
    </div>
  );
};

export default HomePage;