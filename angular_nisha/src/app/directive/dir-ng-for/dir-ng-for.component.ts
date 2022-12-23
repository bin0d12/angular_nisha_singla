import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-ng-for',
  templateUrl: './dir-ng-for.component.html'
})
export class DirNgForComponent implements OnInit {
  employeeData : String[] = ["binod", "sameer","sujit","swapnil"]
  users : any[] = [
    {id: 1, name: "Binod", age: 27},
    {id: 2, name: "sameer", age: 26},
    {id: 3, name: "sujit", age: 23},
    {id: 4, name: "swapnil", age: 28},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
