interface ServicesContainerProps {
  service: string;
  text: string;
  img: string;
  altText: string;
}

const ServicesContainer = ({
  service,
  text,
  img,
  altText,
}: ServicesContainerProps) => {
  return (
    <div className="flex flex-col flex-wrap gap-5 w-1/3 min-w-[300px] bg-[#F6F6F6] px-9 pt-14 pb-32 rounded-2xl relative hover:-translate-y-2 hover:scale-105 hover:shadow-xl duration-500">
      <img src={img} alt={altText} className="w-[60px]" />
      <h2 className="text-2xl">{service}</h2>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default ServicesContainer;
