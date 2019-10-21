import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import firebase from './firebase'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        todos: [
            {id: 1, todo: "...", done: false},
            {id: 2, todo: "...", done: false},
            {id: 3, todo: "...", done: false},
        ],
        total: 3,
        page: 1,
        loaders: {
            pageLoading: true,
            
        },
        detailed_taskid: undefined,
        detailed_task: undefined
    },
    mutations,
    actions,
    plugins: [firebase]
  })
