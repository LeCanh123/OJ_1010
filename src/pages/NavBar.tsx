import React from 'react'
import "./../Css/Navbar.scss"



export default function NavBar() {
  return (
<>
<div className='row'>
    <div className='col-6 col-md-8 bg-success' style={{height:"75px"}}>
        <div className='row'>
        <div className='col-md-3 mt-3'>Ảnh Logo</div>
        <div className='col-md-3 mt-3'>Link Thứ Nhất</div>
        <div className='col-md-3 mt-3'>Link Thứ Hai</div>

        </div>
    

    </div>
    <div className='col-6 col-md-4 bg-success'>
    <div className='row'>
        <div className='col-6 col-md-3 mt-3' onClick={()=>{window.location.href="/login"}}>Login</div>
        <div className='col-6 col-md-3 mt-3'><i className="fa-regular fa-bell"></i></div>
        <div className='col-6 col-md-3 mt-3' style={{position:"relative",left:"-120px",top:"-5px"}}>100</div>

        </div>
    </div>

</div>


</>

  )
}
