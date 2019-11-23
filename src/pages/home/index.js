import React, { Component } from 'react'
import {
    Icon,
    Card,
    Statistic,
    DatePicker,
    Timeline
} from 'antd'
import moment from 'moment'
  
import Line from './line'
import Bar from './bar'
import './index.less'

const dateFormat = 'YYYY/MM/DD'
const { RangePicker } = DatePicker

export default class index extends Component{
    state = {
        isVisited: true
    }

    handleChange = (isVisited) => {
        return ()=>this.setState({ isVisited })
    }

    render(){
        const { isVisited } = this.state

        return (
            <div className='home'>
                home
            </div>
        )
    }
}