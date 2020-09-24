import '../styles/main.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PageProvider } from '../context/pageContext'
import { DefaultSeo } from 'next-seo'
import GoogleFonts from 'next-google-fonts'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="Gabriel Raposo"
        title="Gabriel Raposo"
        description="Let's work together!"
        openGraph={{
          url: 'gabrielraposo.com.br',
          title: 'Gabriel Raposo',
          description: 'Gabriel Raposo Portfolio',
          site_name: 'Gabriel Raposo',
        }}
      />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
    </>
  )
}
