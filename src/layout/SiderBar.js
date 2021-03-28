// 侧边栏
import React from 'react'
// import { connect } from 'react-redux'
import menuConfig from '../routes/mainList';
import { NavLink } from 'react-router-dom'
import { Menu, Layout } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout
class SiderBar extends React.Component {
  state = {
    menuList: []
  }
  
  componentDidMount() {
    // this.handleDefaultSelect()
    const menuList = this.setMenu(menuConfig);
    this.setState({
      menuList,
    });
    // this.selectBreadcrumb = this.selectBreadcrumb.bind(this)// 绑定this
  }
  setMenu = (menu, pItem) => {
    return menu.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={ item.key }
            title={ <span><span>{ item.title }</span></span> }
          >
            { this.setMenu(item.children, item) }
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={ item.title } key={ item.key }>
          <NavLink to={ item.key } >
            {/* { item.icon && <Icon type={ item.icon }/> } */}
            <span>{ item.title }</span>
          </NavLink>
        </Menu.Item>
      )
    })
  }
  /**
   * 刷新页面，处理默认选中
   */
  handleDefaultSelect = () => {
    let menuConfigKeys = []
    menuConfig.forEach((item) => {
      menuConfigKeys.push(item.key)
    })
    const pathname = window.location.pathname // 获取当前页面的路由
    const currentKey = '/' + pathname.split('/')[1]
    if (menuConfigKeys.indexOf(currentKey) === 1) {
      this.setState({
        defaultOpenKeys: [currentKey],
        defaultSelectedKeys: [pathname],
      })
      const titleArray = this.selectBreadcrumb(currentKey, pathname)
      this.props.handleClickMenu(titleArray)
    }
  }
  /**
   * 导出出面包屑数组
   */
  selectBreadcrumb = (currentKey, pathname) => {
    const titleArray = []
    menuConfig.forEach((item) => {
      if (item.key === currentKey) {
        titleArray.push(item.title)
      }
      if (item.children) {
        item.children.forEach((sItem) => {
          if (sItem.key === pathname) {
            titleArray.push(sItem.title)
          }
        });
      }
    });
    return titleArray
  };
  /**
   * 点击侧边栏
   */
   handleClick = (item) => {
    const path = item.key
    const currentKey = '/' + path.split('/')[1]
    const pathname = item.key
    const titleArray = this.selectBreadcrumb(currentKey, pathname)
    this.props.handleClickMenu(titleArray)
  }
  render() {
    // let name
    // if (!this.props.collapsed) {
    //   name = <span className="name">React管理后台</span>
    // }
    return (
      <Sider>
        {/* <div className="logo">
          <img className="logo-img" src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg" alt=""/>
          {name}
        </div> */}
        <Menu theme="dark"
              mode="inline">
          { this.state.menuList }
        </Menu>
      </Sider>
    )
  }
}
export default SiderBar