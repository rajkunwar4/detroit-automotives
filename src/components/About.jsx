import React from "react";

const About = () => {
  return (
    <div className="border-b">
      <div className="container mt-4 py-10 text-center ">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter underline underline-offset-8" id="about">
          About Detroit Automotives
        </h2>
        <img
          src="https://www.promarket.org/wp-content/uploads/2021/08/ford-1068x580.jpg"
          alt=""
          className="mt-8 rounded mx-auto w-full"
        />
        <p className="text-lg sm:text-xl text-gray-500 mt-6 ">
          Detroit Automotives is a premier manufacturer of automotive filters,
          serving the industry since 2011. Our commitment to quality and
          innovation has made us a trusted partner for leading automotive
          brands. With state-of-the-art manufacturing facilities and a dedicated
          team, we deliver excellence in air, cabin, fuel, and oil filters.
        </p>
        <button className="px-4 py-2 bg-blue-950 text-white rounded-lg mt-6 sm:px-6 sm:py-3 text-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default About;
