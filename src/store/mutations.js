export default {
    SET_PAGE(state, page) {
        window.history.pushState(null, '', '/' + page)
        state.page = page
    },
    TASK_TOGGLE(state, task) {
        (function(el){if(el) el.done = !el.done})(state.todos.find(el => el.id===task.id ))
    },
    TASK_ADD(state, task) {
        state.todos.unshift(task)
        if(state.todos.length > 10) state.todos.pop()
    },
    TASK_MODIFY(state, task) {
        (function(el){if(el) {
            el.todo = task.todo
        }})(state.todos.find(el => el.id===task.id ))
    },
    TASK_REMOVE(state, taskid) {
        (function(index){if(index > -1) {
            state.total --
            state.todos.splice(index, 1)
        }})(state.todos.findIndex(el => el.id===taskid ))
    },
    SET_DETAIL_TASKID(state, taskid) {
        state.detailed = taskid
    },
    FB_SET_TOTAL(state, total) {
        state.total = total
    },
    FB_POP_TODOS(state, querySnapshot) {
        state.todos.length = 0
        querySnapshot.forEach(function(doc) {
            state.todos.push({id: doc.id, ...doc.data()})
        })
    }
}