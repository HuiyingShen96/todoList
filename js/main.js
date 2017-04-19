/**
 * Created by polyv on 2017/4/18.
 */
Vue.component('todo-item',{
    props: ['item'],
    template: '<li class="list-group-item"><button :class="{important:item.priority}" @click="$emit(\'change\')"></button>' +
    '<span>{{item.text}}</span><a @click="$emit(\'delete\')">删除</a><a @click="$emit(\'finish\')">完成</a></li>'
});
Vue.component('finished-item',{
    props: ['item'],
    template: '<li class="list-group-item finished"><span>{{item.text}}</span> ' +
    '<a @click="$emit(\'delete\')">删除</a><a @click="$emit(\'restore\')">未完成</a></li>'
});

var todoList = new Vue({
    el: '#todoList',
    data: {
        todoText: '',
        todoList: [
            {text: "todo1", priority: false},
            {text: "todo2", priority: true},
            {text: "todo3", priority: true}
        ],
        finishedList: [
            {text: "finish1", priority: true},
            {text: "finish2", priority: false}
        ]
    },
    methods:{
        addTask: function(){
            this.todoList.push({text: this.todoText, priority: false})
        },
        finish: function (index) {
            var tempArr = this.todoList.splice(index, 1);
            this.finishedList.push(tempArr[0]);
        },
        deleteTodo: function (index) {
            this.todoList.splice(index, 1);
        },
        restore: function (index) {
            var tempArr = this.finishedList.splice(index, 1);
            this.todoList.push(tempArr[0]);
        },
        deleteFinished: function (index) {
            this.finishedList.splice(index, 1);
        },
        changePriorty: function (index) {
            this.todoList[index].priority = !this.todoList[index].priority;
        }
    },
    computed: {
        sortTodoList: function () {
            // 事项优先级规则：
            // 属性priority为true的事项优先
            return this.todoList.sort(function (a, b) {
                if(a.priority === b.priority) {
                    return 0;
                }else if(a.priority){
                    return -1;
                }else {
                    return 1;
                }
            })
        }
    }
})