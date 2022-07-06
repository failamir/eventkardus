import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'pendaftars',
        name: 'pendaftars.index',
        component: () => import('@cruds/Pendaftars/Index.vue'),
        meta: { title: 'cruds.pendaftar.title' }
      },
      {
        path: 'pendaftars/create',
        name: 'pendaftars.create',
        component: () => import('@cruds/Pendaftars/Create.vue'),
        meta: { title: 'cruds.pendaftar.title' }
      },
      {
        path: 'pendaftars/:id',
        name: 'pendaftars.show',
        component: () => import('@cruds/Pendaftars/Show.vue'),
        meta: { title: 'cruds.pendaftar.title' }
      },
      {
        path: 'pendaftars/:id/edit',
        name: 'pendaftars.edit',
        component: () => import('@cruds/Pendaftars/Edit.vue'),
        meta: { title: 'cruds.pendaftar.title' }
      },
      {
        path: 'tikets',
        name: 'tikets.index',
        component: () => import('@cruds/Tikets/Index.vue'),
        meta: { title: 'cruds.tiket.title' }
      },
      {
        path: 'tikets/create',
        name: 'tikets.create',
        component: () => import('@cruds/Tikets/Create.vue'),
        meta: { title: 'cruds.tiket.title' }
      },
      {
        path: 'tikets/:id',
        name: 'tikets.show',
        component: () => import('@cruds/Tikets/Show.vue'),
        meta: { title: 'cruds.tiket.title' }
      },
      {
        path: 'tikets/:id/edit',
        name: 'tikets.edit',
        component: () => import('@cruds/Tikets/Edit.vue'),
        meta: { title: 'cruds.tiket.title' }
      },
      {
        path: 'pembayarans',
        name: 'pembayarans.index',
        component: () => import('@cruds/Pembayarans/Index.vue'),
        meta: { title: 'cruds.pembayaran.title' }
      },
      {
        path: 'pembayarans/create',
        name: 'pembayarans.create',
        component: () => import('@cruds/Pembayarans/Create.vue'),
        meta: { title: 'cruds.pembayaran.title' }
      },
      {
        path: 'pembayarans/:id',
        name: 'pembayarans.show',
        component: () => import('@cruds/Pembayarans/Show.vue'),
        meta: { title: 'cruds.pembayaran.title' }
      },
      {
        path: 'pembayarans/:id/edit',
        name: 'pembayarans.edit',
        component: () => import('@cruds/Pembayarans/Edit.vue'),
        meta: { title: 'cruds.pembayaran.title' }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
