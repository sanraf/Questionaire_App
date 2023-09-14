import React, { useState } from 'react'
import questionLogo from '../assets/icons8-questions-64.png'
import Data from '../components/Data';


function DashboardDisplay() {


  return (
    <div className='dash-display'>
      <h1>dash</h1>

      <div className='result-container'>

        <div>
          <h4>Number Of Question</h4>
        </div>

        <div>
          <h2>{Data().length}</h2>
        </div>

        <img src={questionLogo}/>

      </div>
    </div>
  )
}

export default DashboardDisplay;
