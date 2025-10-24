import download from'./Assets/download_icon.png'
import wave from './Assets/wave1.svg'
import homeImage from './Assets/landingImg.png'
import play from './Assets/play.png'

const Home = () => {

  return (

    <div className="home" id='home'>
        <div className="min-h-[200px] w-full flex flex-col sm:flex-row sm:justify-center sm:gap-5 md:gap-12 xl:gap-32 pt-32 items-center bg-linear-to-b from-primary-200 to-primary-100 px-6 sm:px-5 lg:px-10 lg:pt-40">

            <div className="left text-white">
                <h2 className="text-3xl xs:text-[40px] sm:text-3xl md:text-4xl lg:text-5xl/snug xl:text-6xl/tight font-bold mb-2 xs:mb-4 text-start">Hey, I'm <br />Gokul Krishna S J K</h2>
                <p className="text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-start">I'm a Front-end developer.</p>
                <button onClick={()=>{saveFile()}} className="cursor-pointer bg-white my-3 xs:my-5 flex gap-2 text-primary-100 font-semibold text-md xs:text-lg sm:text-sm md:text-lg px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">Resume <img src={download} className='sm:w-5 md:w-auto' /></button>
            </div>

            <div className="right my-6 xs:my-10 sm:mt-0 relative">
                <img src={homeImage} alt="Gokul Krishna S J K" className=" w-60 xs:w-72 sm:w-60 md:w-72 lg:w-80 xl:w-96 "/>
                <img src={play} className="w-12 xs:w-16 sm:w-12 md:w-16 lg:w-20 xl:w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="border-animation1 animate-ping border-white border-2 w-12 h-12 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"></div>
                <div className="border-animation2 animate-ping animation-delay-500 border-white border-2 w-14 h-14 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"></div>
            </div>

        </div>
        <img src={wave} className='m-0 w-full p-0' />
        
    </div>
  )
}   

export default Home