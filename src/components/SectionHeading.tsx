interface SectionHeadingProps {
  heading: string;
  subheading?: string;
}

const SectionHeading = ({ heading, subheading }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-[50px]">
      <h2 className="text-6xl font-bold">{heading}</h2>
      <p className="text-gray-400">{subheading}</p>
    </div>
  );
};

export default SectionHeading;
