import React, { useState } from 'react'

const Practice_2 = () => {
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


  const [value, setValue] = useState(null)

  const handleChange=(id)=>{
    setValue(prev=>prev===id?null:id);
  }
  return (
    <div className='p-10 flex flex-col justify-center items-center w-full h-screen bg-amber-100'>
       {data.map((elem)=>(
         <div onClick={()=>(handleChange(elem.id))} key={elem.id} className='w-1/2 bg-green-300 border p-5 cursor-pointer'>
             <div className='flex w-full px-10 justify-between'>
                <div>
                    {elem.question}
                </div>
                <div>
                    +
                </div>
             </div>
             {
                value===elem.id &&<div className='px-10 m-2'>
               {elem.answer}
             </div>
             }
         </div>
       ))}
    </div>
  )
}

export default Practice_2
