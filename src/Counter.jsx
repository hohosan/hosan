import { useState } from "react"

function Counter() {

    //console.log("Re-Rendering 확인", "냐냐");

    // 실제로는 전연벽수로 관리를 해줌
    const [count , setCount] = useState(100);

    const handleInc = () => {
    //   alert("냐냐냐");

       // setCount로 상태변수를 변경 했을시 Counter()함수가 재호출된다 => ReRendering ** 아주 중요 디폴트로 알아놓기
       // 이 특징을 잘 이용해서 프로그램을 해야 함ㅁ-ㅁ!
       // callback 함수로 이전 값을 받아올 수 있음 !-!
       setCount(count => count+2);
    }

    const handleDec = () => {
        setCount(count => count-1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div  className="text-center">
            <div>{count}번</div>
            <button onClick={handleInc} className="mb-1 rounded-2xl w-50 text-2xl text-purple-300 bg-yellow-100">증가</button>
            <button onClick={handleDec} className="mb-1 rounded-2xl w-50 text-2xl text-purple-300 bg-yellow-100">감소</button>
            <button onClick={handleReset} className="mb-1 rounded-2xl w-50 text-2xl text-purple-300 bg-yellow-100">리셋</button>
        </div>
  )
}



export default Counter