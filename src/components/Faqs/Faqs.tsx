"use client";

import SectionHeading from "../SectionHeading";
import Accordion from "./Accordion";
import { FaqsList } from "./FaqsList";

const Faqs = () => {
  return (
    <section
      id="faqs"
      className="flex flex-col items-center py-[120px] bg-[#F8F9FC]"
    >
      <SectionHeading heading={"FAQs"} />
      <div>
        {FaqsList.map((faq, idx) => (
          <Accordion key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
