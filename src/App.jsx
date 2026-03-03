import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './ACC_components/Accordian'
import Practice_1 from './ACC_components/Practice_1'
import HighlightBoxes from './ACC_components/HighlightBoxes'
import Practice_2 from './ACC_components/Practice_2_single'
import Pre_requisities from './ACC_components/Pre_requisities'
import Practice_2_multiple from './ACC_components/practice_2_multiple'

function App() {
 

  return (
    <>
      {/* <Accordian/> */}
      {/* <Practice_1/> */}
      {/* <Practice_2/> */}
     <Practice_2_multiple/>
      {/* <Pre_requisities/> */}
      {/* <HighlightBoxes/> */}
    </>
  )
}

export default App
