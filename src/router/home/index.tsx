import { BankOutlined, LogoutOutlined } from '@ant-design/icons';
import { lazy } from 'react';//lazy是为了实现路由懒加载
const icon = <BankOutlined />//设置图标
const icons = <LogoutOutlined />

const home = [
    {
        path: "/home",
        name: "首页",
        sort: 1,
        component: lazy(() => import("../../view/home/index")),
        meta: {
            title: "首页",
            iocn: icon,
            keepAlive: true
        }
    },
    {
        path: "/login",
        name: "登录",
        sort: 2,
        component: lazy(() => import("../../view/login/index")),
        meta: {
            title: "登录",
            iocn: icons,
            keepAlive: true
        }
    }
]
export default home