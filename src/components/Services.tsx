import { Title, ServiceItem } from './'

export function Services() {
  return (
    <section className="xl:px-0 container px-6 pt-16 pb-8 mx-auto">
      <Title title="My Services" subtitle="Need help?" />

      <div className="xl:grid-cols-3 md:grid-cols-2 grid grid-flow-row grid-cols-1 gap-10">
        <ServiceItem
          img="/images/programming-browser-1.png"
          text="Using the best tecnology saves you the budget for spending with meaninfull things. How can we use our best tecnology to help you?"
          title="React and Tailwind"
        />
        <ServiceItem
          img="/images/browser-page-account.png"
          text="Creating your website is more than a service, it's a pleasure. What unique experience can I develope for you today?"
          title="Web Design"
        />
        <ServiceItem
          img="/images/programming-laptop-type.png"
          text="Knowing your client is the most powerfull weapon you have in market today. How can we start improving your clients UX?"
          title="User Experience"
        />
        <ServiceItem
          img="/images/network-upload.png"
          text="When your business starts to fly, it will certanly reach the Clouds. How can I help bringing your product to the clouds now?"
          title="Cloud Computing"
        />
        <ServiceItem
          img="/images/responsive-design-hand.png"
          text="Smartphones are everywhere in our life and may be the first contact with your brand! Is your website ready for this new step?"
          title="Mobile Responsive"
        />
        <ServiceItem
          img="/images/multiple-circle.png"
          text="Great customer support drives an amazing customer experience, especially when we move towards anticipating customers' problems"
          title="Customer Support"
        />
      </div>
    </section>
  )
}
