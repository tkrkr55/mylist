import React,{useState} from 'react'
import LikeButton from '../LikeButton'
const Home = () => {

   
  let [글제목,글제목변경]= useState(['공부를 많이했다 😋','코로나 회복 완료😂','맛있는 갈비를 먹었다 😊'])
  let [count,setcount] = useState(0)
  let [좋아요,좋아요변경] = useState([0,0,0])
  let [제목,제목변경] = useState(0)
  const [modal,setModal]=useState(false)
  
  return (
    <>
  <button className='정렬'
  onClick={()=>{
    let copy = [...글제목].sort()
    글제목변경(copy)
  }}>정렬</button>
    
    
   
      

      {
        글제목.map(function(item,i){
          return(
            
      <div className='list'>
        <div className='list_like'>
      <h4 onClick={()=>{ setModal(!modal); 제목변경(i)}}>{글제목[i]}</h4> 
       <span
       className='좋아요'
       onClick={()=>{
        let copy=[...좋아요];
        copy[i]+=1;
        좋아요변경(copy)
       }}>
      🤍</span>{좋아요[i]}
      </div>
      <p>1월 17일 발행</p>
      </div>
      
          )
        })
      }
    

      {
        modal == true ? <Modal modal={modal} 글제목={글제목} 글제목변경={글제목변경} 제목={제목}/> : null 
      }
      
    </>
    
  )
}


function Modal({modal,setModal,글제목,글제목변경,제목}){
  return(
    <div className='modal'>
      <img onClick={()=>{
        setModal(false)}} 
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%28ei%29.svg/1024px-%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%28ei%29.svg.png'></img>
      <div className='modaltext'>
      <h3>{글제목[제목]}</h3>
      <p>날짜</p>
      <p>상세내용</p>
    
      </div>
      <div  className='modal_layer'></div>
    </div>
  )
}


export default Home
