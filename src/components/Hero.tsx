export function Hero() {
  return (
    <section className="relative flex min-h-screen">
      <div className="flex flex-col items-end justify-center w-full px-20 space-y-12">
        <h1 className="text-6xl font-bold leading-tight text-left text-white">
          PROGRESS SHOULD <br />{' '}
          <span className="text-primary-500">NEVER </span>
          BE KEPT <br /> WAITING
        </h1>
        <div className="border-primary-700 border-l-4 border-solid">oi</div>
        <div className="flex flex-row space-x-10 text-3xl text-white">
          <i className="fab fa-github-alt"></i>
          <i className="fab fa-linkedin-in "></i>
          <i className="fab fa-instagram"></i>
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
