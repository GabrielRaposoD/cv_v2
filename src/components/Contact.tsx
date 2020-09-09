export function Contact() {
  return (
    <section className="container pt-16 mx-auto">
      <div className="flex flex-col items-center w-full mb-32 space-y-1">
        <p className="text-sm font-medium text-gray-500 opacity-75">
          Feel free to contact whenever you want
        </p>
        <h3 className="text-5xl font-semibold text-gray-200">Get in Touch</h3>
        <div className="border-primary-500 w-1/12 border-2 border-solid"></div>
      </div>

      <div className="justify-evenly flex flex-row w-full">
        <form action="contact" className="w-7/12">
          <h4 className="mb-6 text-xl font-semibold text-gray-200">
            Message Me
          </h4>
          <div className=" flex w-full mb-4 space-x-6">
            <input
              className="focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="Your Email"
              type="email"
            />
          </div>
          <div className="w-full mb-4">
            <input
              className="focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="The Subject"
              type="subject"
            />
          </div>
          <div className=" w-full mb-4">
            <textarea
              className="focus:outline-none focus:border-primary-500 w-full h-40 px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="">
            <button className="focus:outline-none hover:bg-indigo-600 bg-primary-500 flex px-8 py-4 text-white border-0 rounded">
              Send Message
            </button>
          </div>
        </form>
        <div className="w-4/12">
          <h4 className="mb-5 text-xl font-semibold text-gray-200">
            Contact Info
          </h4>
          <p className=" mb-5 font-medium leading-relaxed text-gray-500 opacity-75">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <div className="flex flex-row">
            <div className="text-primary-500 flex flex-col w-2/12 space-y-12 text-3xl border-r border-gray-500 border-opacity-75">
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
