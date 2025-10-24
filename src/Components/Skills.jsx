import html from './Assets/html.png'
import css from './Assets/css.png'
import js from './Assets/js.png'
import react from './Assets/react.png'
import tailwind from './Assets/tailwind.png'
import git from './Assets/git.png'
import github from './Assets/github.png'
import bootstrap from './Assets/bootstrap.png'
import nodejs from './Assets/nodejs.png'
import jquery from './Assets/jquery.png'
import sass from './Assets/sass.png'
import nextjs from './Assets/nextjs.svg'

const skills = {
    HTML: html, CSS: css, JavaScript: js, ReactJS: react, TailwindCSS: tailwind, Bootstrap: bootstrap, Git: git, GitHub: github, NodeJS: nodejs, jQuery: jquery, Sass: sass,'NEXT' :nextjs,
};

const Skills = () => {
  return (
    <div className="skills flex justify-center min-h-[300px] bg-white px-10 sm:px-10 lg:px-20 pb-10 pt-10 sm:pt-0" id='skills'>
        <div className="skills-container w-full max-w-6xl">

            <h2 className="text-4xl text-primary-100 sm:text-4xl lg:text-5xl font-bold text-center">SKILLS</h2>
            <hr className='border-primary-100 my-2 mb-20 w-20 border-3 rounded-2xl mx-auto' />

            <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

                {Object.entries(skills).map(([skillName, skillImage], index) => (
                    <div key={index} className="skill-item flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <img src={skillImage} alt={skillName} className="w-14 xs:w-16 sm:w-20 h-auto mb-4"/>
                        <p className="text-lg font-medium text-gray-700 capitalize">{skillName}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Skills