import React from 'react'
import { useState } from 'react'
import Otp from './Otp'

const PhoneLogin = () => {
  const [phno,setphno]=useState('')
  const[otp,setotp]=useState(false)
  const handlechange=(e)=>{
    setphno(e.target.value)
  }
  const handlesubmit=(e)=>{
       e.preventDefault()
      const regex=/[^0-9]/g;
      if(phno.length>10 || regex.test(phno)){
        alert("Inavlid Phone Number")
        return
      }
      else{
      setotp(true)}
  }
  const handleotpsubmit=(val)=>{
    console.log(val)
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
      type="text"
      hidden={otp} 
      value={phno}
      onChange={handlechange}
      placeholder='Enter Phone Number'
      >
      </input>
      <button type="submit" hidden={otp}>Submit</button>
      {otp &&
      <div>
        <Otp phno={phno} handlesubmit={handleotpsubmit}></Otp>
      </div>}
    </form>

  )
}

export default PhoneLogin