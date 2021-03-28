const routers = [
  {
    key: '/home',
    title: '首页',
    icon: '<UserOutlined />'
  },
  {
    key: '/user',
    title: '用户管理',
    children: [
      {
        key: '/user/userCenter',
        title: '用户中心'
      },
      {
        key: '/user/userList',
        title: '用户列表'
      }
    ]
  }
]

export default routers