import axios from "axios";

export default axios.create({    
     baseURL : "https://amontron.onrender.com"  , 
  
    headers:{
        'Content-Type': 'application/json',
    }
})

