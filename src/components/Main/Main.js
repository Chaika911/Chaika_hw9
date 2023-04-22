import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main page</h1>
      <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic. In a repellat debitis reiciendis nam illum est voluptatibus pariatur soluta perferendis similique cum eaque distinctio alias atque, provident quod! </p>
      <Outlet />
      <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, hic. In a repellat debitis reiciendis nam illum est voluptatibus pariatur soluta perferendis similique cum eaque distinctio alias atque, provident quod! </p>
    </div>
  )
}

export default Main;