import './App.css';
import React, { useState } from 'react'
import Room from './componenets/Room'
import 'bootstrap/dist/css/bootstrap.css'
import AddRoom from './componenets/AddRoom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RoomWindow from './componenets/RoomWindow'
import cloneDeep from 'lodash.clonedeep';


function App() {
  const [rooms, setRooms] = useState([])
  const [currentRoom, setcurrentRoom] = useState()

  const add = ({ name, color, type, id }) => {
    setRooms([{ name, color, type, id, products: [] }, ...rooms])
  }

  const addcurrentRoom = (id) => {
    setcurrentRoom(id)
  }

  const toggle = (productIndex) => {
    const clonedRooms = cloneDeep(rooms);
    const selectedRoom = clonedRooms.find(({ id }) => id === currentRoom);
    selectedRoom.products[productIndex].state = !selectedRoom.products[productIndex].state;
    setRooms(clonedRooms);
  }

  const addProducts = (prod) => {
    const roomsWithAdditionalProduct = [...rooms];
    const selectedRoom = roomsWithAdditionalProduct.find(({ id }) => id === currentRoom);
    selectedRoom.products = [{ name: prod, state: false }, ...selectedRoom.products];
    setRooms(roomsWithAdditionalProduct);
  }

  const divStyle = {
    margin: '40px',
    border: '5px solid blue',
    height: '550px'
  }

  return (
    <div className="App" style={divStyle}>
      <h1>SMART HOUSE</h1>
      {/* <ColorPicker view="palette" defaultValue={'rgba(237, 126, 50, 1)'} /> */}
      <Router>
        <Switch>
          <Route exact path='/room' component={() => <RoomWindow
            addProducts={addProducts} room={rooms.find(({ id }) => id === currentRoom)} toggle={toggle} />} />
          <Route exact path='/addroom' component={() => <AddRoom addRoom={add} />} />
          <div >
            <Route path='/' component={() =>
              rooms.map((element) => <Room
                name={element.name}
                color={element.color}
                type={element.type}
                addcurrentRoom={addcurrentRoom}
                id={element.id}
                key={element.id} />)}
            />
          </div>
        </Switch>

        <Route exact path='/' component={() => <Link to='/addroom'>
          <button style={{fontStyle: 'bold',fontSize: 44,color: 'white',position: 'absolute' ,bottom: '0',right: '600px', width: '150px', backgroundColor: 'blue'}}>+</button></Link>} />
      </Router>

    </div>
  );
}

export default App;
