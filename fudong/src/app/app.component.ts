import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApicallService } from './apicall.service';
import * as $ from 'jquery';
import 'bootstrap';
import base64url from 'base64url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  message = 'no message';
  loggedIn = false;
  currentUser = 'none';

  constructor(private ApicallService: ApicallService){}

  register(f: NgForm){
  	//define params
  	console.log(f.value);
  	this.ApicallService.register(f.value)
  		.subscribe(
  			data => {
  				this.message = data['message'];
  				$('#registerModal').trigger('click');
  				this.login(f);
  			},
  			error => {
  				console.log(error.error.message);
  				this.message = error.error.message;
  			},
  			() => {
  				console.log(this.message);
  			}
  		);
  }

  login(f: NgForm){
  	//define params
  	console.log(f.value);
  	this.ApicallService.login(f.value)
  		.subscribe(
  			data => {
  				this.message = data['message'];
  				console.log(data['token']);
  				this.loggedIn = true; //idk about this yet
  				$('#loginModal').trigger('click');
  				var token = data['token'];
  				var tokenPayload = base64url.decode(token.split('.')[1]);
  				tokenPayload = JSON.parse(tokenPayload);
  				this.currentUser = tokenPayload['name'];
  				this.message = 'Welcome ' + tokenPayload['name'] + '!';
  			},
  			error => {
  				console.log(error.error.message);
  				this.message = error.error.message;
  			},
  			() => {
  				console.log(this.message);
  			}
  		);
  }
}
