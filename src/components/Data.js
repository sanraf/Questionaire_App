

function Data() {
    const getDataFromDB=()=>{
        const dbData = localStorage.getItem('list');
        if(dbData){
           return JSON.parse(dbData);
        }else{
           return []
        }
      };
  return ( getDataFromDB());
}

export default Data;
