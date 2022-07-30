import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from bg-gray-800 to to-black text-white">
      <div className=" max-w-screen-lg p-4 flex flex-col w-full h-full justify-center mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
        </div>
        <p className="text-xl mt-20"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          est architecto, aliquam dolorem eligendi iusto omnis! Sequi molestiae
          soluta excepturi labore eaque tenetur in porro officia natus
          consectetur nobis culpa, quos a.
        </p>
        <br />
        <p className="text-xl"> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          assumenda iste amet ut, distinctio mollitia officiis. Maxime
          cupiditate debitis iusto quod, non dolorem voluptates, voluptas optio
          blanditiis molestiae possimus. Voluptatem expedita incidunt ea
          pariatur quidem culpa velit officiis aliquam distinctio.
        </p>
      </div>
    </div>
  );
};

export default About;
