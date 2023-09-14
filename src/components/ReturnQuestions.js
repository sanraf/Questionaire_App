import React, { useEffect, useState } from 'react'
import '../styles/ReturnQuestionsStyle.css'
import Data from '../components/Data';

function ReturnQuestions() {
  const [datum,setDatum] = useState(Data());
  const [editQuestionId,setEditQuestionId] = useState(null);
  const [radio,setRadio] =useState('');

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(datum));

},[datum]);

const onChange = (e)=>{
  const value = e.target.value;
  setRadio(value)
  console.log();
}

const handleEditQuestion = (value)=>{
 
  setEditQuestionId(datum.indexedDB);
  // console.log(setEditQuestionId(datum.indexedDB));

  const formValue={
    indexedDB :datum.indexedDB,
    questions :datum.questions,
    radio:datum.radio
  }

  setRadio(value)
  // console.log(radio)
  setDatum(formValue);
  
}

const handleEditSubmit = ()=>{

  const editQuestion ={
    indexedDB:editQuestionId,
    questions:datum.questions,
    radio:radio
   
  }; 
  const newQuestion = [...datum];
  const index = datum.map((radio)=>radio.indexedDB==editQuestionId);
  newQuestion[index]=editQuestion;
  setDatum(newQuestion);

  console.log(newQuestion); 
  
  const value = datum.find((s)=>{
    
      // setRadio(datum.radio);
      // console.log(value); 
      // console.log(s.indexedDB);
  
  })
 
  // setRadio(value)
  // setEditQuestionId(null);
  // console.log(newQuestion)
  
};
    return datum.map(data=>(
        <div className='view-questionaire' key={data.indexedDB}>
    
        <div className='view-questionaire__holder' >
        
       
        <div className='questionaire-list'>
        
          <h3 className='questionaireHolder'>{data.questions}</h3>
          
        </div>

        <div className='radioButton'>

        <div className='agree'>
          
          <input onChange={onChange} type='radio' value="agree" name={data.indexedDB} ></input>
          <h5>Agree</h5>
        </div>

        <div className='neutral'>
        
          <input onChange={onChange}type='radio' value="neutral" name={data.indexedDB} ></input>
          <h5>Neutral</h5>
        </div>

        <div className='disagree'>
          
          <input onChange={onChange} type='radio' value="disagree" name={data.indexedDB} ></input>
          <h5>Disagree</h5>
        </div>
      
      </div>
     
        </div>

        </div> 
      ));
}

export default ReturnQuestions
