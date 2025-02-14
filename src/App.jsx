

import { useState } from "react"
import Idols from "./Idols"


function App() {
  
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(true);
    if(show){
      setShow(false);
    }
    
    // 이건 나중에 강제 컴포넌트 다시 그리기용으로도 사용될수 있음 
    setShow(!show);
    
  }

  return (
    <div className="text-4xl">
      <button className="bg-purple-200 rounded-2xl" onClick={handleToggle}>토글</button>
     <div style={{display:`${show?"block":"none"}`}}>
        <h1 className="bg-yellow-100 w-50 rounded-4xl">점심묵자</h1>
     </div>
     
      <Idols />

     {/*  <Test /> */}

    </div>
  )
}

export default App
