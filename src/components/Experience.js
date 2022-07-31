import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'


const Experience = () => {
    
    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'Javascipt',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-500'
        },
        {
            id:6,
            src:github,
            title:'Github',
            style:'shadow-gray-400'
        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from from-black to-gray-800 w-full md:h-screen text-white">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className='text-4xl inline font-bold border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>These are the Technologies I've worked with</p>
            </div>
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-8'>

                {techs.map(({id,src,title,style}) => (
                    <div key={id} className={`hover:scale-110 duration-500 py-2 rounded-lg shadow-md ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <div className="flex justify-center item-center">
                    <p className='mt-4'>{title}</p>
                    </div>
                    </div> 
                ))}
                </div>
            </div>
        </div>
  )
}

export default Experience