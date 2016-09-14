const menus =
  [
    {
      name: '项目',
      icon: 'project',
      link: '/project'
    },
    {
      name: '公司',
      icon: 'company',
      children: [
        {name: '公司1', icon: 'new', link: '/company/new'},
        {name: '旧公司', icon: 'new', link: '/company/new'}
      ]
    },
    {
      name: '项目',
      icon: 'project',
      children: [
        {name: '新公司', icon: 'new', link: '/company/new'},
        {name: '旧公司', icon: 'new', link: '/company/new'}
      ]
    },
    {
      name: '项目',
      icon: 'project',
      children: [
        {name: '新公司', icon: 'new', link: '/company/new'},
        {name: '旧公司', icon: 'new', link: '/company/new'}
      ]
    }
  ]

export default menus
