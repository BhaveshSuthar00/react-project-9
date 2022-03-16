import { Link } from "react-router-dom";
import React from "react";
const links = [
  {to:'/', title: 'Home'}, {to:'/products', title: 'Products'}
  // Fix this links array, it's an array of objects {to: "", title: ""}
];

const Navbar = () => {
  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "center" }}>
      {links.map((el) => {
        return (
          <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
            <p>
              {el.title}
            </p>
          </Link>
        );
      })}        
      </div>
    </nav>
  );
};
export default Navbar