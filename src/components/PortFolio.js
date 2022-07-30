import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
const PortFolio = () => {

    const portfolios=[
        {
            id:1,
            src: arrayDestruct
        },
        {
            id:2,
            src: installNode
        },
        {
            id:3,
            src: navbar
        },
        {
            id:4,
            src: reactParallax
        },
        {
            id:5,
            src: reactSmooth
        },
        {
            id:6,
            src: reactWeather
        },
        
    ]

  return (
    <div
      name="Portfolio"
      className="text-white bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here!</p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        
        {portfolios.map(({id,src})=> (
        
          <div key ={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="hover:scale-105 duration-200 rounded-md"
            />
            <div className="flex justify-center items-center">
              <button className=" px-4 py-2 m-2 hover:scale-125 duration-200">Code</button>
            </div>
          </div>
        
        ))}
        </div>

      </div>
    </div>
  );
};

export default PortFolio;
