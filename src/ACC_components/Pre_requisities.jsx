import React, { useState } from 'react'

const Pre_requisities = () => {
    // const [value, setValue] = useState(0)
    const [value, setValue] = useState(false)
  return (
    // <div>
    //     {value}
    //   <button onClick={()=>(setValue(prev=>prev+1))}>add</button>
    // </div>
    <div>
        {
            value&& <p>hello</p>
        }
        <button onClick={()=>(setValue(!value))} >toggle</button>
    </div>
    
  )
}

export default Pre_requisities


// const Practice_2 = () => {
//       const boxes = [
//     { id: 'box1', label: 'Box 1' ,ans:"hello"},
//     { id: 'box2', label: 'Box 2' ,ans:"vanaakam"},
//     { id: 'box3', label: 'Box 3' ,ans:"namaste"},
//   ];


//   const [value, setValue] = useState(null)

//   const handleChange=(id)=>{
//     setValue(prev=>prev===id?null:id);
//   }
//   return (
//     <div className='p-10 flex justify-center gap-20'>
//         {boxes.map((elem)=>(<div key={elem.id} className='w-20 border bg-zinc-400 self-start' onClick={()=>(handleChange(elem.id))}>
//            <div>
//             {elem.label}
//            </div>
//             <div>
//                 {elem.id===value && <p>{elem.ans}</p> }
//             </div>
//         </div>))}
      
//     </div>
//   )
// }