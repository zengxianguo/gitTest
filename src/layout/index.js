import React from 'react'
import { Route, Switch } from 'react-router-dom'

// 组件
import Home from '../views/Home/index'
import UserList from '../views/User/index'
import userCenter from '../views/User/userCenter'
import SiderBar from './SiderBar'

import { Layout } from 'antd'
const { Content } = Layout

class BaseLayout extends React.Component {
  render () {
    return (
      <Layout className="base-layout">
        <SiderBar />
        <Layout>
          <Content className="content">
            <Switch>
              <Route path="/home" component={ Home }></Route>
              <Route path="/user/userCenter" component={ userCenter }></Route>
              <Route path="/user/userList" component={ UserList }></Route>
              <Route path="/" component={ Home }></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout