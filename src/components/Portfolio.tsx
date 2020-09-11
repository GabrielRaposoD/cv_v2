import { Title, PortfolioItem } from './'
import Slider from 'react-slick'

export function Portfolio() {
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
    <section className="xl:px-0 container px-6 pt-16 pb-8 mx-auto">
      <Title title="Portfolio" subtitle="See some of my work" />

      <Slider {...settings}>
        <PortfolioItem
          title="This Site"
          desc="My personal site"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('../assets/site1-mobile.png')}
          desksrc={require('../assets/site1.png?resize&size=1224')}
        />
        <PortfolioItem
          title="Pokedex"
          desc="A simple pokedex"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('../assets/site2-mobile.png')}
          desksrc={require('../assets/site2.png?resize&size=1224')}
        />
        <PortfolioItem
          title="MG LUBE"
          desc="A prototype site for the MGLUBE group"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('../assets/site3-mobile.png')}
          desksrc={require('../assets/site3.png?resize&size=1224')}
        />
        <PortfolioItem
          title="My Old Portfolio"
          desc="My old personal site"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc={require('../assets/site4-mobile.png')}
          desksrc={require('../assets/site4.png?resize&size=1224')}
        />
      </Slider>
    </section>
  )
}
