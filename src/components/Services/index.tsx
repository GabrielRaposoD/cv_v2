import { Title, ServiceItem } from '@components/index'

const Services: React.FC = () => {
  return (
    <section className="xl:px-0 container px-6 pt-16 pb-8 mx-auto">
      <Title title="My Services" subtitle="Need help?" />

      <div className="xl:grid-cols-3 md:grid-cols-2 grid grid-flow-row grid-cols-1 gap-8">
        <ServiceItem
          img={require('@assets/programming-browser-1.png')}
          text="Using the best tecnology saves you the budget for spending with meaninfull things. How can we use our best tecnology to help you?"
          title="React and Tailwind"
        />
        <ServiceItem
          img={require('@assets/browser-page-account.png')}
          text="Creating your website is more than a service, it's a pleasure. What unique experience can I develop for you today?"
          title="Web Design"
        />
        <ServiceItem
          img={require('@assets/programming-laptop-type.png')}
          text="We believe that knowing your client creates a powerful synergy for your project. We are detail oriented. How can we start improving your clients UX?"
          title="User Experience"
        />
        <ServiceItem
          img={require('@assets/network-upload.png')}
          text="When your business starts to fly, it will certanly reach the Clouds. How can I help bringing your product to the clouds now?"
          title="Cloud Computing"
        />
        <ServiceItem
          img={require('@assets/responsive-design-hand.png')}
          text="Smartphones are everywhere in our life and may be the first contact with your brand! Is your website ready for this new step?"
          title="Mobile Responsive"
        />
        <ServiceItem
          img={require('@assets/multiple-circle.png')}
          text="Great customer support drives an amazing customer experience, especially when we move towards anticipating customers' problems"
          title="Customer Support"
        />
      </div>
    </section>
  )
}

export default Services
