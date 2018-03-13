import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([
    'Goal 1',
    'Goal 2',
    'Goal 3',
  ]);

  goal = this.goals.asObservable();

  constructor() { }

  changeGoal (goalNew) {
    this.goals.next(goalNew);
  }
}
