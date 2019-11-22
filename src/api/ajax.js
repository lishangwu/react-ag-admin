
import axios from 'axios'
import { message } from 'antd'

export default function ajax( url, data={}, type='GET'  ){
    return new Promise((resolve, reject)=>{
        let p 
        if(type === 'GET'){
            p = axios.get(url, { params: data })
        }else{
            p = axios.post(url, data)
        }
        p.then(response=>{
            console.log(response)
            resolve(response.data)
        }).catch(error=>{
            message.error('请求出错了: ' + error.message)
        })
    })
}