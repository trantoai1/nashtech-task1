import axios from 'axios';
import * as Config from '../const/config';

export default async function callAPI (endpoint,params,method='GET',headers = {},body){
    
        try {
            //console.log(Config.HEADER);
            for (const [key, value] of Object.entries(Config.HEADER)) {
                headers[key] = value;
              }
           let res = await axios({
                url: `${Config.API_URL}/${endpoint}`,
                method: method,
                timeout: 8000,
                headers: headers,
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