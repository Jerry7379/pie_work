// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderFooterLayout from './layouts/HeaderFooterLayout';
import Dashboard from './pages/Dashboard';

import Register from './pages/Register';

import Farm from './pages/Farm';

import Slaughter from './pages/Slaughter';
import PublicFarm from './pages/PublicFarm';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: HeaderFooterLayout,
    component: Dashboard,
  },
  {
    path: '/register',
    layout: HeaderFooterLayout,
    component: Register,
  },
  {
    path: '/farm',
    layout: HeaderFooterLayout,
    component: Farm,
  },
  {
    path: '/Slaughter',
    layout: HeaderFooterLayout,
    component: Slaughter,
  },
  {
    path: '/publicFarm',
    layout: HeaderFooterLayout,
    component: PublicFarm,
  },
  {
    path: '*',
    layout: HeaderFooterLayout,
    component: NotFound,
  },
];

export default routerConfig;
