
import Navbar from '../components/Navbar';
import '../styles/QuestionaireStyle.css';
import React,{ useEffect, useState } from 'react';
import DisplayList from '../components/DisplayList';
import ReturnQuestions from '../components/ReturnQuestions';
import Data from '../components/Data';



function Questionaire() {

  const [datum,setDatum] = useState(Data());

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(Data()));

},[Data()]);



  return (
    <div className='quetionaireWrapper'  >
      
        <Navbar/>

        <div className='quetionaireWrapper__holder'>
          <ReturnQuestions datum={Data()}/>
          <button  type='submit' >Submit</button>
      </div>

    </div>
  );
}

export default Questionaire;
