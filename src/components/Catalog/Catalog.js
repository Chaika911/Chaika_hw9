import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import style from './Catalog.module.css';

const Catalog = ({ products }) => {
    return (
        <ul className={style.items}>
            {products.map((product) => (
            <CatalogItem name={product.name} key={product.id} id={product.id} price={product.price} />
            ))}
        </ul>
);
};

export default Catalog;