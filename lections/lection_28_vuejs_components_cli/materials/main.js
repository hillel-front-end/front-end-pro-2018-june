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
    prop: 'checked',
    event: 'change'
  },
  props: ['checked'],
  template: `
    <div>
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
      <hr />
      <slot></slot>
      <slot name="input"></slot>
      <slot name="fooBar"></slot>
      

    </div>
  `
});


let app = new Vue({
  el: '#app',
  data: {
    value: "Some value",
    num: 204,
    list: [1, 2, 3, 4]
  },
  components: {
    some: someComponent
  }
})