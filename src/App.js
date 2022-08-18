import React, { useState } from 'react';
import Api from "./api/Api";
import "./App.css"


function App() {
  const [api, setApi] = useState(Api);
  const filterItem = (catagoryAsParameter)=>{
    const filteredData = api.filter((item)=>{
      return item.category == catagoryAsParameter;
    })
    setApi(filteredData);
  }
 

  return <>
    <div className="heading">
      <h1>order your favourite dish</h1>
      <hr />
    </div>
    <div className="catogory__button">
      <button onClick={()=>filterItem("breakfast")}>breakfast</button>
      <button onClick={()=>filterItem("launch")}>launch</button>
      <button onClick={()=>filterItem("dinner")}>dinner</button>
      <button onClick={()=>filterItem("snacks")}>snacks</button>
      <button onClick={()=>filterItem("time-pass")}>time-pass</button>
      <button onClick={()=>setApi(api)}>all</button>
    </div>

    <div className="container">

      {
        api.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="img__container">
                <img src={item.img} alt="" />
              </div>
              <div className="content__container">
                <div className="name">{item.name}</div>
                <div className="description">{item.description.substring(0,50)}<span>...</span></div>
                <div className="price__and__order__container">
                  <div className="price"> {item.price}</div>
                  <div className="order"><button>Order now</button></div>
                </div>
                <p className='condition'>*order will not be cancelled </p>
              </div>
            </div>

          )
        })
      }








    </div>



  </>

}

export default App;
