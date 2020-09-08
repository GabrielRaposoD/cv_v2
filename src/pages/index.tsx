import { Hero, Header } from '../components'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>GuiaLongevidade</title>
      </Head>
      <div>
        <div className="bg-color min-h-screen">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  )
}
