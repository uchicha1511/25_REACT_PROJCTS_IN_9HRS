import React, { useState } from "react";

const Accordian = () => {
  const data = [
    {
      id: "1",
      question: "What are accordion components?",
      answer:
        "Accordion components are UI elements that allow users to expand and collapse sections of content to save space and improve readability.",
    },
    {
      id: "2",
      question: "What are they used for?",
      answer:
        "They are commonly used in FAQs, product descriptions, settings panels, and dashboards to organize content efficiently.",
    },
    {
      id: "3",
      question: "How does an accordion work?",
      answer:
        "An accordion works by toggling visibility of content when a user clicks on a header. Only one or multiple sections can stay open depending on implementation.",
    },
    {
      id: "4",
      question: "What are the benefits of using an accordion?",
      answer:
        "Accordions improve user experience by reducing scrolling, organizing information clearly, and keeping interfaces clean.",
    },
    {
      id: "5",
      question: "Can multiple accordion items be open at once?",
      answer:
        "Yes, depending on the configuration. Some accordions allow only one open section at a time, while others support multiple open sections.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const [multipleSelection, setMultipleSlection] = useState(false);
  const [multiId, setMultiId] = useState([]);

  const handleSingleSelection = (id) => {
    //   console.log(id);
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    let copy = [...multiId];
    const findIndexOfCurrentId = copy.indexOf(id);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copy.push(id);
    else copy.splice(findIndexOfCurrentId, 1);

    setMultiId(copy);
  };

  return (
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex justify-between px-3 items-center w-5/12">
        <h1>ACCORDIAN</h1>
        <button
          onClick={() => setMultipleSlection(!multipleSelection)}
          className={`p-2 rounded-full  ${multipleSelection?"bg-green-300 ":"bg-red-300 "} cursor-pointer`}
        >
          {
            multipleSelection?"MultipleSelection":"SingleSelection"
          }
        </button>
      </div>

      <div className=" p-10  border w-5/12 bg-amber-900 text-white ">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              return multipleSelection
                ? handleMultipleSelection(item.id)
                : handleSingleSelection(item.id);
            }}
            className="flex flex-col border items-center p-4 w-full cursor-pointer"
          >
            <div className="flex flex-col items-center cursor-pointer w-full">
              <div className="flex justify-between px-5 w-full">
                <h1 className="text-xl font-medium">{item.question}</h1>
                <span>+</span>
              </div>
              <div>
                {/* {selected === item.id ? (
                  <div className="transition-all ease-in-out duration-700">
                    {item.answer}
                  </div>
                ) : null} */}

                {multipleSelection
                  ? multiId.includes(item.id) && <div>{item.answer}</div>
                  : selected === item.id && <div>{item.answer}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
