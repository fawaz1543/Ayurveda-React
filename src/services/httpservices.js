import axios from 'axios'
import {toast} from 'react-toastify';



// axios.interceptors.response.use(success , error)
axios.interceptors.response.use(null , error=>{
    const ExpectedErrors = error.response && error.response.status >=400 && error.response.status < 500;
    if(ExpectedErrors){
        console.log("intyerceptors Called" , error); 
        toast.error("Please Check Your Api Path Or Your Are is Autorized"); 
        // toast("Some Thing Went Wrong ... Try Again"); 

    }else{
        console.log("intyerceptors Called" , error); 
        toast.error(error); 
        console.log(error);
    }

    return Promise.reject(error); 

});

export default {
    get : axios.get , 
    post : axios.post , 
    put : axios.put , 
    delete : axios.delete 

}