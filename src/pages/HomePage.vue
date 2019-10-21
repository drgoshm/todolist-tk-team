<template>
    <div>
        <card :class="{loading: loaders.pageLoading}">
            <template v-slot:header>
                <h2>Задачи</h2>
                <button class="btn btn-glyph">
                    <fa-icon icon="ellipsis-h"></fa-icon>
                </button>
            </template>
            <template v-slot:body>
                <task-editor v-if="creatingMode" @commit="createTask" @decline="declineCreateTask">Создать</task-editor>
                <list v-model="todos" >
                    <template v-slot:item="{item}">
                        <task-editor 
                            v-if="editingMode && item.id === editingTaskId" 
                            @commit="editTask" 
                            @decline="declineEditTask" 
                            @remove="onRemoveTask"
                            v-model="item">Сохранить</task-editor>
                        <task v-else v-model="item" @edit="onEditTask"></task>
                    </template>
                </list>
            </template>
            <template v-slot:footer>
                <pagination v-model="page">
                </pagination>
                <button v-if="!creatingMode" class="btn btn-default" @click="onCreateTask">Добавить</button>
            </template>
        </card>
    </div>
</template>
<script>
import Card from '../components/common/Card'
import List from '../components/common/List'
import Task from '../components/Task'
import TaskEditor from '../components/TaskEditor'
import Pagination from '../components/common/Pagination'
import { mapState, mapActions } from 'vuex'

export default {
    data: () => { return {
        creatingMode: false,
        editingMode: false,
        editingTaskId: -1
    }},
    components: { Card, List, Pagination, Task, TaskEditor },
    computed: {
        ...mapState (['todos', 'loaders']),
        page () {
            return this.$attrs.page ? this.$attrs.page : 1
        }
    },
    methods: {
        ...mapActions (['task_add', 'task_modify', 'task_remove']),
        onCreateTask () {
            this.creatingMode = true;
            window.scrollTo(0, 0)
        },
        createTask (task) {
            this.creatingMode = false;
            this.task_add(task)
        },
        declineCreateTask () {
            this.creatingMode = false;
        },
        onEditTask (task) {
            this.editingMode = true;
            this.editingTaskId = task.id
        },
        editTask(task) {
            this.editingMode = false;
            this.task_modify(task)
        },
        declineEditTask () {
            this.editingMode = false;
        },
        onRemoveTask () {
            this.editingMode = false;
            this.task_remove(this.editingTaskId)
        }
    }
}
</script>