import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `
  // <p> Home works </p>
  // `,
  styleUrls: ['./home.component.scss']
  // style: [
  // p { font-weight: bold }
  // ],
})
export class HomeComponent implements OnInit {

  itemCount = 4;
  // btnText: string = 'Add an Item';
  // [tslint] Type string trivially inferred from a string literal, remove type annotation (no-inferrable-types)
  btnText = 'Add an Item';
  goalText = 'Goal 1';
  goals = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;

  }

}
