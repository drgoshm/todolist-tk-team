export default {
    set_page({ commit }, page) {
        commit('SET_PAGE', page)
    },
    task_toggle({ commit }, task) {
        commit('TASK_TOGGLE', task)
    },
    task_add({ commit }, task) {
        commit('TASK_ADD', task)
    },
    task_modify({ commit }, task) {
        commit('TASK_MODIFY', task)
    },
    task_remove({ commit }, taskid) {
        commit('TASK_REMOVE', taskid)
    },
    change_page({ commit }, page) {
        commit('CHANGE_PAGE', page)
    },
    set_detailed_taskid({ commit }, taskid) {
        commit('SET_DETAIL_TASKID', taskid)
    }
}