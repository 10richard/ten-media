import React from "react";

interface ServicesContainerProps {
  service: string;
  text: React.ReactNode;
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
    <div
      className="flex flex-col flex-wrap gap-5 w-[30%] min-w-[325px] bg-[#F6F6F6] px-8 pt-14 pb-32 
    rounded-2xl relative hover:-translate-y-2 hover:scale-105 hover:shadow-xl border-2 border-transparent 
    hover:border-primary group duration-500"
    >
      <img src={img} alt={altText} className="w-[60px]" />
      <h2 className="text-2xl">{service}</h2>
      <div className="text-gray-400">{text}</div>
    </div>
  );
};

export default ServicesContainer;
