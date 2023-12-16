"use client";

import { useState } from "react";
import chevron from "../../assets/chevron-down.svg";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="grid gap-2 w-[700px]">
      <button
        type="button"
        className="flex justify-between items-center"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <div className="grid text-left gap-3 mt-2">
          <p className="font-bold text-lg">{question}</p>
          <p className={`${toggle ? "" : "hidden"} mr-[135px]`}>{answer}</p>
        </div>

        <img
          className={`w-[35px] ${
            toggle ? "rotate-180" : null
          } duration-500 self-start`}
          src={chevron.src}
          alt="Chevron down"
        />
      </button>
      <span className="bg-black h-[1px] my-4"></span>
    </div>
  );
};

export default Accordion;
