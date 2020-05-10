import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Room(props) {

    const addcurrentRoom = () => {
        props.addcurrentRoom(props.id)
    }

    return (
        <Link to='/room' >
            <button className="col-2 card" style={{ backgroundColor: props.color,display: 'inline' }}
                onClick={addcurrentRoom}>
                <h1>{props.name}</h1>
                <h2>{props.type}</h2>
            </button>
        </Link>
    )
}
