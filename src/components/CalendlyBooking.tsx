// Install react-calendly to integrate widget

import SectionHeading from "./SectionHeading";

const CalendlyBooking = () => {
  return (
    <section className="flex flex-col items-center py-[120px]">
      <SectionHeading
        heading={"Book a Call"}
        subheading={"Lets chat about your project"}
      />
    </section>
  );
};

export default CalendlyBooking;
