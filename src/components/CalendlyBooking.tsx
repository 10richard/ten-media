"use client";
import { InlineWidget } from "react-calendly";
import SectionHeading from "./SectionHeading";

const CalendlyBooking = () => {
  return (
    <section className="flex flex-col items-center py-[120px]">
      <SectionHeading
        heading={"Book a Call"}
        subheading={"Let's chat about your project"}
      />
      <InlineWidget
        styles={{ height: "750px", width: "100%", marginTop: "-50px" }}
        url="https://calendly.com/tenmedia-co/30min?month=2023-12"
      />
    </section>
  );
};

export default CalendlyBooking;
