import React, { useState, useEffect } from "react";
import "./App.css";
import axios  from "axios";
import Header from "./header/header";
import Center from "./center/center";
import Footer from "./footer/footer";



function App() {

  let [nasaData, setnasaData] = useState()


  useEffect(()=>{
     axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY ")
     
     .then(data=>{
       console.log(data.data.img_src);
       setnasaData(nasaData=data.data.photos[Math.floor(Math.random() * data.data.photos.length)])
           })

      .catch(err=>{
          console.log(err)
      })
 },[]);


  return (
    <div className="App">
      <Header src={nasaData}/>
      <Center src={nasaData}/>
      <Footer />
    </div>
  );
}

export default App;
