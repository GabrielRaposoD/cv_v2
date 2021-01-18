import {
  Hero,
  Header,
  HomeTransition,
  About,
  Contact,
  ExternalTransition,
  Portfolio,
  Services,
  BackButton,
} from '@components/index'
import { usePage } from '@context/pageContext'

export default function Index() {
  const { page } = usePage()

  return (
    <>
      {page !== 'Hero' && <BackButton />}
      {page === 'Hero' && (
        <HomeTransition>
          <Header />
          <Hero />
        </HomeTransition>
      )}
      {page === 'Contact' && (
        <ExternalTransition>
          <Contact />
        </ExternalTransition>
      )}
      {page === 'About' && (
        <ExternalTransition>
          <About />
        </ExternalTransition>
      )}
      {page === 'Portfolio' && (
        <ExternalTransition>
          <Portfolio />
        </ExternalTransition>
      )}
      {page === 'Services' && (
        <ExternalTransition>
          <Services />
        </ExternalTransition>
      )}
    </>
  )
}
