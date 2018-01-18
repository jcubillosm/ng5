import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	itemCount: number;
	btnText: string;
	goalText: string;
	goals = [];
  constructor() { 
  	
  	this.btnText = 'Add an item';
  	this.goalText = 'My first life goal';
  }

  ngOnInit() {
  	this.itemCount = this.goals.length;
  }
  addItem() {
  	this.goals.push(this.goalText);
  	this.goalText = ' ';
  	this.itemCount = this.goals.length;
  }

}
