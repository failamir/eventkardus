import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import PendaftarsIndex from './cruds/Pendaftars'
import PendaftarsSingle from './cruds/Pendaftars/single'
import TiketsIndex from './cruds/Tikets'
import TiketsSingle from './cruds/Tikets/single'
import PembayaransIndex from './cruds/Pembayarans'
import PembayaransSingle from './cruds/Pembayarans/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    PendaftarsIndex,
    PendaftarsSingle,
    TiketsIndex,
    TiketsSingle,
    PembayaransIndex,
    PembayaransSingle
  },
  strict: debug
})
