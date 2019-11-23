import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
import logo from '../../assets/images/ocat_300x300.png'
import './index.less'
import MenuConfig from '../../config/menuConfig'

const { SubMenu } = Menu

class LeftNav extends Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        }) 
    }
      renderMenu = (data)=>{
          const path = this.props.location.pathname
          return data.map(item=>{
              if(item.children){
                  const cItem = item.children.find(cItem => cItem.key === path)
                  if(cItem){
                      this.openKey = item.key
                  }

                  return (
                      <SubMenu title={
                          <span>
                              <Icon type={item.icon}/>
                              <span>{item.title}</span>
                          </span>
                      } key={item.key}>
                          {this.renderMenu(item.children)}
                      </SubMenu> 
                  )
              }
              return (
                  <Menu.Item title={item.title} key={item.key}>
                      <NavLink to={item.key}>
                          <Icon type={item.icon} />
                          <span>{item.title}</span>
                      </NavLink>
                  </Menu.Item>
              )
          })
      }
    
      render(){
          const path = this.props.location.pathname
          return(
              <div className='left-nav'>
                  <Link to='/' className='left-nav-header'>
                      <img src={logo} alt=""/>
                      <h1>后台管理</h1>
                  </Link>
                  <Menu
                      selectedKeys={[path]}
                      defaultOpenKeys={[this.openKey]}
                      mode="inline"
                      theme="dark"
                      inlineCollapsed={this.state.collapsed}
                  >
                      {this.state.menuTreeNode}
                  </Menu>
              </div>
              
          )
      }
}

export default withRouter(LeftNav)