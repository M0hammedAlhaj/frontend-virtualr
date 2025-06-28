import React from "react";

function Cart({ title, pargraph }) {
  return (
    <div className="flex flex-col    ">
      <div className="flex items-center gap-4 ">
        <div
          className="w-8 h-8 items-center 
         bg-gray-400 rounded-full flex 
          justify-center text-white text-sm"
        >
          ?
        </div>
        <h5>{title}</h5>
      </div>
      <div className="pl-12 max-w-[23rem] ">
        <p>{pargraph} </p>
      </div>
    </div>
  );
}

export default Cart;
