import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoList = [{
    itemName : 'Coding',
    itemDueDate : '13-01-21',
    itemPriority: 'High',
    itemCategory: 'Work'
  },
  {
    itemName : 'Design',
    itemDueDate : '25-05-21',
    itemPriority: 'Middle',
    itemCategory: 'Business'
  },
  {
    itemName : 'Analyse',
    itemDueDate : '03-04-21',
    itemPriority: 'Low',
    itemCategory: 'Personnal'
  },
  {
    itemName : 'Examen',
    itemDueDate : '03-04-21',
    itemPriority: 'Middle',
    itemCategory: 'Group'
  }
]

  today : number = Date.now();

  constructor(public navCtrl: NavController) {  }

}
