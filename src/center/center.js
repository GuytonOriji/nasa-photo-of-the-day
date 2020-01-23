 import React,{useEffect, useState} from 'react';
import axios from 'axios';






export default function Center (props){

   
    console.log(props)
        
       
             

    return(
        <div className="gallery">

                <div>
                    <h1>Title of sec 1</h1>
                   <div className="photoContainer">
                       <img src={props.img} alt="" />
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
                    <h1>Title of sec 2</h1>
                   <div className="photoContainer">
                       <img src={props.img} alt="" />
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
                    <h1>Title of sec 3</h1>
                   <div className="photoContainer">
                       <img src={props.img} alt="" />
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


 