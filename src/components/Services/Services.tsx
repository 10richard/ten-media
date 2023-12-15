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
            "Our expert team combines creativity and functionality to craft visually stunning and user-friendly websites that engages and converts visitors. From concept to launch, we tailor each design to reflect your unique identity."
          }
          img={designIcon.src}
          altText={"TenMedia Website Design icon"}
        />
        <ServicesContainer
          service={"Development"}
          text={
            "We pride ourselves on a commitment to craftsmanship, and that means steering clear of generic website builders. Every website we create is meticulously crafted with a responsive design, ensuring your content thrives on every screen size."
          }
          img={developmentIcon.src}
          altText={"TenMedia Website Development icon"}
        />
        <ServicesContainer
          service={"Maintenance"}
          text={
            "Swift content updates, seamless hosting, and proactive security measures ensure your website stays dynamic, performs optimally, and remains secure. Focus on your business; we've got the technicalities covered."
          }
          img={maintenanceIcon.src}
          altText={"TenMedia Website Maintenance icon"}
        />
      </div>
    </section>
  );
};

export default Services;
