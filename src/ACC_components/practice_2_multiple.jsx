import React, { useState } from 'react'

const Practice_2_multiple = () => {
  const data = [
     {
       id: "1",
       question: "What are accordion components?",
    //    answer:
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
 
 
//    const [value, setValue] = useState(null)

   const[toggle,setToggle]=useState(false);

   const[multiID,setMultiID]=useState([]);


   const handleChange=(id)=>{
     
    if(toggle)
    {
       
        multiID.includes(id)
        ?setMultiID(multiID.filter(elem=>elem!==id))
        :setMultiID([...multiID,id])
    
    }
    else{
        setMultiID(multiID.includes(id)?[]:[id])
    }

     
   }
   return (
     <div className='p-10 flex flex-col justify-center items-center w-full h-screen bg-amber-100'>
        <button onClick={()=>{setToggle(!toggle)
            setMultiID([])
        }} className={`p-4 border mb-5 ${toggle?'bg-green-400':'bg-red-400'} `}>{toggle?"Multiple":"Single"}</button>
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
              <div>
               {
                 multiID.includes(elem.id) &&<p className='px-10 m-2'>
                {elem.answer || "NO ANS PROVIDED"}
              </p>
              }
              </div>
              
          </div>
        ))}
     </div>
   )
 }

export default Practice_2_multiple
