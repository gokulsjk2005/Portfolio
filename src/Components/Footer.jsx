import github from './Assets/githubIcon.png'
import linkedIn from './Assets/linkedin.png'
import insta from './Assets/instagram.png'

const Footer = () => {

  return (

    <div className="footer w-full m-0 bg-black">

        <div className="footer1 flex flex-col sm:flex-row  px-10 py-8">

            <div className="left sm:w-1/2 xs:text-center">
                <h1 className='text-neutral-300 text-3xl md:text-4xl mb-1 font-serif font-medium'>Get in Touch</h1>
                <p className='text-neutral-400 '>Let's connect! Find me on social media platforms</p>
            </div>

            <div className="right flex justify-start xs:justify-center xs:items-center gap-6 py-5 sm:w-1/2">
                <a href="https://linkedin.com/in/gokul-krishna-s-j-k-29a840311"><img src={linkedIn} className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer" /></a>
                <a href="https://www.instagram.com/_gokuul_"><img src={insta} className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer" /></a>
                <a href="https://github.com/gokulsjk2005"><img src={github} className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer" /></a>
            </div>

        </div>
        <hr className='border-neutral-700 ' />

        <div className="footer2 px-5 py-3 text-center">
            <p className='text-neutral-500 text-xs md:text-sm tracking-widest'>©2025 Gokul Krishna S J K | All rights reserved</p>
        </div>

    </div>

  )
}

export default Footer