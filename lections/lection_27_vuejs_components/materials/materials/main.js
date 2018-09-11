Vue.component('test-component', {
  // camelCase в JavaScript
  props: ['value', 'title', 'list', 'counter'],
  // props: {
  //   value: Number,
  //   title: String,
  //   list: Array,
  //   counter: Number
  // },
  data: function () {
    return {
    }
  },
  methods: {
    onInput: function(ev){
      this.$emit('update', ev.target.value)
    }
  },
  template: `
    <div>
      Inner counter: {{ counter }}
      <br />
      <input 
        v-bind:value="counter"
        v-on:input="onInput($event)"
        />
    </div>
  `
});


Vue.component('foo-bar', {
  // props: [
  //   'title'
  // ],
  props: {
    title: String,
    list: Array,
    obj: Object
  },
  data: function() {
    return {
      x: 10
    }
  },
  methods: {
    onClick: function(){
      console.log('click');
    }
  },
  template: `
    <div>
      <h3> {{ title }} </h3>
      <span>{{ obj.id }}</span>
      Hello foo bar | {{ x }}
      <button v-on:click="onClick"> click </button>
    </div>
  `
});



Vue.component('select-list', {
  props: ['list', 'keytitle'],
  data: function(){
    return {
      selected: ''
    }
  },
  methods: {
    onChange: function(){
      this.$emit('country-change', this.selected);
    }
  },
  template: `
    <div>
      <select v-on:change="onChange" v-model="selected">
        <option v-for="item of list" v-bind:value="item.key">
          {{ keytitle ? item[keytitle] : item }}
        </option>
      </select>

    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    message: 10.5,
    text: 'Hello world!',
    foo: [1, 7, 83],
    counter1: 10,
    counter2: 50,
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    obj: {
      id: 10,
      title: 'yo',
      class: "dodo"
    },
    countries: [
      {
        title: 'Ukraine',
        key: 'ua'
      },
      {
        title: 'German',
        key: 'de'
      }
    ],
    cities: {
      ua: ['Kyiv', 'Kharkiv'],
      de: ['Berlin', 'Munich']
    },
    selectedCountry: ''
  },
  methods: {
    UpdateCounter1: function(val){
      this.counter2 = val;
    },
    UpdateCounter2: function(val){
      this.counter2 = val;
    },
    clickEv: function(ev){
      ev.stopPropagation();
      console.log('click')
    },
    getSumMethod: function(){
      return parseInt(this.counter1) + parseInt(this.counter2);
    },
    countryUpd: function(val){
      this.selectedCountry = val;
    }
  },
  computed: {
    getSum: function(){
      return parseInt(this.counter1) + parseInt(this.counter2);
    },
    getList: function(){
      return this.foo.concat([7, 8, 9]);
    }
  }
});