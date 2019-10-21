<template>
<div>
        <card :class="{loading: loaders.pageLoading}">
            <template v-slot:header>
                <h2>Задача: {{loaders.pageLoading ? '' : detailed_task.id}}</h2>
                <button class="btn btn-glyph">
                    <fa-icon icon="ellipsis-h"></fa-icon>
                </button>
            </template>
            <template v-slot:body>
                <task-editor 
                    v-if="editingMode" 
                    @commit="editTask" 
                    @decline="declineEditTask" 
                    @remove="onRemoveTask"
                    v-model="detailed_task">Сохранить</task-editor>
                <div v-else class="task-detail">
                    <div>{{loaders.pageLoading ? '' : detailed_task.todo}}</div>
                </div>
            </template>
            <template v-slot:footer>
                <button v-if="!editingMode" class="btn btn-default" @click="onEditTask">Изменить</button>
            </template>
        </card>
    </div>
</template>
<script>
import Card from '../components/common/Card'
import TaskEditor from '../components/TaskEditor'
import { mapState, mapActions } from 'vuex'
export default {
    data: () => { return {
        editingMode: false
    }},
    components: { Card, TaskEditor },
    computed: {
        ...mapState (['detailed_task', 'loaders']),
    },
    methods: {
        ...mapActions (['set_detailed_taskid', 'task_modify', 'task_remove']),
        onEditTask () {
            this.editingMode = true;
        },
        editTask() {
            this.editingMode = false;
            this.task_modify(this.detailed_task)
        },
        declineEditTask () {
            this.editingMode = false;
        },
        onRemoveTask () {
            this.editingMode = false;
            this.task_remove(this.detailed_task.id)
        },
    },
    created() {
        //eslint-disable-next-line
        console.log(this.$attrs.taskid)
        this.set_detailed_taskid(this.$attrs.taskid)
    },
}
</script>
<style lang="sass">
    .task-detail
        padding: 16px
        margin-bottom: 16px
        background-color: #cdd1db
        min-height: 40vh
</style>