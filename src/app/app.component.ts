import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  friends = new FormControl();

  // constant rates
  costOfLunch = 85;
  costOfExtraRoti = 30;
  showOrderDetails: boolean = false;
  showReports:boolean = false;
  displayedColumns = ['name','pendingBalance','dateStart','dateEnd'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // available options in select boxes
  lunches = [1, 2, 3, 4, 5, 6];
  extraRotiRolls = [1, 2, 3, 4, 5, 6];
  members = ['Yashodhan', 'Sandesh', 'Sumit', 'Kundan', 'Rushikesh', 'Keyur', 'Shubham', 'Manish'];

  // user inputs after selection
  numberOfLunchesSelected: number;
  numberOfRotiRollsSelected: number;
  todaysMembers = [];

  // variables for calculations
  todaysTotal: number;
  todaysTotalPerHead: number;

  // functions

  placeOrder() {

    // calculating today's total cost
    this.todaysTotal = (this.costOfLunch * this.numberOfLunchesSelected) + (this.costOfExtraRoti * this.numberOfRotiRollsSelected);

    // calculating today's cost per head
    this.todaysTotalPerHead = (this.todaysTotal / this.todaysMembers.length);

    // showing order details for today
    this.showOrderDetails = true;
  }

  viewReports(){
    this.showReports = true;
  }

}

export interface PeriodicElement {
  name: string;
  pendingBalance:number;
  dateStart:string;
  dateEnd:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Yashodhan',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'},
  {name: 'Sandesh',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'},
  {name: 'Sumit',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'},
  {name: 'Kundan',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'},
  {name: 'Rushikesh',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'},
  {name: 'Keyur',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'},
  {name: 'Shubham',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'},
  {name: 'Manish',pendingBalance:0,dateStart:'01/06/2018',dateEnd:'30/06/2018'}
];