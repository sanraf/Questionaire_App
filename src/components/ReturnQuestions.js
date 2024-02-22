import React, { useEffect, useState } from 'react'
import '../styles/ReturnQuestionsStyle.css'
import questionDB from '../myDatabase/questionDB';

function ReturnQuestions() {
  const [datum,setDatum] = useState(questionDB());
  const [radioId,setRadioId] = useState(null);
  const [radio,setRadio] =useState('');

  useEffect(()=>{
    localStorage.setItem('questionaire',JSON.stringify(datum));

},[datum]);

const onChange = (id)=>{
 
  setRadioId(id)
  
 const c= datum.find((v)=> (v.Id==radioId)
 
);

   console.log(radioId);
   console.log(c);
   
 
}







    return datum.map(data=>(
        <div className='view-questionaire' key={data.Id}>
    
        <div className='view-questionaire__holder' >
        
       
        <div className='questionaire-list'>
        
          <h3 className='questionaireHolder'>{data.question}</h3>
          
        </div>

        <div className='radioButton'>

        <div className='agree'>
          
          <input onClick={()=>onChange(data.Id)}  type='radio' value="agree" name={data.Id} ></input>
          <h5>Agree</h5>
        </div>

        <div className='neutral'>
        
          <input onChange={(e)=>setRadio(e.target.value)}type='radio' value="neutral" name={data.Id} ></input>
          <h5>Neutral</h5>{data.Id}
        </div>

        <div className='disagree'>
          
          <input onChange={(e)=>setRadio(e.target.value)} type='radio' value="disagree" name={data.Id} ></input>
          <h5>Disagree</h5>{data.Id}
        </div>
      
      </div>
     
        </div>

        </div> 
      ));
}

export default ReturnQuestions