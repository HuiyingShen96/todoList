# todoList
a simple demo of using vue.js

初学vue的一个小demo

效果截图：

![image](https://github.com/oSHYo/todoList/blob/master/img/xiaoguotu.png)

【初学Vue.js笔记】
### 1. 声明式渲染
- `<p>{{message}}</p>`
- `<p v-bind:title="message">Hi!</p>`
### 2. 条件与循环
- `<p v-if="seen>如果seen为true，你就能看到我</p>`
- `<li v-for="item in items">{{item.text}}</li>`
### 3. 处理用户输入
- `<button v-on:click="change">change</button>`
- `<input v-model="message" />`
### 4. 组件化应用构建
```javascript
//定义名为todo-item的新组件
Vue.component('todo-item',{
  template: '<li>这是一个待办项</li>'
});
```
```html
<!--创建一个todo-item组件实例-->
<todo-item></todo-item>
```
### 5. 与自定义元素的关系

vue.js API思维导图：

![vue.js API思维导图](https://github.com/oSHYo/todoList/blob/master/img/API.png)
