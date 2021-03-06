import { Title, PortfolioItem } from '@components/index'
import Slider from 'react-slick'

const Portfolio: React.FC<any> = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <section className="xl:px-0 md:pb-0 container relative min-h-screen px-6 pt-16 pb-8 mx-auto">
      <Title title="Portfolio" subtitle="See some of my work" />

      <Slider {...settings}>
        <PortfolioItem
          title="Quartoo"
          uri="https://www.quartoo.com/"
          desc="Quartoo is a room renting service avaliable in Brazil"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('@assets/site5-mobile.png?resize&size=300')}
          desksrc={require('@assets/site5.png?resize&size=1600')}
        />
        <PortfolioItem
          title="This Site"
          uri="https://gabrielraposo.com.br"
          desc="This is my portfolio made with next.js, framer motion and tailwind"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('@assets/site1-mobile.png?resize&size=300')}
          desksrc={require('@assets/site1.png?resize&size=1600')}
        />
        <PortfolioItem
          title="ExSign"
          uri="https://exsign.studio/"
          desc="A Web Designers team focused in bringing a unique experience"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('@assets/site6-mobile.png?resize&size=300')}
          desksrc={require('@assets/site6.png?resize&size=1600')}
        />
        <PortfolioItem
          title="MG LUBE"
          uri="#"
          desc="A prototype site for the MGLUBE group"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('@assets/site3-mobile.png?resize&size=300')}
          desksrc={require('@assets/site3.png?resize&size=1600')}
        />
        <PortfolioItem
          title="AKIO"
          uri="https://akio.gabrielraposo.com.br/"
          desc="A restaurant mockup home page made with Next.js"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('@assets/site2-mobile.png?resize&size=300')}
          desksrc={require('@assets/site2.png?resize&size=1600')}
        />
        <PortfolioItem
          title="Impulso Bayer"
          uri="https://bayer.chiligum.com.br/index.html"
          desc="A SPA made with Next.js for Bayer 
          publicity"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2021"
          mobsrc={require('@assets/site7-mobile.png?resize&size=300')}
          desksrc={require('@assets/site7.png?resize&size=1600')}
        />
        <PortfolioItem
          title="Shortener"
          uri="https://shortener.gabrielraposo.com.br/"
          desc="A simples url shortener project made with Nest & Next"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2021"
          mobsrc={require('@assets/site8-mobile.png?resize&size=300')}
          desksrc={require('@assets/site8.png?resize&size=1600')}
        />
      </Slider>
    </section>
  )
}

export default Portfolio
