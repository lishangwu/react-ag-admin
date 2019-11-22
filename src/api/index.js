import jsonp from 'jsonp'
import { message } from 'antd'
import ajax from './ajax'

let BASE = 'http://47.93.97.5:5000'
BASE = ''

export const reqLogin = (username, password) => ajax(BASE + '/login', { username, password }, 'POST')
