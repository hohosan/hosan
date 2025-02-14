import { useState } from "react"
import { en, Faker, ko } from "@faker-js/faker"
import SiIdol from "./SiIdol";


// Locale 세팅   이전과 바뀜, 한글 쓰기 위함
// git 편집 테스트
const fakerKO = new Faker({
    locale: [ko,en],
});

const jhIdols = [
    {num : 1, name : "루피" , jakpum : "곰돌"},
    {num : 2, name : "코코몽" , jakpum : "원숭"},
    {num : 3, name : "토마스" , jakpum : "기차"},
    {num : 4, name : "크롱" , jakpum : "공룡"}
]

function Idols() {
  const [idols, setIdols] = useState(jhIdols)

  const siIdolRem = (newNum) => {
    //alert(newNum);
    // 배열.filter 골라담은 새 배열을 리턴
    // 선택된 넘버 객체만 제외시킨 새 배열을 리턴
    // idol : { } 한 줄씩 넘어옴

    /*
    if(idol.num == newNum){
        // num 가 같은건 새 배열에 담지 않겠다는 뜻
        return false;
    }
    return true;
    */

    // filter는 곧 검색임 **
    const newArr = idols.filter(idol =>{
        // 같을때만 true
       return idol.num != newNum;
    });

    setIdols(newArr);
    //console.log("체체체크 : " ,newArr);
  }

  const handleAdd = () => {

        // faker-js를 이용하여 랜덤 데이터구성, 자바 라이브러리도 따로 있으니 나중에 꼭 써보깅
        const newIdol = {
            num : fakerKO.number.int(),
            name : fakerKO.person.fullName(),
            jakpum : fakerKO.person.firstName()
        }

        // [...idols, newIdol] 맨 밑에 추가
        // [newIdol, ...idols] 위에 추가

        const newIdols = [...idols, newIdol]; // 배열 복사 [] => new Array()
        //const newIdols = [...idols];
        //newIdols.push({num:5,name:"메롱",jakpum:"하하"});
        

        setIdols(newIdols);
  }

  return (
    <div>
        {
            idols.length !=0 ? 
                idols.map(idol => (<SiIdol siIdolRem={siIdolRem} key={idol.num} num={idol.num} name={idol.name} jakpum = {idol.jakpum} />)):
                (<div> 읎서용 </div>) 
        }
        <button className="rounded-2xl w-50 bg-amber-100" onClick={handleAdd}>영신옹니</button>
    </div>
  )
}

export default Idols