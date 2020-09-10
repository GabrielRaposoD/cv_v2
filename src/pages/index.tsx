import {
  Hero,
  Header,
  Contact,
  About,
  Services,
  Portfolio,
} from '../components'
import Head from 'next/head'
import { usePage } from '../context/pageContext'
import cs from 'classnames'

export default function Index() {
  const { page, setPage } = usePage()

  return (
    <>
      <Head>
        <title>Gabriel Raposo</title>
      </Head>
      <div className="relative max-w-full overflow-hidden">
        <div
          className={cs(
            'transition-screen absolute z-50 w-full h-screen overflow-hidden bg-black',
            {
              active: !(page === 'hero'),
            }
          )}
        ></div>

        <div
          className={cs('absolute text-white text-4xl pr-10 pt-10 right-0', {
            hidden: page === 'hero',
          })}
        >
          <i
            onClick={() => setPage('hero')}
            className="fa fa-times relative z-40 transition-all duration-1000 ease-in-out cursor-pointer"
          />
        </div>

        <div className="bg-color min-h-screen">
          <Header />
          <Hero />
          {/* <Contact /> */}
          {/* <About /> */}
          {/* <Services /> */}
          {/* <Portfolio /> */}
        </div>
      </div>
    </>
  )
}
