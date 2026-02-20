import React,{ useState } from "react";

const Practice_1 = () => {
 
    const data = [
    {
      id: "1",
      question: "What are accordion components?",
    //   answer:
        // "Accordion components are UI elements that allow users to expand and collapse sections of content to save space and improve readability.",
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
  

//   const [selected, setSelected] = useState(null);
//   const handleSingleSelection = (id) => {
//     setSelected(selected?null:id);
//   };
  
  const [isMultiSelectionEnable, setIsMultiSelectionEnable] = useState(false);
  const [multiID, setMultiID] = useState([]);

   const handleSelection=(id)=>{
    if(isMultiSelectionEnable)
    {
        multiID.includes(id)
        ?setMultiID(multiID.filter(item=>item!==id))
        :setMultiID([...multiID,id]);
    }
    else{
        setMultiID(multiID.includes(id)?[]:[id]);
    }
       

   }



  return (
    <div className="w-full min-h-screen bg-gray-300 flex flex-col gap-8 justify-center items-center p-10">
           <button
          onClick={() => setIsMultiSelectionEnable(!isMultiSelectionEnable)}
          className={`p-2 rounded-md  ${isMultiSelectionEnable?"bg-green-300 ":"bg-red-300 "} cursor-pointer`}
        >
          {
            isMultiSelectionEnable?"MultipleSelection":"SingleSelection"
          }
        </button>
      <div className="w-5/12 h-fit bg-green-300 flex flex-col ">
        {data.map((item) => (
          <div className="w-full border">
            <div
              onClick={()=>handleSelection(item.id)}
              className="flex flex-col p-5 justify-between w-full items-center cursor-pointer"
            >
              <div className="flex justify-between w-full items-center">
                <p>{item.question}</p>
                <span>+</span>
              </div>
              <div>
                {multiID.includes(item.id) && <p>{item.answer || "No answer provided yet"}</p> }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice_1;
