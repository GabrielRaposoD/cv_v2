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
    <section className="xl:px-0 container px-6 pt-16 mx-auto">
      <Title title="Portfolio" subtitle="See some of my work" />
      <Slider {...settings}>
        <PortfolioItem />
      </Slider>
    </section>
  )
}
