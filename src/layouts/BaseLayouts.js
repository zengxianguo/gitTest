// 一个基础布局页面组件

import React from 'react'
import { connect } from 'react-redux'
import { Layout, Icon } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom'

// 侧边栏和导航栏
import SiderBar from '../components/layouts/SiderBar/index'
import HeaderBar from '../components/layouts/HeaderBar/index'

import './BaseLayout.scss'
import Welcome from '../pages/Welcomw'
import UserManage from '../pages/UserManage'
import UserList from '../pages/UserManage/list'
import Menu from '../pages/menu/index'
import error_404 from '../pages/error/404'

const { Content } = Layout;


class BaseLayout extends React.Component {
  constructor(...props) {
    super(...props)
    this.state={
    }
  }
  render() {
    return (
      <Layout className="base-layout">
        <SiderBar />

        <Layout>
          <HeaderBar history={this.props.history}></HeaderBar>
          <Content className="content">
            <Switch>
              <Redirect exact from='/' to='/index'/> 
              <Route path="/user/user-manage" component={ UserManage }></Route>
              <Route path="/user/user-list" component={ UserList }></Route>
              <Route path="/form-list" component={ Menu }></Route>
              <Route path="/index" component={ Welcome }></Route>
              <Route component={error_404}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  (state) => {
    return {
      pathname: state.menu.pathname
    }
  },
  (dispatch) => {
    return {
      /**
       * 更新选中的菜单项
       */
      handleSelectedMenu (selectedMenu) {
        dispatch ({
          type: 'SELECDED',
          selectedMenu
        })
      },
      /**
       * 删除点击的侧边栏记录
       */
      detelePathName (item, index) {
        dispatch({
          type: 'DELETE_PATH_MENU',
          pathname: item,
          pathnameIndex: index
        })
      }
    }
  }
)(BaseLayout)
