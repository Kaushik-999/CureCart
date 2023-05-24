import React,{useState} from 'react';
import {question} from './api';
import './accordion.css';
import MyAccordion from './MyAccordion';  
 

const Accordion = () => {
  const [data,setData] = useState(question);
  return (
 
  <>
  <section className="main-div">
    <h1>What The FAQs</h1>

  
  {
    data.map((curElem) => {
      const {id}=curElem;
      return <MyAccordion key={ id} {...curElem } /> 
    
    })
  }
  </section>
  </>

  );
}

export default Accordion
