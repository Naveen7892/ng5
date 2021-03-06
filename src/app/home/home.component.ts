import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `
  // <p> Home works </p>
  // `,
  styleUrls: ['./home.component.scss'],
  // style: [
  // p { font-weight: bold }
  // ],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
    // trigger('goals', [
    //   transition('* => *', [

    //     query(':enter', style({ opacity: 0 }), {optional: true}),

    //     query(':enter', stagger('300ms', [
    //       animate('.6s ease-in', keyframes([
    //         style({ opacity: 0, transform: 'translateY(-75%)', offset: 0}),
    //         style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
    //         style({ opacity: 1, transform: 'translateY(0)', offset: 1.0}),
    //       ]))]), {optional: true}),

    //     query(':leave', stagger('300ms', [
    //       animate('.6s ease-out', keyframes([
    //         style({ opacity: 1, transform: 'translateY(0)', offset: 0}),
    //         style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
    //         style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
    //       ]))]), {optional: true})
    //   ])
    // ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount = 4;
  // btnText: string = 'Add an Item';
  // [tslint] Type string trivially inferred from a string literal, remove type annotation (no-inferrable-types)
  btnText = 'Add an Item';
  goalText = 'Goal 1';
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
}
