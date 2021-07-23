import axios from 'axios';

import authHeader from '../services/authHeader';

export default async function callAPI (endpoint,params,method='GET',body){
    
        try {
            //console.log(Config.HEADER);
            // for (const [key, value] of Object.entries(Config.HEADER)) {
            //     headers[key] = value;
            //   }
           let res = await axios({
                url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
                method: method,
                timeout: 8000,
                headers: authHeader(),
                data:body,
                params: params,
            })
            if(res.status === 200){
                // test for status you want, etc
                //console.log(res.status)
            }    
            // Don't forget to return something   
            return res;
        }
        catch (err) {
            console.error(err);
        }
    
};


export async function get (endpoint,params){
    
        
       let res = await axios.get(`${process.env.REACT_APP_API_URL}/${endpoint}`,{params:params,headers:authHeader()});
        
          
        
        return res;
    
};

export async function post (endpoint,body){
    
       let res = await axios.post(`${process.env.REACT_APP_API_URL}/${endpoint}`,body,{headers:authHeader()})
           
        
        return res;
    
};

export async function put (endpoint,body){
   
       let res = await axios.put(`${process.env.REACT_APP_API_URL}/${endpoint}`,body,{headers:authHeader()})
         
        
        return res;
    
};

export async function del(endpoint){
    
       let res = await axios.delete(`${process.env.REACT_APP_API_URL}/${endpoint}`,{headers:authHeader()})
         
        
        return res;
    
};