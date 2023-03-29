// routes/index.jsx
import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Head from '../view/head/index'//导航栏

// require.context加载文件生成路由配置
const loadRoutes = (files: __WebpackModuleApi.RequireContext) =>
    files.keys().reduce((arr: any[], key: any) => {
        const routes = files(key).default;
        return typeof routes === "object" ? arr.concat(routes) : arr;
    }, []).sort((prev: { sort: number }, next: { sort: number }) => {
        return prev.sort - next.sort//根据sort 排序
    });

const children = loadRoutes(require.context("./home", false, /\.tsx$/));

const RouteConfig = () => {
    return (
        <Router>
            <Router>
                <Head></Head>
            </Router>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {children.map((item: any) => {
                            return <Route path={item.path} component={item.component} key={item.path}></Route>
                        })}
                        <Redirect to="/home" from="/"></Redirect>
                    </Switch>
                </Suspense>

            </Router>
        </Router>
    )
}

export { RouteConfig, children }