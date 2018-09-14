var someComponent = {
  data: function(){
    return {
      x: 10
    }
  },
  template: '<div>{{ x }}</div>'
}

Vue.component('model-example', {
  model: {
    prop: 'num',
    event: 'change'
  },
  props: ['num', 'x'],
  data: function(){
    return {
      value: 'Inner hello world'
    }
  },
  template: `
    <div>
      <input
        type="checkbox"
        v-bind:checked="num"
        v-on:change="$emit('change', $event.target.checked)"
      >
      <hr />
      <slot></slot>
      <hr />
      {{ value }} 
      <hr />
      <slot name="fooBar"></slot> 
    </div>
  `
});


let app = new Vue({
  el: '#app',
  data: {
    value: "Some value",
    param: true,
    list: [1, 2, 3, 4]
  },
  components: {
    'some': someComponent
  }
})