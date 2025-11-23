import axios from 'axios';

export const getOpenAiResponse=(prompt:string)=>{
    return axios.post('http://127.0.0.1:8000/user/chat',{
        user_input:prompt
    });
}