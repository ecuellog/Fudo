import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	//create new service for current User
	currentUser: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  	set 

}
