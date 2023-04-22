import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({isOver18}) => {
    if(!isOver18){
        alert('You do not have access')
        return <Navigate to="/" />;
    }
    return(
        <h2>Hi! this is privste page</h2>
    )
}

export default PrivateRoute;

