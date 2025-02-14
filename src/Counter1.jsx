import { useState } from "react"


// Test(부모)에서 넘겨받은 함수를 받아서 호출해
// eslint-disable-next-line react/prop-types
function Counter1({handleSum, addNum}) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + addNum);
        // 합이 맞도록 숙제
        handleSum(addNum);
    }

  return (
    <>
        <div>{count}</div>
        <button className="rounded-2xl bg-pink-200" onClick={handleClick}>눌러보삼</button>
    </>
    )
}

export default Counter1