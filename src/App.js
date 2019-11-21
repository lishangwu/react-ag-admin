import React from 'react'
import { Button, message } from 'antd'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends React.Component{

    handleClick = ()=>{
        message.success('ssb..')
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}