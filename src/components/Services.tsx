import { Title, ServiceItem } from './'

export function Services() {
  return (
    <section className="container pt-16 pb-8 mx-auto">
      <Title title="My Services" subtitle="Need help?" />

      <div className="grid grid-flow-row grid-cols-3 gap-10">
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </section>
  )
}
