import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApicallService } from './apicall.service';
import * as $ from 'jquery';
import 'bootstrap';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = 'no message';

  constructor(private ApicallService: ApicallService){}

  public ngOnInit(){
  	$(document).ready(
  		alert('document loaded')
  	);
  }

  register(f: NgForm){
  	//define params
  	console.log(f.value)
  	this.ApicallService.register(f.value)
  		.subscribe(
  			data => {
  				this.message = data['message'];
  				$('#registerModal').trigger('click');
  			},
  			error => {
  				console.log(error.error.message);
  				this.message = error.error.message;
  			},
  			() => {
  				console.log(this.message)
  			}
  		);
  }

  login(f: NgForm){
  	//define params
  	console.log(f.value)
  	this.ApicallService.register(f.value)
  		.subscribe(
  			data => {
  				this.message = data['message'];
  				$('#registerModal').trigger('click');
  			},
  			error => {
  				console.log(error.error.message);
  				this.message = error.error.message;
  			},
  			() => {
  				console.log(this.message)
  			}
  		);
  }
}
