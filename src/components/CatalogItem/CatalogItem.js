import React from "react";
import Icons from "../Icons/Icons";
import style from './CatalogItem.module.css';
import { Link } from "react-router-dom";


const CatalogItem = ({id, name, price}) => {



    return(
        <Link to={`/catalog/${id}`}>
            <li
                key={id}
                className={style['catalog-item']}

            >
                <Icons name={name} />
                <h4>{name}</h4>
                <span>Price: {price}</span>
            </li>

        </Link>
    )
}

export default CatalogItem;