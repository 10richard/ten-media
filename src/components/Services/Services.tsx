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
      <div className="flex justify-center flex-wrap gap-8 max-w-[1280px] px-10">
        <ServicesContainer
          service={"Design"}
          text={
            <p>
              We prioritize both{" "}
              <strong className="text-blue-400">simplicity</strong> and{" "}
              <strong className="text-blue-400">functionality</strong> to
              guarantee a website design that not only captivates but converts.
            </p>
          }
          img={designIcon.src}
          altText={"TenMedia Website Design icon"}
        />
        <ServicesContainer
          service={"Development"}
          text={
            <p>
              Each website is crafted with{" "}
              <strong className="text-blue-400">responsiveness</strong> and{" "}
              <strong className="text-blue-400">SEO</strong> in mind, ensuring
              your content thrives seamlessly online.
            </p>
          }
          img={developmentIcon.src}
          altText={"TenMedia Website Development icon"}
        />
        <ServicesContainer
          service={"Maintenance"}
          text={
            <p>
              <strong className="text-blue-400">Swift</strong> content updates,{" "}
              <strong className="text-blue-400">seamless</strong> hosting, and{" "}
              <strong className="text-blue-400">proactive</strong> security
              measures keep your website dynamic, optimized, and secure.
            </p>
          }
          img={maintenanceIcon.src}
          altText={"TenMedia Website Maintenance icon"}
        />
      </div>
    </section>
  );
};

export default Services;
