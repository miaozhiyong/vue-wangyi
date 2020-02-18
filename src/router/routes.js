import   fenlei from '../pages/fenlei/fenlei'
import   shouye from '../pages/shouye/shouye'
import   gouwuche from '../pages/gouwuche/gouwuche'
import   zhidemai from '../pages/zhidemai/zhidemai'
import   geren from '../pages/geren/geren'




export default [
    {
        path:'/shouye',
        component:shouye
    },{
        path:'/fenlei',
        component:fenlei
    },{
        path:'/zhidemai',
        component:zhidemai
    },{
        path:'/gouwuche',
        component:gouwuche
    },{
        path:'/geren',
        component:geren
    },
    {
        path:'/',
        redirect:'/shouye',
    }
]