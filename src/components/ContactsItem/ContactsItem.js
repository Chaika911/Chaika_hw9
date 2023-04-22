import React from "react";
import { v4 } from "uuid";

const ContactsItem = (props) => {
    const id = {v4}
    return (
        <li key={id} >
            <a href= {`tel: ${props.telephone}`} >
                {props.name}
            </a>
        </li>
    )
}

export default ContactsItem;