import React from 'react'

function Banner(props) {
  return (
    <div className="w-96 h-52 bg-white mx-auto ">
        <a href="/"><img src={props.link} alt={`banner_${props.title}`}/></a>
      
    </div>
  )
}

export default Banner
