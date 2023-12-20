import MainButton from "./MainButton";
import heroBg from "../assets/tenmedia-hero-image.jpeg";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen relative max-[1070px]:text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 15, 0.9),rgba(0, 0, 15, 0.55)), url(${heroBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-white flex flex-col min-[1070px]:max-w-[950px] w-[85%] min-[1070px]:absolute left-[15%] top-[30%]">
        <div className="flex flex-col max-[1070px]:items-center gap-7 mb-14">
          <h1 className="min-[1070px]:text-7xl min-[940px]:text-6xl text-4xl font-extrabold leading-tight max-[1070px]:max-w-[600px]">
            Crafting Powerful Online Presences for{" "}
            <strong className="text-primary">Roofers</strong>
          </h1>
          <p className="text-gray-300 min-[1070px]:text-2xl font-light max-[1070px]:max-w-[450px] max-w-[600px]">
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
