import ServiceHeader from './ServiceHeader/ServiceHeader';
import Service from './ServiceWebDev/ServiceWebDev';

const ServiceContent = () => {
  const services = [
    {
      color: "black",
      title: "Web Development",
      paragraph: "FadoniTech delivers high performing web applications designed to work across all major platforms. We offer our expertise for businesses that are willing to deliver services faster, improve sales numbers, increase customer engagement and loyalty.",
      webTags: [
        "Websites, Web Apps & Portals",
        "Single Page Apps",
        "Landing Pages",
        "E-Commerce",
        "CMS Development",
        "Booking Systems",
      ]
    },
    {
      color: "grey",
      title: "Mobile Development",
      paragraph: "FadoniTech team creates outstanding mobile applications designed to drive more attention to your brand. We offer our expertise for businesses that are willing to scale fast and maintain high quality. With Android, iOS, and PWA services we ensure our clients to reach customers in any mobile device.",
      webTags: [
        "Mobile Games",
        "Single Page Apps",
        "Landing Pages",
        "E-Commerce",
        "Food Delivery Apps",
        "Booking Systems",
      ]
    },
    {
      color: "white",
      title: "API Development",
      paragraph: "FadoniTech have a team of API specialists who provide API development and integration services, using Javascript and Python. We create powerful, secure, and maintainable APIs. Our API wizards have technical expertise in working with the most popular APIs like Shopify API, Social Media API, and Google API.",
      webTags: [
        "API Integration",
        "Custom API Integration",
        "Public APIs"
      ]
    }
  ];

  return (
    <div className="service-page">
      <ServiceHeader />
      <Service service={services[0]} />
      <Service service={services[1]} />
      <Service service={services[2]} />
    </div>
  )
}

export default ServiceContent;