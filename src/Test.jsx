import { useState } from "react"
import Counter1 from "./Counter1"

function Test() {
    const[sum, setSum] = useState(0);

    // 여기서 쓰지만 여기서 불리지 않고 자식(Counter1)이 호출함
    // 중요한 테크닉이니 꼭 ! 알아 둘것 ***
    const handleSum = (add) => {
        setSum(sum + add);
    }

  return (
    /* Counter1로 handleSum() 함수를 넘겨준것 */
    <div>
        {/* 아주 중요한 테크닉! 문제도 있음 멋진말로 Props drilling */}
        <Counter1 handleSum={handleSum} addNum={3}/>
        <Counter1 handleSum={handleSum} addNum={6}/>
        <Counter1 handleSum={handleSum} addNum={9}/>
        <h1>총합은 {sum}</h1>
    </div>
  )
}

export default Test