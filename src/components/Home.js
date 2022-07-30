import React from "react";
import HeroImage from "../assets/rajaImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold" >I'am a Frontend Web Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            laboriosam odit ea adipisci molestiae voluptatum doloribus quis
            eligendi ipsum earum molestias aut accusamus, suscipit temporibus,
            neque harum, officiis quae corrupti.
          </p>
          <div>
            <Link to="Portfolio" smooth duration={500} className=" group w-fit px-6 py-4 my-2 flex items-center rounded bg-gradient-to-r from-cyan-500 to to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
            <img src={HeroImage} alt="Profile" className="mx-auto rounded-2xl w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
