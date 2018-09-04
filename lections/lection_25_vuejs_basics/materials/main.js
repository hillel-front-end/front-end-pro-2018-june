// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 10.5,
//     foo: [1, 7, 83]
//   }
// })

// console.log(app);

// setTimeout(() => {
//   console.log(app.message);
//   app.message += 200;
// }, 1000)

// // ---------------------------------------

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     className: 'active',
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   }
// })

// setInterval(() => {
//   app2.message = 'Вы загрузили эту страницу в: ' + new Date().toLocaleString();
// }, 500)

// // // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 3000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       {
//         text: 'Изучить JavaScript'
//       },
//       {
//         texts: 'Изучить Vue'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ]
//   }
// })

// console.log(app4.todos)




// // // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!'
//   },
//   methods: {
//     clickMeEvent(event) {
//       // console.log(arguments, this);
//       this.message += ' click';
//     }
//   }
// })

// // // ---------------------------------------

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Привет, Vue!',
//     result: 'RESULT',
//     x: 10
//   }
// })


// -----------------------------



var taskManager = new Vue({
  el: '.task-manager',
  data: {
    listL: [1, 2, 3, 4],
    listR: []
  },
  methods: {
    moveR() {
      this.listR.push( this.listL.pop() );
    },
    moveL() {
      this.listL.push( this.listR.pop() );
    }
  }
})
