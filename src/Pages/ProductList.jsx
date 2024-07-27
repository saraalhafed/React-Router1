import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 10, title: 'Samsung s24' },
  { id: 22, title: 'Samsung s23' },
  { id: 35, title: 'Samsung s22' },
  { id: 41, title: 'iPhone 15' },
  { id: 52, title: 'iPhone 14' },
  { id: 66, title: 'iPhone 13' },
  { id: 75, title: 'iPhone 12' },
];


const ProductList = () => {
  return (
    <div>
      <h1>ProductList</h1>
      {/* <Link to="/product/1">Product 1</Link>
      <Link to="/product/2">Product 2</Link>
      <Link to="/product/3">Product 3</Link>
      <Link to="/product/4">Product 4</Link>
      <Link to="/product/5">Product 5</Link>
      <Link to="/product/6">Product 6</Link> */}
{/* make  link for each product , we go to this page which productlist when we click on product link*/}
{/* from the link product when i click on  in url just product :i cann see page productList which has productlink for each product
                                                          but when i cklick product/2 :i cann see  the product with back btn which inside the product page */}
                                                          {/* product link it cann reach 2 pages */}
      {products.map((item, index) => (
        <Link key={index} to={`/product/${item.id}`}>   {/* befor was index */}
          Product {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
