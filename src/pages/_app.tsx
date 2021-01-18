import '../styles/main.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import GoogleFonts from 'next-google-fonts'
import { PageProvider } from '@context/pageContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <DefaultSeo
        titleTemplate="Gabriel Raposo"
        title="Gabriel Raposo"
        description="Let's work together!"
        openGraph={{
          url: 'https://gabrielraposo.com.br/',
          title: 'Gabriel Raposo',
          description:
            'I am a freelancer based in Brazil and I have been working as a developer for a year. I diligently keep track of the latest techs trends, so I can help convert your vision or idea into a meaningful and useful product.',
          site_name: 'Gabriel Raposo',
          images: [
            {
              url:
                'https://gabrielraposo.com.br/_next/static/images/site1-1224-c65515e476ec34b0943e9a54b73189ef.png',
            },
          ],
        }}
      />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      <AnimatePresence>
        <PageProvider>
          <Component {...pageProps} key={router.route} />
        </PageProvider>
      </AnimatePresence>
    </>
  )
}

export default MyApp
