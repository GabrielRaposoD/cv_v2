import { Title, PortfolioItem } from './'
import Slider from 'react-slick'

export function Portfolio() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          mobsrc="/images/site1-mobile.png"
          desksrc="/images/site1.png"
        />
        <PortfolioItem
          title="This Site"
          desc="My personal site"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc="/images/site2-mobile.png"
          desksrc="/images/site2.png"
        />
        <PortfolioItem
          title="This Site"
          desc="My personal site"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc="/images/site3-mobile.png"
          desksrc="/images/site3.png"
        />
        <PortfolioItem
          title="This Site"
          desc="My personal site"
          languages="Html / CSS / JS"
          framework="TailwindCSS"
          date="2020"
          mobsrc="/images/site4-mobile.png"
          desksrc="/images/site4.png"
        />
      </Slider>
    </section>
  )
}
