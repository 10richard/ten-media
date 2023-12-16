import SectionHeading from "../SectionHeading";
import ServicesContainer from "./ServicesContainer";
import developmentIcon from "../../assets/development-icon.svg";
import designIcon from "../../assets/design-icon.svg";
import maintenanceIcon from "../../assets/maintenance-icon.svg";

const Services = () => {
  // Add later? - SEO, Social Media Integration, **CRO**
  return (
    <section id="services" className="flex flex-col items-center py-[120px]">
      <SectionHeading heading={"Our Services"} subheading={"What we do."} />
      <div className="flex justify-center gap-8 max-w-[1280px]">
        <ServicesContainer
          service={"Design"}
          text={
            "We prioritize both simplicity and functionality to guarantee a website design that not only captivates but converts."
          }
          img={designIcon.src}
          altText={"TenMedia Website Design icon"}
        />
        <ServicesContainer
          service={"Development"}
          text={
            "Each website is crafted with responsiveness and SEO in mind, ensuring your content thrives seamlessly online."
          }
          img={developmentIcon.src}
          altText={"TenMedia Website Development icon"}
        />
        <ServicesContainer
          service={"Maintenance"}
          text={
            "Swift content updates, seamless hosting, and proactive security measures keep your website dynamic, optimized, and secure."
          }
          img={maintenanceIcon.src}
          altText={"TenMedia Website Maintenance icon"}
        />
      </div>
    </section>
  );
};

export default Services;
