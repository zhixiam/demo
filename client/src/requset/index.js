import axios from "axios"
import { showMessage } from "./status";

const service = axios.create({
    baseURL:"http://127.0.0.1:5000/api",
    timeout:5000,
    headers : {
    'Content-Type':'application/json;charset=UTF-8',                
    }
    
});
//請求攔截
service.interceptors.response.use((config)=>{
    config.headers = config.headers || {}
    if(localStorage.getItem("token")){
      config.headers.token = localStorage.getItem('token') || ""
    }
    return config
})
//響應攔截
service.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const {response} = error;
      if (response) {
        // 请求已发出，但是不在2xx的范围
        showMessage(response.status);           
        return Promise.reject(response.data);
      } else {
        alert.Message('網路連線超時');
      }
    }
);

export default service