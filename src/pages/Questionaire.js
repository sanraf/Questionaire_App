
import Navbar from '../components/Navbar';
import '../styles/QuestionaireStyle.css';
import React,{ useEffect, useState } from 'react';
import DisplayList from '../components/DisplayList';
import ReturnQuestions from '../components/ReturnQuestions';
import questionDB from '../myDatabase/questionDB';



function Questionaire() {

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(questionDB()));

},[questionDB()]);



  return (
    <div className='quetionaireWrapper'  >
      
        <Navbar/>

        <div className='quetionaireWrapper__holder'>
          <ReturnQuestions datum={questionDB()}/>
          <button  type='submit' >Submit</button>
      </div>

    </div>
  );
}

export default Questionaire;