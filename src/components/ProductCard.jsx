import React from "react";

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col justify-center items-center border pb-5 rounded w-[300px] ">
      <img src={image} alt="" className="flex-2 px-8" />
      <div className="flex-3 px-3 text-center gap-2 flex flex-col">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500 ">{description}</p>
        <button className="text-white bg-blue-950 px-3 py-1 rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
