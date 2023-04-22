import React from "react";
import { NavLink } from "react-router-dom";
import  './Navigation.css'

const Navigation = ( {products} ) => {

    return (
        <ul>
            <li>
                <NavLink to={'/'}>
                    Main
                </NavLink>
            </li>
            <li>
                <NavLink to={'/contacts'}>
                    Contacts
                </NavLink>
            </li>
            <li>
                <NavLink to={'/catalog'}>
                    Catalog
                </NavLink>
            </li>
            {products.map(productItem => {

                return(
                    <li key={productItem.id}>
                        <NavLink to={`/catalog/${productItem.id}`}>
                            product = {productItem.name}
                        </NavLink>
                    </li>
                )
            })}
            <li>
                <NavLink to={'/private'}>
                    Private
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation;