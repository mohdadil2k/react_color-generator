import React,{ useEffect, useState } from "react";


const SingleColor = ({rgb ,weight,index,hexcolor}) =>{
    const [ alert,setalert ] =useState(false);
    const hexValue = `#${hexcolor}`
    const newrgb = rgb.join(',')
    useEffect(()=>{
        const timeout=setTimeout(() => {
            setalert(false)
        }, 3000);
        return ()=>{
            clearTimeout(timeout)
        }
    },[alert])
    return(<>
    <article 
    className={`single-color ${index>10 && `color-white`}`}
    style={{backgroundColor:`rgb(${newrgb})`}}
    onClick={()=>{
        setalert(true)
        navigator.clipboard.writeText(hexValue)
    }}
    >  
    <h4>{weight}%</h4> 
    <p>{hexValue}</p>
    {alert&&<h5>copied to clipboard</h5>}
    </article>    
    </>)
}

export default SingleColor;