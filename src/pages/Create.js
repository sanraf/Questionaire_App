import React,{ useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/create.css'
import DisplayList from '../components/DisplayList';
import questionDB from '../myDatabase/questionDB';



  function Create() {

        const [datum,setDatum] = useState(questionDB());
        const [question,setQuestion] = useState('');
        const [radio,setRadio] =useState('');
        const [questionEditId,setQuestionEditId] = useState(null);



        const handleOnClick = (e)=>{
          e.preventDefault();
          const time = new Date().getTime();
          const questionList = { Id:time,question,radio}
          setDatum([...datum,questionList]);
          setQuestion('');

        }

      function handleDelete(deleteId){

        const newQuestion = datum.filter((question)=> question.Id !== deleteId);
        setDatum(newQuestion);

      }

      function handleQuestionEdit(editId,newQuestion){
        
        const editedQuestion = datum.find((data)=> data.Id === editId);
        if(editedQuestion){
          setQuestion(editedQuestion.question);
          setQuestionEditId(editId);
          setQuestion(newQuestion)
        } 
      }



      function saveEditedQuestion(editId,newQuestion){
        
        const editedQuestion = datum.find((data)=> data.Id === editId);

        if (editedQuestion) {
            
          const updatedQuestion = [...datum];

          
          const index = updatedQuestion.findIndex((question) => question.Id === editId);

        
          updatedQuestion[index].question = newQuestion;

          
          setDatum(updatedQuestion);

          setQuestion('');
          setQuestionEditId(null);
        }
      }


      function handleCancel(){
        setQuestionEditId(null);
        setQuestion('');
      }

        useEffect  (()=>{
          localStorage.setItem('questionaire',JSON.stringify(datum));

      },[datum]);

        return (
          <div className='create'>
            <Navbar/>
            <div className='create-form'>
            <div className='create-form__child'>
            <h2>Creating a Questionaire</h2>
            {questionEditId === null?
            (<form className='form-wrapper'  onSubmit={handleOnClick}>           
                <div className='form-wrapper1'>
                  <input type='text' placeholder='input text' required value={question} onChange={(e)=>setQuestion(e.target.value)}></input>
                  <button type='submit'>save</button>
              </div>
            </form>) :

            (<div>Editing Mode</div>)}

          {datum.length > 0 ? <h4>List Of Questions</h4> : <h4>No Questions</h4> }
          <DisplayList datum={datum} question={question} setQuestion={setQuestion} saveEditedQuestion={saveEditedQuestion} handleCancel={handleCancel}
          handleDelete={handleDelete} handleQuestionEdit={handleQuestionEdit} questionEditId={questionEditId}/>

      </div>
      </div>
          </div>


            
            
        
        );
      }

export default Create;



//   return (
//     <div className='create'>
//        <Navbar/>

//        <div className='create-form__child'>
//        <h2>Creating a Questionaire</h2>
//       {questionEditId === null?
//        (<form onSubmit={handleOnClick}>           

//         <input type='text' placeholder='input text' required value={question} onChange={(e)=>setQuestion(e.target.value)}></input>
//         <button type='submit'>save</button>

//       </form>) :

//       (<div>Editing Mode</div>)}

//      {datum.length > 0 ? <h2>List Of Questions</h2> : <h2>No list</h2> }
//      <DisplayList datum={datum} question={question} setQuestion={setQuestion} saveEditedQuestion={saveEditedQuestion} handleCancel={handleCancel}
//      handleDelete={handleDelete} handleQuestionEdit={handleQuestionEdit} questionEditId={questionEditId}/>
//     </div>


       



//         <div className='create-form'>

//             <div className='create-form__child'>

             
              
//                 <form className='form-wrapper' onSubmit={handleAddQuestion}>
                  
                  
//                     <div className='form-wrapper'>
//                       <input type='text'  required onChange={handleInputChange} Value={questions} >
//                     </input>
                    
                    
//                     <button type='submit' >Add</button>
//                       </div>

//                 </form >
                
                
               
                
//                   < DisplayList datum={datum} deleteData={deleteData} handleEditQuestion={handleEditQuestion}/>

//             </div>
            

//         </div>
      
  
//   );
// }

// export default Create;