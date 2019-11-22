import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout, message } from 'antd'

import Header from '../../components/header'
import LeftNav from '../../components/left-nav'

import memoryUtils from '../../utils/memoryUtils'

import Home from '../../pages/home/'
import Category from '../../pages/category/'

const { Footer, Sider, Content } = Layout

export default class Admin extends Component{
    render(){
        const user = memoryUtils.user
        if(!user || !user._id){
            message.error('登录后才能访问')
            return <Redirect to='/login'></Redirect>
        }
        return(
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{ backgroundColor: '#ffe' }}>
                        <Switch>
                            <Redirect from='/' exact to='/home'/>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>are you sb</Footer>
                </Layout>
            </Layout>
        )
    }
}