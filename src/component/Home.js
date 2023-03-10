import React,{useState} from 'react'
import Year from "react-live-clock";
import Month from "react-live-clock";

const Home = () => {

   
  let [글제목,글제목변경]= useState(['공부를 많이했다 😋','코로나 회복 완료😂','맛있는 갈비를 먹었다 😊'])
  let [좋아요,좋아요변경] = useState([0,0,0])
  let [제목,제목변경] = useState(0)
  const [modal,setModal]=useState(false)
  let [입력값,입력값변경] = useState('');
  let [date,setDate] =useState(0)
  let [modaladd,setmodaladd]=useState('')
  let[상세내용,상세내용변경] =useState(['내용'])
  let[render,setRender] =useState('')
  

  const clickchange = ()=>{
    let copy = [...글제목]
    copy.unshift(입력값)
    글제목변경(copy)
  }

  const onkeypress =(e)=>{
    if(e.key == 'Enter'){
      clickchange()
    }
  }
 
  return (
    <>
 
       <input className='homeinput' placeholder="오늘 하루는 어땟어?" onKeyPress={onkeypress} onChange={(e)=>{
        입력값변경(e.target.value)
      }} type="text" ></input>
 
     
    
   
      

      {
        글제목.map(function(item,i){
          return(
            
      <div className='list'>
        <div className='list_like'>
      <h4 onClick={()=>{ setModal(true); 제목변경(i)}}>{글제목[i]}
       <span
       className='좋아요'
       onClick={(e)=>{ e.stopPropagation();
        let copy=[...좋아요];
        copy[i]+=1;
        좋아요변경(copy)
       }}>
      🤍</span>{좋아요[i]}</h4> 
      </div>
      
      <div className='day'>
      <p><Year  id="Tear" format={"YYYY"} ticking={false}timezone={"KR/Pacific"}></Year>년</p>
      <p><Month format={"MMM"} ticking={false} timezone={"KR/Pacific"}
      ></Month>월</p>
      <p> 19일</p>
      </div>
      
      </div>

      
      
      
          )
        })
      }
   
      
      {
        modal == true ? < Modal render={render} setRender={setRender} 상세내용={상세내용} 상세내용변경={상세내용변경} setmodaladd={setmodaladd} modaladd={modaladd} 입력값변경={입력값변경} setModal={setModal} modal={modal} 글제목={글제목} 글제목변경={글제목변경} 제목={제목}/> : null
      }
      
    </>
    
  )
}


function Modal({상세내용,상세내용변경,setmodaladd,modaladd,입력값변경,modal,setModal,글제목,글제목변경,제목}){

  const onkeypress=(e)=>{
    if(e.key == "Enter"){
      return onclick()
    }
  }
 

  const onclick=()=>{
    let copy = [...modaladd]
    copy.unshift(상세내용)
    상세내용변경(copy)
    setmodaladd('')
  }
  return(
    <div className='modal'>
      <button className='엑스' onClick={()=>{
        setModal(false)
      }}>X</button>
      <div className='modaltext'>
      <h3 className='modal_list'>제목 : {글제목[제목]}</h3>
      <p>
        {상세내용}</p>
      <input value={modaladd} className='modalinput'
    onKeyPress={onkeypress}
      onChange={(e)=>{
       setmodaladd(e.target.value)
      }}
      placeholder="추가내용을 써주세요✨" ></input>
      
      </div>
      <button 
        className='modlabtn'
      onClick={()=>{
        let copy= [...상세내용]
        copy.splice(0,1000000000)
        상세내용변경(copy)
      }}>삭제하기</button>
      <div  className='modal_layer'></div>
    </div>
  )
}


export default Home
