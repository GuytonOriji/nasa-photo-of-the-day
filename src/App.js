import React, { useState, useEffect } from "react";
import "./App.css";
import axios  from "axios";
import Header from "./header/header";
import Center from "./center/center";
import Footer from "./footer/footer";



function App() {


 {/* picture of the day api https://api.nasa.gov/planetary/apod?api_key=n2SjQzacGW1ut0ZIxQoy1bNNZGoGIX2RhigGdAWl                  https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY */}
 
  let [nasapod, setnasapod] = useState()
  let [nasaData, setnasaData] = useState() 

useEffect(()=>{

  axios.get("https://api.nasa.gov/planetary/apod?api_key=n2SjQzacGW1ut0ZIxQoy1bNNZGoGIX2RhigGdAWl ")
  .then(pod=>{
        setnasapod(nasapod = pod.data.hdurl)
  })
  .catch(err=>{
    console.log(err);
    
  })


},[])



  useEffect(()=>{



    axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")

    .then(data=>{
    console.log(data.data.photos[0]);
     setnasaData(nasaData=data.data.photos[0])

        })

    .catch(err=>{
        console.log(err)
        
    })


},[])

  return (
    <div className="App">
      <Header img={nasapod} />
      <Center img={nasaData}/>
      <Footer />
    </div>
  );
}

export default App;
