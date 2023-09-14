import React from 'react';

function Editable({handleEitChange,editFormData,handleEditSubmit,handleCancel}) {
  return (
    <div className='form-wrapper'>
      
            <input type='text' name='question' required onChange={handleEitChange} defaultValue={editFormData.questions} >
            </input>
            <button onClick={handleEditSubmit} >Save</button>
            <button onClick={handleCancel} >Cancel</button>
                   

    </div>
  );
}

export default Editable;
