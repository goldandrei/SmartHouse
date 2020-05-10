import { Link } from 'react-router-dom'
import React, { useState } from 'react'


export default function AddRoom(props) {

    const [name, setName] = useState()
    const [color, setColor] = useState()
    const [type, setType] = useState()

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeColor = (e) => {
        setColor(e.target.value);
    }
    const changeType = (e) => {
        setType(e.target.value);
    }

    const addroom2 = () => {
        props.addRoom({ name, color, type, id: Math.floor(Math.random()*10000)
        })
    }
    

    return (
        <div>
            <select onChange={changeType} className="browser-default custom-select" style={{width:'300px'}}>
                <option value=''>Select Room</option>
                <option value="livingRoom">Living Room</option>
                <option value="BathRoom">Bath Room</option>
                <option value="Kitchen">Kitchen</option>
            </select><br />
            <input onChange={changeName} type="text" placeholder='Room Name' /><br />
            <input onChange={changeColor} type="text" placeholder='Room Color' /><br />
            <Link to='./'><button style={{backgroundColor: 'blue'}} onClick={addroom2}>Add Room</button></Link>
        </div>
    )
}
