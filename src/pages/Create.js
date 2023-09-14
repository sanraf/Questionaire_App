import React,{ useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/create.css'
import DisplayList from '../components/DisplayList';
import Data from '../components/Data';
import Editable from '../components/Editable';


function Create() {

  const [datum,setDatum] = useState(Data());
  const [questions,setQuestion] = useState('');
  const [radio,setRadio] =useState('');
  const [editQuestionId,setEditQuestionId] = useState(null);
  const [editFormData,setEditFormData] = useState(Data())
   


  const handleAddQuestion =(e)=>{
    e.preventDefault();

    const date = new Date();
    const time = date.getTime();

    let dataList = {
       
        indexedDB :time,
        questions,
        radio:radio

    }
    setDatum([dataList,...datum]);
    // setDatum([...datum,dataList]);
    setQuestion('');
    setRadio('');
    
   
}

  
const handleEitChange = (e)=>{
  e.preventDefault();
  setQuestion(e.target.value);
}


  const handleInputChange = (e)=>{
    setQuestion(e.target.value);
    
  }

    const deleteData = (indexedDB )=>{
      const filteredData = datum.filter((element)=>{
        return element.indexedDB !==indexedDB
   
      });
       setDatum(filteredData);
    }


    const handleEditQuestion = (e,datumQ )=>{
      e.preventDefault();
      setEditQuestionId(datumQ.indexedDB);

      const formValue={
        indexedDB :datumQ.indexedDB,
        questions :datumQ.questions,
        radio:datumQ.radio
      }
    
      // setRadio("")
     setEditFormData(formValue);
      
    }
    const handleEditSubmit = (e)=>{
      e.preventDefault();
      const editQuestion ={
        indexedDB:editQuestionId,
        questions:questions,
        radio:radio
       
      }; console.log(radio);
      const newQuestion = [...datum];
      const index = datum.find((question)=>question.indexedDB===editQuestionId);
      newQuestion[index]=editQuestion;
      setDatum(newQuestion);
      setQuestion('');
      setEditQuestionId(null);
      console.log(editQuestion)
    };



    useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(datum));

  },[datum]);
  

  const handleCancel = ()=>{
    setEditQuestionId(null);
  }
  return (
    <div className='create'>
        <Navbar/>
        <div className='create-form'>

            <div className='create-form__child'>

              <h2>Creating a Questionaire</h2>
              
                <form className='form-wrapper' onSubmit={handleAddQuestion}>
                  
                  {datum.find((i)=>i.indexedDB=== editQuestionId)  ? <Editable editFormData={editFormData} handleEitChange={handleEitChange} handleEditSubmit={handleEditSubmit} 
                  handleCancel={handleCancel}/>:
                    <div className='form-wrapper'>
                      <input type='text'  required onChange={handleInputChange} defaultValue={questions} >
                    </input>
                    
                    {/* {console.log(questions)} */}
                    
                    <button type='submit' >Add</button>
                      </div>}

                </form >
                
                
                {datum.length > 0 ? <h2>List Of Questions</h2> : <h2>No list</h2> }
                
                  < DisplayList datum={datum} deleteData={deleteData} handleEditQuestion={handleEditQuestion}/>

            </div>
            

        </div>
      
    </div>
  );
}

export default Create;
