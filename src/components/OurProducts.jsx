import React from "react";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  return (
    <div className="container text-center py-10 my-10">
      <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold underline underline-offset-8">
        Our Products
      </h2>
      <p className="text-gray-500 text-lg sm:text-xl mt-5 max-w-4xl mx-auto">
        Detroit Automotives offers a comprehensive range of high-quality
        automotive filters, including air, cabin, fuel, and oil filters. Our
        products are designed to meet the stringent requirements of the
        industry, ensuring optimal performance and extended vehicle lifespan.
      </p>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <ProductCard
          description={
            "Ensure optimal engine performance with our high-quality air filters."
          }
          title={"Air Filter"}
          image={
            "https://www.autoone.com.au/Images/ProductImages/Large/performance-air-filters_saas_SF1220_2.jpg"
          }
        />
        <ProductCard
          description={
            "Breathe easy with our high-performance cabin air filters."
          }
          title={"Cabin Filter"}
          image={
            "https://nirvanabeing.com/cdn/shop/products/AirficCarcabinfilteramazonbanners-011_1000x.jpg?v=1699524741"
          }
        />
        <ProductCard
          description={"Protect your engine with our reliable fuel filters."}
          title={"Fuel Filter"}
          image={
            "https://5.imimg.com/data5/SELLER/Default/2022/5/MK/JI/EJ/143750033/diesel-engine-fuel-filter.jpg"
          }
        />
        <ProductCard
          description={
            "Ensure optimal engine lubrication with our high-quality oil filters."
          }
          title={"Oil filter"}
          image={
            "https://5.imimg.com/data5/ZO/NY/GY/SELLER-765285/generator-oil-filters-500x500.jpg"
          }
        />
      </div>
    </div>
  );
};

export default OurProducts;
