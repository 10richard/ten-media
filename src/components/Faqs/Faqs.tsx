"use client";

import SectionHeading from "../SectionHeading";
import Accordion from "./Accordion";
import { FaqsList } from "./FaqsList";

const Faqs = () => {
  return (
    <section
      id="faqs"
      className="grid justify-center py-[120px] px-10 bg-[#F8F9FC]"
    >
      <SectionHeading heading={"FAQs"} />
      <div className="max-w-[700px] self-center">
        {FaqsList.map((faq, idx) => (
          <Accordion key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
