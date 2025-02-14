import { useState } from "react"

// dummy 데이터
const jyIdol = {
    name : "코코몽",
    age : 11,
    song : "마음"
}

function Idol() {
    
  // 구조분해 방식으로 사용해도 됨 , 근데 아래 방식을 추천
  //const [{name, age, song}, setIdol] = useState(jyIdol);
  const [idol, setIdol] = useState(jyIdol);

  const handleName = () => {
    // ...idol -> 새로운 객체를 만들어서 안에 넣어준것 => 객체 복사 {name : "코코몽", age : 11, song : "마음"}
    // newIdol과 idol은 같아

    // 원래 있던 값에 name만 "루피"로 덮어씌워짐
    // newIdol = {name : "코코몽", age : 11, song : "마음" , name : "루피"}
    const newIdol = {...idol,name:"루피"};
    setIdol(newIdol);
    
    // 이 방식으로 하면 똑같은 객체여서 안바뀜
    // 그럼 어떻게 ? 새로운 박스({객체},[배열])을 줘야먄 바뀜!
    //idol.name="루피";
    //setIdol(idol);
  }

  return (
    <div className="border-y-amber-200 border-2">
        <div>{idol.name}</div>
        <div>{idol.age}</div>
        <div>{idol.song}</div>
        <button className="bg-pink-500 text-white rounded-2xl" onClick={handleName}>이름변경</button>
    </div>
  )
}

export default Idol