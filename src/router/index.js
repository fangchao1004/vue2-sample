import Vue from 'vue'
import VueRouter from 'vue-router'
// import { testList } from './extraRouteList'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'LoginView', component: () => import('../views/login/LoginView.vue')},
    {
        path: '/main',
        name: 'MainView',
        component: () => import('../views/main/MainView.vue'),
        redirect: '/main/statistics',
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'statistics',
                name: 'StatistcsView',
                title: '统计',
                iconType: 'bar-chart',
                component: () => import('../views/main/statistcsMode/StatistcsView.vue')
            },
            {
                path: 'setting',
                name: 'SettingView',
                title: '设置',
                iconType: 'setting',
                component: () => import('../views/main/settingMode/SettingView.vue')
            },
            {
                path: '',
                title: '样本',
                iconType: 'unordered-list',
                component: () => import('../views/main/sampleMode/SampleRoot.vue'),
                children: [
                    {
                        path: 'sample1',
                        name: 'SampleView1',
                        title: '样本1',
                        iconType: 'pie-chart',
                        component: () => import('../views/main/sampleMode/SampleView1.vue')
                    },
                    {
                        path: 'sample2',
                        name: 'SampleView2',
                        title: '样本2',
                        iconType: 'pie-chart',
                        component: () => import('../views/main/sampleMode/SampleView2.vue')
                    }
                ]
            }
        ]
    },
    {path: '*', name: 'notFountView', component: () => import('../views/notFound/NotFoundView.vue')},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const isAuthenticated = () => {
    // 判断依据自行设定
    const token = Vue.ls.get('token')
    return token
}

// testList.forEach((routerConfigItem) => {
//   router.addRoute('MainView', routerConfigItem)
// })

router.beforeEach((to, from, next) => {
    // console.log('from，to :', from, to)
    if (to.name !== 'LoginView' && !isAuthenticated()) {
        Vue.prototype.$message.error('token过期', 3)
        next({name: 'LoginView'})
    } else {
        next({replace: true})
    }
})

export default router
