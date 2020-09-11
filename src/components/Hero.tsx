export function Hero() {
  return (
    <section className="relative flex min-h-screen">
      <div className="md:px-20 flex flex-col items-end justify-center w-full px-5">
        <div className="md:mr-0 -mr-4 space-y-12">
          <h1 className=" md:text-6xl text-3xl font-bold leading-tight text-left text-white">
            PROGRESS SHOULD <br />{' '}
            <span className="text-primary-500">NEVER </span>
            BE KEPT <br /> WAITING
          </h1>

          <p className="border-primary-700 pl-4 text-lg font-semibold leading-loose text-gray-200 border-l-4 border-solid">
            I'm <span className="text-primary-500">Gabriel Raposo, </span>a
            Fullstack Developer and Freelancer. <br /> Let's work together!
          </p>
          <div className="relative z-10 flex flex-row space-x-10 text-3xl text-gray-200">
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
      <img
        src={require('../assets/fox-bg.png')}
        alt=""
        className="absolute bottom-0 left-0 z-0 opacity-25"
      />
    </section>
  )
}
