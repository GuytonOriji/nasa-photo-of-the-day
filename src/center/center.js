 import React,{useEffect,useState} from 'react';
import axios from 'axios';




export default function Center (props){

    let [nasaData, setnasaData] = useState()

{/* picture of the day api https://api.nasa.gov/planetary/apod*/}
    useEffect(()=>{
       axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY ")
       
       .then(data=>{
         console.log(data.data.photos[0]);
         setnasaData(nasaData=data.data.photos[Math.floor(Math.random() * data.data.photos.length)].img_src)
             })
  
        .catch(err=>{
            console.log(err)
        })
   },[]);
  
   



    return(
        <div className="gallery">

        <div>
            <h1>Title of sec 1</h1>
           <div className="photoContainer">
               <img src={nasaData} alt="" />
           </div>
           <p>
               loerem ipsum not really im about to <br />
               smack the keyboardwdwfe fefe fef ef <br />
               efefefew  fe fef fefeefesvgew gege ge.<br />
               efefefew  fe fef fefeefesvgew gege ge.
           </p>
           <hr />
        </div>


        <div>
            <h1>Title of sec 1</h1>
           <div className="photoContainer">
               <img src={nasaData} alt="" />
           </div>
           <p>
               loerem ipsum not really im about to <br />
               smack the keyboardwdwfe fefe fef ef <br />
               efefefew  fe fef fefeefesvgew gege ge.<br />
               efefefew  fe fef fefeefesvgew gege ge.
           </p>
           <hr />
        </div>

        <div>
            <h1>Title of sec 1</h1>
           <div className="photoContainer">
               <img src={nasaData} alt="" />
           </div>
           <p>
               loerem ipsum not really im about to <br />
               smack the keyboardwdwfe fefe fef ef <br />
               efefefew  fe fef fefeefesvgew gege ge.<br />
               efefefew  fe fef fefeefesvgew gege ge.
           </p>
           <hr />
        </div>

        <div>
            <h1>Title of sec 1</h1>
           <div className="photoContainer">
               <img src={nasaData} alt="" />
           </div>
           <p>
               loerem ipsum not really im about to <br />
               smack the keyboardwdwfe fefe fef ef <br />
               efefefew  fe fef fefeefesvgew gege ge.<br />
               efefefew  fe fef fefeefesvgew gege ge.
           </p>
           <hr />
        </div>

        </div>
    )
 }