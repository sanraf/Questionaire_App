
function questionDB() {

    const getDataFromDB=()=>{
        const dbData = localStorage.getItem('questionaire');
        if(dbData){
           return JSON.parse(dbData);
        }else{
           return []
        }
      };
  return (getDataFromDB())
}

export default questionDB;
