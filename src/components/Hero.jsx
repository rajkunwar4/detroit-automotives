import React from "react";

const Hero = () => {
  return (
    <div className="  flex flex-col items-center  pb-12 border-b">
      <img
        src="https://hellaeconnect.com/new_web/assets/frontend/imgs/banner/BannerC.jpg?v=1"
        alt=""
        className=""
      />

      <div className="flex flex-col gap-3 sm:gap-4 container mt-10 text-center ">
        <h2 className="text-3xl tracking-tighter font-bold sm:text-5xl">
          Premier Manufacturer of Automotive Filters Since 2011
        </h2>
        <p className="text-xl text-gray-500 sm:text-2xl ">
          Delivering Excellence in Air, Cabin, Fuel, and Oil Filters
        </p>
        <div>
          <button className="bg-blue-950 text-white px-4 rounded font-semibold py-2 sm:px-6 sm:py-3 sm:text-lg">
            Explore our products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
