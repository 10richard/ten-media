import MainButton from "./MainButton";
import heroBg from "../assets/tenmedia-hero-image.jpeg";

const Hero = () => {
  return (
    <section
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 15, 0.9),rgba(0, 0, 15, 0.55)), url(${heroBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-white flex flex-col max-w-[950px] absolute left-[15%] top-[30%]">
        <div className="flex flex-col gap-7 mb-14">
          <h1 className="text-7xl font-extrabold leading-tight">
            Crafting Powerful Online Presences for{" "}
            <strong className="text-primary">Roofers</strong>
          </h1>
          <p className="text-gray-300 text-2xl font-light max-w-[625px]">
            We specialize in implementing impactful website designs,{" "}
            <strong className="text-primary">
              driving more organic traffic
            </strong>{" "}
            to your roofing business.
          </p>
        </div>
        <MainButton text={"Book a Consultation Call"} />
      </div>
    </section>
  );
};

export default Hero;
