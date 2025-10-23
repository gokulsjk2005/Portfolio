import React from 'react'
import webDev from './Assets/webDev.png'
import deploy from './Assets/deploy.png'

const Services = () => {
  return (
    <div className="services">
        <div className="skills flex justify-center min-h-[300px] bg-white px-5 sm:px-10 lg:px-20 py-10 pt-10 pb-15">
        <div className="skills-container w-full max-w-6xl">
            <h2 className="text-4xl text-primary-100 sm:text-4xl lg:text-5xl font-bold text-center">SERVICES</h2>
            <hr className='border-primary-100 my-2 mb-15 w-20 border-3 rounded-2xl mx-auto' />

            <div className="servicesSection grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="border border-gray-300 py-6 px-4 rounded-md">
                    <h3 className='text-xl font-medium text-neutral-800 mb-2'>Responsive Web Design & Development</h3>
                    <p>I create modern, fully responsive websites that look great on every device. Using Tailwind CSS, Bootstrap, and custom CSS, I make sure your website stays clean, fast, and user-friendly.</p>
                </div>
                <div className="border border-gray-300 py-6 px-4 rounded-md">
                    <h3 className='text-xl font-medium text-neutral-800 mb-2'> Website Redesign & Optimization</h3>
                    <p>I modernize old or outdated websites, improving layouts, loading speed, and user experience — so your site not only looks better but performs better too.</p>
                </div>
                <div className="border border-gray-300 py-6 px-4 rounded-md">
                    <h3 className='text-xl font-medium text-neutral-800 mb-2'>API Integration & Frontend Functionality</h3>
                    <p>I connect your website with real-time data using REST APIs and ensure everything works smoothly — from fetching data to displaying it beautifully.</p>
                </div>
                <div className="border border-gray-300 py-6 px-4 rounded-md">
                    <h3 className='text-xl font-medium text-neutral-800 mb-2'>Domain Purchasing, Hosting & Deployment</h3>
                    <p>I help clients purchase domains, set up hosting, and deploy their websites on platforms like Vercel, Netlify, or custom hosting providers. From choosing the right domain to getting your site live — I handle the complete process with zero hassle.</p>
                </div>
                <div className="border border-gray-300 py-6 px-4 rounded-md">
                    <h3 className='text-xl font-medium text-neutral-800 mb-2'>UI to Code Conversion</h3>
                    <p>Got a design in Figma, Adobe XD, or Sketch? I’ll bring it to life with pixel-perfect accuracy using HTML, CSS, and JavaScript or React components, while keeping the code clean and maintainable.</p>
                </div>
                <div className="border border-gray-300 py-6 px-4 rounded-md">
                    <h3 className='text-xl font-medium text-neutral-800 mb-2'>Responsive Web Design & Development</h3>
                    <p>I create modern, fully responsive websites that look great on every device. Using Tailwind CSS, Bootstrap, and custom CSS, I make sure your website stays clean, fast, and user-friendly.</p>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Services