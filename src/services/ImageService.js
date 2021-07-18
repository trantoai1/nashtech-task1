
import axios from 'axios';
import { API_URL } from '../const/config';
 
export function getImage(id){
        let params = {};
        console.log('ImageService:get')
        let result = undefined;
        if(id)
            params["productId"] = id;

             axios.get(`${API_URL}/images`,params)
        .then(res => {
            //console.log(res);
            this.result= res;
        });
        console.log(result);
        return result;
    }

