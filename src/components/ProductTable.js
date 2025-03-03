import React from 'react';
import ProductRow from './ProductRow';

// import './ProductTable.css'

const ProductTable = (props) => {
  const { products, inStock } = props;

  return (
    <div className="ProductTable">
      <table>
        <ProductRow products={products} inStock={inStock} />
      </table>
    </div>
  );
};

export default ProductTable;
