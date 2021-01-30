import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import cs from 'classnames'
import { Title } from '@components/index'
import {
  FaLocationArrow,
  FaPaperPlane,
  FaPhone,
  FaSignature,
} from 'react-icons/fa'
import { useState } from 'react'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name is too short')
    .required('This field is required.'),
  email: Yup.string().email().required('This field is required.'),
  subject: Yup.string()
    .min(5, 'Subject is too short')
    .required('This field is required.'),
  message: Yup.string()
    .min(20, 'Message is too short')
    .required('This field is required.'),
})

const Contact: React.FC = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false)

  return (
    <section className="xl:px-0 container px-6 pt-16 pb-8 mx-auto">
      <Title
        title="Get in Touch"
        subtitle="Feel free to contact whenever you want"
      />
      <div className="justify-evenly md:flex-row flex flex-col w-full">
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          onSubmit={values => {
            console.log(values.message)
            fetch('api/email', {
              body: JSON.stringify({
                from: values.email,
                subject: `${values.name} | ${values.subject}`,
                message: values.message,
              }),
              method: 'POST',
              headers: { 'Content-type': 'application/json' },
            })
            setEmailSent(true)
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="md:w-7/12 md:mb-0 mb-12">
              <h4 className="mb-6 text-xl font-semibold text-gray-200">
                Message Me
              </h4>
              <div className=" flex w-full mb-4 space-x-6">
                <Field
                  aria-label="name"
                  id="name"
                  name="name"
                  className={cs(
                    'focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm',
                    {
                      'border-red-500': errors.name && touched.name,
                    }
                  )}
                  placeholder="Your Name"
                  type="text"
                />
                <Field
                  aria-label="email"
                  id="email"
                  name="email"
                  className={cs(
                    'focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm',
                    {
                      'border-red-500': errors.email && touched.email,
                    }
                  )}
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="w-full mb-4">
                <Field
                  aria-label="subject"
                  id="subject"
                  name="subject"
                  className={cs(
                    'focus:outline-none focus:border-primary-500 w-full px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm',
                    {
                      'border-red-500': errors.subject && touched.subject,
                    }
                  )}
                  placeholder="The Subject"
                  type="subject"
                />
              </div>
              <div className=" w-full mb-4">
                <Field
                  component="textarea"
                  id="message"
                  name="message"
                  aria-label="message"
                  className={cs(
                    'focus:outline-none focus:border-primary-500 w-full h-40 px-4 py-4 text-base text-gray-500 transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-25 border-b-2 border-transparent border-solid rounded-sm',
                    {
                      'border-red-500': errors.message && touched.message,
                    }
                  )}
                  placeholder="Your Message"
                  error={errors.message}
                />
              </div>

              <button
                className="focus:outline-none bg-primary-500 hover:bg-primary-700 flex px-8 py-4 text-white transition-all duration-500 ease-in-out border-0 rounded"
                type="submit"
                disabled={emailSent}
              >
                Send Message
              </button>

              {emailSent && (
                <p className="text-primary-500 mt-5 text-lg font-bold">
                  E-mail sent with success!
                </p>
              )}
            </Form>
          )}
        </Formik>
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
              <FaSignature className="mt-2" />
              <FaLocationArrow className="mt-2" />
              <FaPhone className="mt-2" />
              <FaPaperPlane className=" mt-2" />
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

export default Contact
