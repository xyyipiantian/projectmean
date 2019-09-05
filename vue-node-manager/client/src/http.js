import axios from 'axios'
import {Message,Loading} from 'element-ui'
import router from 'vue-router'

let loading;
function startLoading(){
    loading = Loading.service({
        lock:true,
        text:'加载中...',
        background:'rgba(0,0,0,0.7)'
    })
}

function endLoading(){
    loading.close()
}
//请求拦截

axios.interceptors.request.use(config=>{
    //加载动画
    startLoading();

    if(localStorage.eleToken){
        //设置统一的请求header
        config.headers.Authorization = localStorage.eleToken;

    }

    return config;
},err=>{
    return Promise.reject(error);
}
)

//响应拦截
axios.interceptors.response.use(response=>{
    //结束动画
    endLoading();
    return response;
},error=>{
    //错误提醒
    endLoading();
    Message.error(error.response.data);

    //获取错误状态码
    const {status} = error.response;
    if(status ==401){
        Message.error("token失效，请重新登陆");
        //清除token
        localStorage.removeItem('eleToken')
        //跳转登陆
        router.push({path:'/login'})
    }

    return Promise.reject(error);
})