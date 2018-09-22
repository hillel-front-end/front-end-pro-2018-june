<template>
  <div class="messageBox" v-if="msgList.length">
      <div class="messageBox__remove" v-on:click="closeMsgBox"></div>
      <div class="message" 
        v-for="(message, key) of msgList"
        v-bind:key="key"
        v-on:dblclick="closeMsg(message.id)"
        v-bind:class="setClass(message.class)">

          <span class="message__text" >
              {{ message.text }}
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: ['messageProp'],
  data () {
    return {
        message: this.messageProp,
        counter: 0,
        msgList: []
    }
  },
  created: onUpdate,
  watch: {
      messageProp: {
          deep: true,
          handler: onUpdate
      }
  },
  methods: {
      closeMsg(id){
           this.msgList = this.msgList.filter(msg => msg.id !== id);
      },
      closeMsgBox(){
           this.msgList = [];
      },
      setActionMsg(id){
          for(let i = 0; i < this.msgList.length; i++){
              if (this.msgList[i].id === id){
                this.msgList[i].action = 'remove';

                break;
              }
          }
      },
      removeMsg(){
          this.msgList = this.msgList.filter(msg => msg.action != 'remove');
      },
      setClass(style){
          return [ style || 'info' ];
      }
  },
  mounted: function(){
      setInterval(this.removeMsg, 2000);
  }
}


function onUpdate(oldVal, newVal = { text: 'default' }){
    if (newVal.text == 'default' || Object.keys(newVal).length === 0){
        return;
    }

    let currentId = this.counter;
    var errorList = this.msgList.filter(msg => msg.class === 'error');
    var otherList = this.msgList.filter(msg => msg.class !== 'error');

    if (newVal.class != 'error'){
            otherList.unshift({
            id: this.counter++,
            action: 'show',
            text: newVal.text,
            class: newVal.class
        });
    } else {
            errorList.unshift({
            id: this.counter++,
            action: 'show',
            text: newVal.text,
            class: newVal.class
        });
    }

    this.msgList = errorList.concat(otherList);

    this.$nextTick(function(){
        var type = newVal.class;
        // setTimeout(this.removeMsg, 3000, currentId);

        switch(type) {
            case 'error': {
                setTimeout(this.setActionMsg, 10000, currentId);
                    break;
            }

            default: {
                setTimeout(this.setActionMsg, 2000, currentId);
            }
        }
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messageBox {
    position: fixed;
    top: 100px;
    right: 0;
    padding: 20px;
    width: 200px;
    border: 2px solid black;
}

.messageBox__remove {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: blueviolet;
}

.message {
    padding: 2px;
    border-bottom: 1px solid grey;
    user-select: none;
    cursor: pointer;
    transition: .1s;
}
.message:hover {
    box-shadow: 1px 1px 4px inset;
}

.message.error {
    background-color: rgba(255, 0, 0, 0.3);
}

.message.info {
    background-color: rgba(251, 255, 0, 0.3);
}

.message.success {
    background-color: rgba(0, 255, 0, 0.3);
}

.message:last-child {
    border-bottom: 0;
}
</style>
