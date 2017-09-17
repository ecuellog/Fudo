//import Vue from 'vue';
//import App from '../views/index.vue'
 
console.log('Inside');

var app = new Vue({
	el: '#app',
  data: {
    name: 'Edgardo'
  }
})

new Vue({
  el: '#component',
  template: `
    <h2> My Component </h2>
  `
})
