import { Title } from './'
import { usePage } from '../context/pageContext'
import cs from 'classnames'

export function About() {
  return (
    <section
      className={cs(
        'xl:px-0 md:pb-0 container px-6 pt-16 pb-8 mx-auto relative min-h-screen'
      )}
    >
      <Title subtitle="Get to know me" title="About Me" />

      <div className="md:flex-row lg:space-x-20 md:space-x-2 relative z-0 flex flex-col items-center">
        <img
          src={require('../assets/placeholder.png')}
          alt=""
          className="xl:w-4/12 md:rounded md:w-6/12 md:h-auto md:mb-0 object-cover w-40 h-40 mb-12 border-4 border-gray-900 border-opacity-25 rounded-full"
        />

        <div className="md:w-1/2 relative z-10">
          <div className="pb-8 mb-8 border-b-2 border-gray-500 border-opacity-25">
            <h5 className="text-primary-500 mb-2 text-2xl font-semibold">
              Who am i?
            </h5>
            <h4 className="mb-4 text-3xl font-bold text-gray-200">
              I'm Gabriel Raposo, a Fullstack developer
            </h4>
            <p className="leading-relaxed text-gray-500 opacity-75">
              I am a freelancer based in Brazil and i have been working as a
              developer for a year now, which comply with the latest techs
              trends. I help convert a vision and an idea into meaningful and
              useful products. Having a sharp eye for product development helps
              me prioritize tasks, iterate fast and deliver faster.
            </p>
          </div>
          <div className="md:flex-row md:space-y-0 flex flex-col justify-between mb-8 space-y-2 text-gray-200">
            <div className=" flex flex-col space-y-2">
              <p className="font-semibold">
                Name
                <span className="ml-4 font-normal text-gray-500 opacity-75">
                  Gabriel Raposo
                </span>
              </p>
              <p className="font-semibold">
                Age
                <span className="ml-4 font-normal text-gray-500 opacity-75">
                  22
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-semibold">
                Email
                <span className="ml-4 font-normal text-gray-500 opacity-75">
                  gabriel.robertor@gmail.com
                </span>
              </p>
              <p className="font-semibold">
                From
                <span className="ml-4 font-normal text-gray-500 opacity-75">
                  Brazil
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-10 text-2xl text-gray-200">
            <a
              aria-label="github"
              href="https://github.com/GabrielRaposoD"
              className="hover:text-primary-500 transition-all duration-500 ease-in-out"
            >
              <i className="fab fa-github-alt"></i>
            </a>
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/gabrielrraposo/"
              className="hover:text-primary-500 transition-all duration-500 ease-in-out"
            >
              <i className="fab fa-linkedin-in "></i>
            </a>
            <a
              aria-label="instagram"
              href="instagram.com/gabrielrraposo"
              className="hover:text-primary-500 transition-all duration-500 ease-in-out"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
