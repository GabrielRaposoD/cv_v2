import { Hero, Header, Contact } from '../components'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Gabriel Raposo</title>
      </Head>
      <div>
        <div className="bg-color min-h-screen">
          <Contact />
          {/* <Header />
          <Hero /> */}
        </div>
      </div>
    </>
  )
}
