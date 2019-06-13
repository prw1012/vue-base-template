export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    noDropdown: true, // 是否有下级菜单
    hidden: false, // 是否隐藏
    icon: '', // 图标
    redirect: '/richtext',
    component: () => import('@/views/frame/Frame'),
    children: [
      {
        path: '',
        name: '',
        meta: {
          keepAlive: true // 缓存
        },
        component: () => import('@/views/dashboard/DashBoard.vue')
      }
    ]
  }
]
