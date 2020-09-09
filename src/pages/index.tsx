import { Hero, Header, Contact, About, Services } from '../components'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Gabriel Raposo</title>
      </Head>
      <div>
        <div className="bg-color min-h-screen">
          {/* <Header />
          <Hero />
          <Contact /> */}
          {/* <About /> */}
          <Services />
        </div>
      </div>
    </>
  )
}
