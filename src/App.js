import React, { useState, useEffect } from "react";
import "./App.css";
import axios  from "axios";
import Header from "./header/header";
import Center from "./center/center";
import Footer from "./footer/footer";



function App() {


 {/* picture of the day api https://api.nasa.gov/planetary/apod?api_key=n2SjQzacGW1ut0ZIxQoy1bNNZGoGIX2RhigGdAWl                  https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY */}
 
 


  axios.get("https://api.nasa.gov/planetary/apod?api_key=n2SjQzacGW1ut0ZIxQoy1bNNZGoGIX2RhigGdAWl ")
  .then(pod=>{
      console.log(pod.data.img_src)
       return setnasapod(nasapod = pod.data.img_src)
  })
  .catch(err=>{
    console.log(err);
    
  })

 let [nasapod, setnasapod] = useState()

  return (
    <div className="App">
      <Header src={nasapod}/>
      <Center />
      <Footer />
    </div>
  );
}

export default App;
