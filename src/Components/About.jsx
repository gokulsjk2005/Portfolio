import React from 'react'
import wave1 from './Assets/wave2.svg'
import wave2 from './Assets/wave3.svg'
import profile from './Assets/profile.jpeg'

const About = () => {
  return (
    <div className="about">
        <div className="aboutSection min-h-[500px] pt-10 pb-15 px-6 sm:px-12 md:px-6 lg:px-20 xl:px-32 bg-gray-100">

            <div className="flex flex-col md:flex-row">
                <div className="left flex flex-col md:w-1/2">
                    <h1 className="text-4xl pt-5 md:pb-10 pl-2 xs:pl-10 md:pl-8 lg:pl-20 text-black sm:text-[45px] lg:text-5xl xl:text-6xl font-bold text-start font-serif">So, who am I?</h1>
                    <img src={profile} className=' mx-auto rounded-full my-10 w-60 sm:w-72 lg:w-80 xl:w-96'/>
                </div>
                <div className="right md:w-1/2 md:py-20 lg:py-15">
                    <p className='my-5 text-md text-gray-800 xs:px-5 sm:text-lg md:text-md lg:text-lg xl:text-xl'>Hi! I'm
                        <span className='text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-medium italic'> Gokul Krishna S J K,
                        </span> a passionate Front-End Developer from Kollam, Kerala.
                        I specialize in creating clean, responsive, and interactive web interfaces that deliver smooth user experiences.
                        With strong skills in HTML, CSS, JavaScript, and modern frontend frameworks like ReactJS, I handle everything from the initial design to final deployment of a website. I love transforming ideas into visually appealing and high-performing web solutions.
                        <span className='md:hidden lg:inline'> I’m currently pursuing my Bachelor of Computer Applications (B.C.A.) at Sambhram Academy of Management Studies, Bengaluru.
                        As a developer, I focus on writing efficient code, crafting modern UI designs, and ensuring that every project I build is fully responsive, optimized, and ready for real-world use. When I’m not coding, I explore new web technologies and design trends to keep improving my craft.
                    </span>
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About