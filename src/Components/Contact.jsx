import { useRef } from 'react'
import send from './Assets/send.png'
import send2 from './Assets/send2.png'

const Contact = () => {

  const sendRef = useRef();
  const send2Ref = useRef();
  const buttonRef = useRef();

  const hover = () => {
    sendRef.current.classList.add("hidden");
    send2Ref.current.classList.remove("hidden");
    buttonRef.current.classList.add("text-white");
    buttonRef.current.classList.add("bg-primary-200");
  }

  const unhover = () => {
    send2Ref.current.classList.add("hidden");
    sendRef.current.classList.remove("hidden");
    buttonRef.current.classList.remove("text-white");
    buttonRef.current.classList.remove("bg-primary-200");
  }

  return (

    <div className="contact bg-gray-100 pb-20 px-5 xs:px-10 sm:px-20 md:px-5 lg:px-30 xl:px-50 w-full" id='contact'>
        
        <h2 className="text-4xl text-primary-100 sm:text-4xl lg:text-5xl font-bold text-center">Let's Get Started</h2>
        <hr className='border-primary-100 my-2 mb-20 w-20 border-3 rounded-2xl mx-auto' />

        <div className="fullWin flex flex-col gap-0 shadow-md shadow-gray-500 md:flex-row">

            <div className="leftCol bg-primary-200 px-10 py-15 md:block text-white md:w-1/2">
                <h1 className='text-4xl font-semibold mb-5'>100% Satisfaction Guaranteed</h1>
                <p className='text-2xl'>I value your trust and aim to deliver exactly what you need. Every project is completed with care and open communication until you're fully satisfied</p>
            </div>

            <div className="rightCol bg-white py-10 px-5 md:w-1/2">
              <div className="flex flex-col gap-5 lg:flex-row">

                <div className="left lg:w-1/2">
                  <input type="text" name='name' required id='fname' placeholder='First Name' className='py-2.5 px-3 rounded-lg shadow-md shadow-gray-600 w-full text-gray-800 focus:outline-0 active:outline-0' autoComplete='off'/>
                </div>

                <div className="right lg:w-1/2">
                  <input type="text" name='name' required id='lname' placeholder='Last Name' className='py-2.5 px-3 rounded-lg shadow-md shadow-gray-600 w-full text-gray-800 focus:outline-0 active:outline-0' autoComplete='off'/>
                </div>
                
              </div>

              <div className="email my-5">
                <input type="email" name="email" required id="email" placeholder='Email Address' className='py-2.5 px-3 rounded-lg shadow-md shadow-gray-600 w-full text-gray-800 focus:outline-0 active:outline-0' autoComplete='off'/>
              </div>

              <div className="comment">
                <textarea name="comments" id="comment" required rows={5} className='resize-none py-2.5 px-3 rounded-lg shadow-md shadow-gray-600 w-full text-gray-800 focus:outline-0 active:outline-0' autoComplete='off' placeholder='Enter your Message..'></textarea>
              </div>

              <div className="send pt-5 flex justify-center">
                <button type='submit' ref={buttonRef} onMouseEnter={()=>{hover()}} onMouseLeave={()=>{unhover()}} className='py-2 px-6 flex justify-center cursor-pointer hover:text-white hover:bg-primary-200 items-center gap-2 rounded-full border-2 text-primary-200 font-bold text-lg border-primary-200'>Send<img src={send} className='w-5' ref={sendRef}/><img src={send2} className='w-5 hidden' ref={send2Ref}/></button>
              </div>

            </div>

        </div>
    </div>
    
  )
}

export default Contact