import React from 'react'
import { Link } from 'react-router-dom';
import pen from '../assets/pen 1.svg'
import trash from '../assets/trash 1.svg'

function DisplayList({datum,question,setQuestion,saveEditedQuestion,handleCancel,handleDelete,handleQuestionEdit,questionEditId}) {


  return datum.map(data=>< div className='view-datum__populated' key={data.Id}> 

    {data.Id === questionEditId ? (
    <form className='form-wrapper' onSubmit={() => saveEditedQuestion(data.Id, question)}>
      <div className='form-wrapper1'>
      <input type='text' value={question} required onChange={(e)=>setQuestion(e.target.value)}></input>
        <button type='submit' >save</button>
        <button onClick={()=> handleCancel()}>cancel</button>
      </div>
        
         
    </form>):
    (<div>
      <div className='questionHolder'>
          <h3 className='question' >{data.question}</h3>
      </div>
      <div className='eddit-delete'>

        <div className='button  edit' onClick={()=>handleQuestionEdit(data.Id,data.question)} >
            <Link> <img src={pen} alter='edit'/> </Link>
        </div>

        <div className='button delete' onClick={()=>handleDelete(data.Id)}>
          <Link>  <img src={trash} alter='delete'/></Link>
       </div>

      </div>
         
       
    </div>)
    }

  </div>

  )
}

export default DisplayList
