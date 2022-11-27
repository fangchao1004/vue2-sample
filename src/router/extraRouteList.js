// 模拟额外的需要增加的路由
export const testList = [
    {
        path: '/main/extra',
        name: 'ExtraView',
        title: '增加的路由',
        iconType: 'android',
        component: () => import('../views/main/extraMode/ExtraView.vue')
    },
]