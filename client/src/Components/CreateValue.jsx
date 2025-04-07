import React, { useState } from "react";
import company from "../../Images/company.jpg";

const CreateValue = () => {
  const [activeWord, setActiveWord] = useState("Workplace");

  const content = {
    Workplace: {
      image: company,
      paragraphs: [
        "We are only as strong as our people, which is why we continue to invest in them through bespoke personal development plans, ensuring they maximise their potential at DTRE.",
        "We recognise that our industry is not as diverse as it can be, and we are committed to taking the necessary steps to ensure our recruitment provides equal opportunities for all.",
        "We regularly review our internal communications procedures to ensure a transparent and ethical environment is upheld.",
        "Our governance is watertight. We ensure thorough training for every employee on the business’ risk and compliance strategy.",
      ],
    },
    World: {
      image: company,
      paragraphs: [
        "At DTRE, we regularly review our activities and processes to ensure where possible we are minimising our environmental impact.",
        "We are a Planet Mark Certified business and actively manage our office procedures, focusing on waste reduction and energy conservation.",
        "Both the physical and mental health of our employees is paramount – if our staff aren’t happy, our clients won’t be either.",
        "We are committed to a supportive and healthy work environment that promotes the well-being of our employees.",
      ],
    },
    Warfare: {
      image: company,
      paragraphs: [
        "This is the first paragraph for Warfare.",
        "This is the second paragraph for Warfare.",
        "This is the third paragraph for Warfare.",
        "This is the fourth paragraph for Warfare.",
      ],
    },
  };

  return (
    <section className="flex flex-col gap-4 md:gap-14 px-4 md:px-10 py-6 md:pt-16 items-center ">
        <div className="relative flex flex-col gap-4 md:gap-6 items-center justify-center w-full md:w-[650px]">
            <div className="w-[100px] opacity-100 flex flex-row bg-gray-300">
                <span>
                    <div className="w-2 h-2 mt-2 mx-2 bg-[#248232]"></div>
                </span>
                ESG
            </div>
            <div>
                <h1 className="text-[#071a0a] text-3xl md:text-5xl">
                    <span className="text-[#248232] ">Creating value</span> for our
                    clients, employees, and communities
                </h1>
            </div>
            <div className="space-y-6 ">
                <p className="text-center justify-center">
                    We firmly believe DTRE has the ability to play a leading role in
                    fostering a <br /> 
                    more inclusive industry and building a more sustainable
                    future for all.
                </p>
                <p className="text-center justify-center">
                    It’s a long journey, but we are uniquely placed to effect change
                    rapidly and <br />
                    are determined to make the right steps.
                </p>
            </div>
      </div>
      <div className="flex flex-col w-full p-4">
        {/* Words */}
        <div className="flex justify-between w-full border-b md:border-b-0 md:border-r border-gray-200">
          {Object.keys(content).map((word) => (
            <div
              key={word}
              className={`w-1/3 text-center py-2 cursor-pointer ${
                activeWord === word ? "text-green-500 font-bold" : "text-gray-500"
              }`}
              onClick={() => setActiveWord(word)}
            >
              {word}
              {activeWord === word && (
                <div className="w-full h-1 bg-green-500 mt-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* Active Word Content */}
        <div className="flex flex-col md:flex-row items-start mt-4 md:mt-0 md:ml-4">
          <img
            src={content[activeWord].image}
            alt={activeWord}
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-4 mt-4 md:mt-0 md:ml-4">
            <h1 className="text-xl font-bold text-[#071a0a]">{activeWord}</h1>
            {content[activeWord].paragraphs.map((text, index) => (
              <p key={index} className="text-gray-700 text-base">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateValue;
