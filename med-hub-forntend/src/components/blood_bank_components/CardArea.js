import React from 'react'
import Card from './Card'

function CardArea() {
  return (
    <div className='mt-3 ms-3'>
      <div className="row">
        <div className="col-lg-3">
            <Card title="REGISTRATION"/>
            <div>You need to complete a very simple registration form which contains all required contact information to enter in the donation process.</div>
        </div>
        
        <div className="row">
        <div className="col-lg-3">
            <Card title="SCREENING"/>
            <div>
         {/*}  <Card text="A drop of blood from your finger will take for simpke test to ensure that your blood iron levels are proper enough for donation process"/> 
        </div>  */}</div>
        A drop of blood from your finger will take for simpke test to ensure that your blood iron levels are proper enough for donation process
        </div>

     
        </div>
        <div className="col-lg-3">
            <Card title="DONATION"/>
            <Card text="After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes."/>
        </div>
        <div className="col-lg-3">
            <Card title="REFRESHMENT"/>
            <Card text="You can also stay in sitting room until you feel strong enough to leave our center. You will recieve awesome drink from us in donation center."/>
        </div>

        <Card title="This is title"/>
        </div>
        </div>
    
  )
}

export default CardArea
