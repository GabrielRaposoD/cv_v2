export function Hero() {
  return (
    <section className=" relative flex min-h-screen">
      <div className="flex flex-col items-end justify-center w-full px-20">
        <div className="md:mr-0 -mr-4 space-y-12">
          <h1 className=" text-6xl font-bold leading-tight text-left text-white">
            PROGRESS SHOULD <br />{' '}
            <span className="text-primary-500">NEVER </span>
            BE KEPT <br /> WAITING
          </h1>

          <p className="border-primary-700 pl-4 text-lg font-semibold leading-loose text-gray-200 border-l-4 border-solid">
            I'm <span className="text-primary-500">Gabriel Raposo, </span>a
            Fullstack Developer and Freelancer. <br /> Let's work together!
          </p>
          <div className="flex flex-row space-x-10 text-3xl text-gray-200">
            <a
              href="https://github.com/GabrielRaposoD"
              className="hover:text-primary-500 transition-all duration-500 ease-in-out"
            >
              <i className="fab fa-github-alt"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielrraposo/"
              className="hover:text-primary-500 transition-all duration-500 ease-in-out"
            >
              <i className="fab fa-linkedin-in "></i>
            </a>
            <a
              href="instagram.com/gabrielrraposo"
              className="hover:text-primary-500 transition-all duration-500 ease-in-out"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <img
        src="/images/fox-bg.png"
        alt=""
        className="absolute bottom-0 left-0 opacity-25"
      />
    </section>
  )
}
