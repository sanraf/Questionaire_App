import React  from 'react';
import trash from '../assets/trash 1.svg'
import pen from '../assets/pen 1.svg'
import { Link } from 'react-router-dom';
import '../styles/DisplayListStyle.css'


function DisplayList({datum,deleteData,handleEditQuestion}) {

  return datum.map(data=>(
    <div className='view-datum__populated' key={data.indexedDB}>

    <div className='content-holder' >
    
    {/* {console.log(data)} */}
    <div className='question'>
    
      <h3 className='questionHolder'>{data.questions}</h3>
      
    </div>
    
    </div>
    
    <div className='eddit-delete'>
          <div className='button  edit' onClick={(e)=>handleEditQuestion(e,data)} >
            <Link> <img src={pen} alter='edit'/> </Link>
          </div>

          <div className='button delete' onClick={()=>deleteData(data.indexedDB)}>
          <Link>  <img src={trash} alter='delete'/></Link>
            
          </div>
    </div>
    
    </div> 
  ));
}

export default DisplayList;
