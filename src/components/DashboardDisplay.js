import React, { useState } from 'react'
import questionLogo from '../assets/icons8-questions-64.png'
import questionDB from '../myDatabase/questionDB';


function DashboardDisplay() {


  return (
    <div className='dash-display'>
      <h1>dash</h1>

      <div className='result-container'>

        <div>
          <h4>Number Of Question</h4>
        </div>

        <div>
          <h2>{questionDB().length}</h2>
        </div>

        <img src={questionLogo}/>

      </div>
    </div>
  )
}

export default DashboardDisplay;
