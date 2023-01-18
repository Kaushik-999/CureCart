import React from 'react'
import './Mycard.css'
const Mycard = (props) => {
    return (
        <div className='mycard'>
            <img src={props.link} alt={`trending-${props.title}`} />
        </div>
    )
}

export default Mycard