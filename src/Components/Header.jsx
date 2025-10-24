import React from 'react'

const Header = () => {

  const navRef = React.useRef();
  const lineRef = React.useRef();
  const crossRef = React.useRef();

  const navbarToggle = () => {
    navRef.current.classList.toggle("right-0");
    navRef.current.classList.toggle("-right-full");
    if (navRef.current.classList.contains("right-0")) {
      document.body.style.overflow = "hidden";
      navRef.current.classList.add("opacity-100");
      lineRef.current.classList.add("hidden");
      crossRef.current.classList.remove("hidden");
    } else {
      document.body.style.overflow = "auto";
      navRef.current.classList.remove("opacity-100");
      lineRef.current.classList.remove("hidden");
      crossRef.current.classList.add("hidden");
    }
  }
  const closeNav = () => {
    navRef.current.classList.remove("right-0");
    navRef.current.classList.add("-right-full");
    lineRef.current.classList.remove("hidden");
  }

  return (

    <header className="bg-linear-to-br from-primary-300 to-primary-200 shadow-lg text-white flex justify-between items-center py-4 px-6 xs:px-10 sm:px-15 lg:px-20 xl:px-32 xl:py-5 fixed w-full z-50">
      <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl title">Gokul Krishna S J K</h1>

      <div ref={lineRef} className="toggler md:hidden flex flex-col cursor-pointer once-in-out" onClick={() => navbarToggle()}>
        <div className="line w-5 h-0.5 bg-white"></div>
        <div className="line w-5 h-0.5 my-1 bg-white"></div>
        <div className="line w-5 h-0.5 bg-white"></div>
      </div>

      <ul ref={navRef} className="text-lg absolute opacity-0 top-15 sm:top-18 -right-full w-full bg-[rgba(0,0,0,0.5)] text-neutral-300 backdrop-brightness-75 backdrop-blur-xs px-10 py-6 md:hidden transition-all duration-300 ease-in-out shadow-lg">

          <div ref={crossRef} className="close items-center hidden absolute top-1 right-6">
            <div className="cross text-3xl cursor-pointer text-neutral-300" onClick={() => navbarToggle()}>x</div>
          </div>

          <li className=''><a href="#home" className="hover:underline cursor-pointer" onClick={()=>{closeNav()}}>Home</a></li>
          <li className='py-2'><a href="#skills" className="hover:underline cursor-pointer" onClick={()=>{closeNav()}}>Skills</a></li>
          <li><a href="#services" className="hover:underline cursor-pointer" onClick={()=>{closeNav()}}>Services</a></li>
          <li className='py-2'><a href="#about" className="hover:underline cursor-pointer py-3" onClick={()=>{closeNav()}}>About</a></li>
          <li><a href="#contact" className="hover:underline cursor-pointer py-3" onClick={()=>closeNav()}>Contact</a></li>

      </ul>

      <nav className='hidden md:block'>
        <ul className="flex space-x-6 lg:space-x-8 lg:text-lg">
          <li><a href="#home" className="hover:underline cursor-pointer">Home</a></li>
          <li><a href="#skills" className="hover:underline cursor-pointer">Skills</a></li>
          <li><a href="#services" className="hover:underline cursor-pointer">Services</a></li>
          <li><a href="#about" className="hover:underline cursor-pointer">About</a></li>
          <li><a href="#contact" className="hover:underline cursor-pointer">Contact</a></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header