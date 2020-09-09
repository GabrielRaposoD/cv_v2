import { Title, ServiceItem } from './'

export function Services() {
  return (
    <section className="xl:px-0 container px-6 pt-16 pb-8 mx-auto">
      <Title title="My Services" subtitle="Need help?" />

      <div className="xl:grid-cols-3 md:grid-cols-2 grid grid-flow-row grid-cols-1 gap-10">
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
