import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { message } from 'antd'
import memoryUtils from '../../utils/memoryUtils'
export default class Admin extends Component{
    render(){
        const user = memoryUtils.user
        if(!user || !user._id){
            message.error('登录后才能访问')
            return <Redirect to='/login'></Redirect>
        }
        return(
            <div>
                {
                    'admin'
                }
            </div>
        )
    }
}