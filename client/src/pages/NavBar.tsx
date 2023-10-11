import React, { useState } from 'react'
import "./../Css/Navbar.scss"
import { useNavigate } from 'react-router-dom';



export default function NavBar() {
  const navigate = useNavigate();
  let [notification,setnotification]=useState(false);

  return (
<>
<div className='container' style={{zIndex:"100"}}>
<div className='row'>
    <div className='col-6 col-md-10 bg-success' style={{height:"75px"}}>
        <div className='row'>
        <div className='col-md-3 mt-0'>
          <img src='https://sachet.ndma.gov.in/imm/NDMA%20Logo.png' 
          style={{width:"70px",height:"70px"}}  
          ></img>
        </div>
        <div className='col-md-3 mt-3 text-center'
        onClick={()=>{
          navigate('/');
        }}
        >
          Home</div>
        <div className='col-md-3 mt-3 text-center'
              onClick={()=>{
                navigate('/about');
              }}
        >About</div>

        </div>
    

    </div>
    <div className='col-6 col-md-2 bg-success'>
    <div className='row'>
        <div className='col-6 col-md-3 mt-3' 
              onClick={()=>{
                navigate('/login');
              }}
        >Login</div>
        <div className='col-6 col-md-3 mt-3' style={{height:"50px"}}>
          <i className="fa-regular fa-bell" onClick={()=>{setnotification(!notification)}}></i>
          
          <div style={{position:"absolute"}}>
            <div style={{position:"absolute",top:"-35px",left:"10px"}}>100</div>
          </div>
          {notification?
          <div style={{width:"100px",backgroundColor:"red",zIndex:"10",position:"relative"}}>
          <div style={{width:"100px"}}>Cảnh</div>
          <div>thông báo 1</div>
          <div>thông báo 2</div>
          <div>thông báo 3</div>
          </div>

          :
          <></>
          }
          
          </div>
        {/* <div className='col-6 col-md-3 mt-3' style={{position:"relative",left:"-120px",top:"-5px"}}>100</div> */}

        </div>
    </div>

</div>
</div>
</>

  )
}
