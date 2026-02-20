import React, { useState } from 'react';

const HighlightBoxes = () => {
  const [activeId, setActiveId] = useState(null);
  
    const [multipleSelection, setMultipleSlection] = useState(false);
    const [multiId, setMultiId] = useState([]);

  const handleSelection = (id) => {
    if(multipleSelection){
       
      if(multiId.includes(id))
      {
          setMultiId(multiId.filter(item=>item!==id));
      }
      else{
        setMultiId([...multiId,id]);

      }


    }
    else{
      setMultiId(multiId.includes(id)?[]:[id]);
    }
  };
  const handleMultipleSelection=(id)=>{

  }
 
  const boxes = [
    { id: 'box1', label: 'Box 1' ,ans:"hello"},
    { id: 'box2', label: 'Box 2' ,ans:"vanaakam"},
    { id: 'box3', label: 'Box 3' ,ans:"namaste"},
  ];

  return (
    <div className="flex gap-4 p-8 ">
        <button
          onClick={() => setMultipleSlection(!multipleSelection)}
          className={`p-2 rounded-full  ${multipleSelection?"bg-green-300 ":"bg-red-300 "} cursor-pointer`}
        >
          {
            multipleSelection?"MultipleSelection":"SingleSelection"
          }
        </button>
       
       {
        boxes.map(elem=>(
          <div key={elem.id} onClick={() => handleSelection(elem.id)} className={`w-32 ${multiId.includes(elem.id)?'border-blue-500 bg-blue-50':'border-gray-300 bg-white'}   h-32 flex items-center justify-center cursor-pointer border-4 transition-all`}>
              {elem.label}
              {
                multiId.includes(elem.id) && <div>{elem.ans}</div>
              }
          </div>
        ))
       }
     
    </div>
  );
};

export default HighlightBoxes;