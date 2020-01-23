 import React from "react";
 import '../App.css';

 export default function Header(props){
    
    function imgSrc(){
        console.log(props.img.hdurl)
        return props.img.hdurl
        
    }
        

        return(
            <div className="topBanner">
                <h1>NASA Gallery</h1>
                <button onClick={imgSrc}>Toggle Light</button>
                <button onClick={imgSrc}>Next Gallery</button>
                <img src={props.img} />
            </div>
        )
 }


