import { Title } from './'

export function Contact() {
  return (
    <section className="xl:px-0 container px-6 pt-16 pb-8 mx-auto">
      <Title
        title="Get in Touch"
        subtitle="Feel free to contact whenever you want"
      />

      <div className="justify-evenly md:flex-row flex flex-col w-full">
        <form className="md:w-7/12 md:mb-0 mb-12">
          <h4 className="mb-6 text-xl font-semibold text-gray-200">
            Message Me
          </h4>
          <div className=" flex w-full mb-4 space-x-6">
            <input
              aria-label="name"
              className="focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="Your Name"
              type="text"
            />
            <input
              aria-label="email"
              className="focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="Your Email"
              type="email"
            />
          </div>
          <div className="w-full mb-4">
            <input
              aria-label="subject"
              className="focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="The Subject"
              type="subject"
            />
          </div>
          <div className=" w-full mb-4">
            <textarea
              aria-label="message"
              className="focus:outline-none focus:border-primary-500 w-full h-40 px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="">
            <button className="focus:outline-none bg-primary-500 hover:bg-primary-700 flex px-8 py-4 text-white transition-all duration-500 ease-in-out border-0 rounded">
              Send Message
            </button>
          </div>
        </form>
        <div className="md:w-4/12">
          <h4 className="mb-5 text-xl font-semibold text-gray-200">
            Contact Info
          </h4>
          <p className=" mb-5 font-medium leading-relaxed text-gray-500 opacity-75">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <div className="flex flex-row">
            <div className="text-primary-500 flex flex-col w-2/12 space-y-12 text-3xl border-r-2 border-gray-500 border-opacity-25">
              <i className="fas fa-signature mt-2" />
              <i className="fas fa-location-arrow mt-2" />
              <i className="fas fa-phone mt-2" />
              <i className="fas fa-paper-plane mt-2" />
            </div>
            <div className="flex flex-col ml-8 space-y-8 text-gray-200">
              <div>
                <label className="font-semibold">Name</label>
                <p className="text-sm text-gray-500 opacity-75">
                  Gabriel Raposo
                </p>
              </div>
              <div>
                <label className="font-semibold">Location</label>
                <p className="text-sm text-gray-500 opacity-75">Brazil</p>
              </div>
              <div>
                <label className="font-semibold">Call Me</label>
                <p className="text-sm text-gray-500 opacity-75">
                  +55 (61) 98666-9392
                </p>
              </div>
              <div>
                <label className="font-semibold">Email Me</label>
                <p className="text-sm text-gray-500 opacity-75">
                  gabriel.robertor@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
