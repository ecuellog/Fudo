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
  el: '#navBar',
  template: `
    <nav class='navbar fixed-top navbar-inverse bg-inverse'>
      <a class='navbar-brand text-warning' href='#'> Fudo </a>
    </nav>
  `
})

/* 
 * Notes: component.js
 * will include all components
 * just include with script tag within html view.
 */

