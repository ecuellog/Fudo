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
  	<nav class='navbar fixed-top navbar-purple'>
    	<a class='navbar-brand navbar-link fudo-home' href='#'> Fudo </a>
		<a class='navbar-brand navbar-link' href='#'> Login </a>
    </nav>
  `
})

/* 
 * Notes: component.js
 * will include all components
 * just include with script tag within html view.
 */

