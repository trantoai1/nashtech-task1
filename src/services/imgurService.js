import * as Config from '../const/config';
import axios from 'axios';


class imgurService {
    localStorageName='imgur';
    login(){
        const imgUser = this.getCurrentToken();
        if(!imgUser) {
            window.location.href= `https://api.imgur.com/oauth2/authorize?client_id=${Config.IMGUR_ID}&response_type=token`;
            return;
        }
        return axios.post(`${Config.IMGUR_AUTH}`,{
            "client_id":Config.IMGUR_ID
            ,"client_secret":Config.IMGUR_SCR,
            "grant_type":"refresh_token",
            "refresh_token":imgUser.refresh_token
        }).then(res=>{
            if(res&&res.status===200)
            {
                localStorage.setItem(this.localStorageName, JSON.stringify(res.data));
            }
            return res.data;
        })
    }
    getHeader(){
        
        //const imgUser = this.getCurrentToken();
        //if (imgUser && imgUser.access_token) {
            return { 
                "Content-type": "application/x-www-form-urlencoded",
                Authorization: `Client-ID ${Config.IMGUR_ID}`,
               }; // for Spring Boot back-end
            //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
          //} else {
           // return {};
         // }
    }
    getCurrentToken()
    {
        return JSON.parse(localStorage.getItem(this.localStorageName));
    }
    async upload(img){
        // const imgUser = this.getCurrentToken();
        // if(!imgUser) {
        //     window.location.href= `https://api.imgur.com/oauth2/authorize?client_id=${Config.IMGUR_ID}&response_type=token`;
        //     return;
        // }
        const data = new FormData();
        data.append("image", img);
        return await axios.post(`${Config.IMGUR_IMG}/upload`,data,{"headers":this.getHeader()}).then(res=>{
            if(res&&res.status===200)
            {
                //console.log(res.data);
            }
            //console.log(res.data);
            return res.data;
        })
    }
}

export default new imgurService();
