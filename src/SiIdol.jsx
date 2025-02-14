const avarURL = "https://api.dicebear.com/9.x/big-smile/svg?seed=";


// 일부러 여기에 만듦 . 상황에 따라 이렇게 만들기 가능
// eslint-disable-next-line react/prop-types
function SiIdol({num, name, jakpum , siIdolRem}){
    const handleRemove = () => {
       
        siIdolRem(num);
        // currentTarget : 얘는 안 바뀜, 이벤트를 걸어 준 애가 계속 나옴
        //console.log("체킁" , e.currentTarget);
        // target : 이 아이는 바뀜
        //console.log("체킁2", e.target);
    }

    return (
        <div  className="border-1 border-pink-300">
            <h2>{num}</h2>
            <img src={`${avarURL}${name}`} width={100} height={100}/>
            <h1>{name}</h1>
            <h2>{jakpum}</h2>
            <button className="rounded-2xl w-50 bg-pink-200" onClick={handleRemove}>
                삭제
            </button>
        </div>
    )
}

export default SiIdol;