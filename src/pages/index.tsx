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
import { NextSeo } from 'next-seo'

export default function Index() {
  const { page, setPage } = usePage()

  return (
    <>
      <div className="relative max-w-full overflow-hidden">
        <div
          className={cs(
            'transition-screen fixed  z-50 w-full h-screen overflow-hidden bg-black',
            {
              active: !(page === 'hero'),
            }
          )}
        ></div>

        <div
          className={cs(
            'absolute text-white text-4xl pr-10 pt-10 right-0 z-40',
            {
              'page-closed': page === 'hero',
              'page-opened': page !== 'hero',
            }
          )}
        >
          <i
            onClick={() => setPage('hero')}
            className="fa fa-times page relative z-40 cursor-pointer"
          />
        </div>

        <div className="bg-color min-h-screen">
          <div
            className={cs({
              'page-opened': page === 'hero',
              'page-closed': page !== 'hero',
            })}
          >
            <Header />
            <Hero />
          </div>
          <div
            className={cs({
              'page-opened': page === 'contact',
              'page-closed': page !== 'contact',
            })}
          >
            <Contact />
          </div>
          <div
            className={cs({
              'page-opened': page === 'about',
              'page-closed': page !== 'about',
            })}
          >
            <About />
          </div>
          <div
            className={cs({
              'page-opened': page === 'services',
              'page-closed': page !== 'services',
            })}
          >
            <Services />
          </div>
          <div
            className={cs({
              'page-opened': page === 'portfolio',
              'page-closed': page !== 'portfolio',
            })}
          >
            <Portfolio />
          </div>
        </div>
      </div>
    </>
  )
}
