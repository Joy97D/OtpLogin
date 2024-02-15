import React from 'react'
import './Otp.css'
import { useState } from 'react'
import { useRef,useEffect } from 'react'

const Otp = ({phno,handlesubmit}) => {
    const [otp,setotp]=useState(new Array(4).fill(""))
    const inputrefs=useRef([])
    // console.log(inputrefs)
    useEffect(() => {
        if(inputrefs.current[0])
        {
            inputrefs.current[0].focus();
        }
    }, [])
    const checkempty=(v)=>{
        if(inputrefs.current[v]&&otp[v]==="")
        {
          inputrefs.current[v].focus();
        }
        else{
            if(v<3)
         checkempty(v+1)
        }
    }
    const handlechange=(index,e)=>{
        const val=e.target.value;
        if(isNaN(val)){
            return
    }
        else{
            const newotp=[...otp]
            newotp[index]=val.substring(val.length-1)
            setotp(newotp)
            const combinedotp=newotp.join("")
            if(combinedotp.length===4)
            handlesubmit(combinedotp)
            // if(val && index<4 && inputrefs.current[index+1] && otp[index+1]===""){
            //     inputrefs.current[index+1].focus();
            // }
            if(val && index<4){
              checkempty(index+1)
            }
        }}
    const handlekeydown=(index,e)=>{
        if(e.key==="Backspace" && !otp[index] && index>0 && inputrefs.current[index-1]){
            inputrefs.current[index-1].focus();
            // console.log(otp)
        }
    }
    const handleclick=(index,e)=>{
       inputrefs.current[index].setSelectionRange(1,1)
    }
  return (
    <div>
    Enter Otp sent to {phno}
    <div className='OTP'>
        {otp.map((value,index)=>{
            return(
                <input
                className='otpinput'
                value={value}
                type='text'
                ref={(input)=>{inputrefs.current[index]=input}}
                onChange={(e)=>handlechange(index,e)}
                key={index}
                onClick={(e)=>handleclick(index,e)}
                onKeyDown={(e)=>handlekeydown(index,e)}
                >
                </input>
            )
        })}
    </div>
    </div>
  )
}

export default Otp