import React, { useState } from 'react'


export default function RoomWindow(props) {

  const [flag, setFlag] = useState(true)

  const addProduct = (e) => {
    props.addProducts(e.target.value);
  }

  const show = () => {
    if (flag) {
      return <div>
        {props.room.products.map((element, index) =>
          <div key={index}><button onClick={()=>props.toggle(index)} style={{ backgroundColor: element.state ? 'green' : 'red' }}>{element.name}</button></div>)}<br/>
        <button onClick={() => setFlag(false)}>Add Product</button>
      </div>
    }

    else {
      return (
        <div>
          <select onChange={addProduct}>
            <option value=''>Select Product</option>
            <option value="Air Conditioner">Air Conditioner</option>
            <option value="Boiler">Boiler</option>
            <option value="Stereo System">Stereo System</option>
            <option value="Lamp">Lamp</option>
          </select>
          <button onClick={() => setFlag(true)}>Add Product</button>
        </div>
      )
    }
  }


  return (
    <div>
      <h1>name:{props.room.name}</h1><br />
      <h2>type:{props.room.type}</h2><br />
      {show()}
    </div>
  )
}
