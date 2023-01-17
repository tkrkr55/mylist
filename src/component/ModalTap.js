import React,{useState} from 'react'

export const ModalTap = ({setModal,modal}) => {
 
 
  return (
    <div className='modal'>
      <img onClick={()=>{
        setModal(false)
      }} 
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%28ei%29.svg/1024px-%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%28ei%29.svg.png'></img>
      <div className='modaltext'>
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
      <div  className='modal_layer'></div>
    </div>
  )
}
