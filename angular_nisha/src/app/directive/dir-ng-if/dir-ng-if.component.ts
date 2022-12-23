import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-ng-if',
  templateUrl: './dir-ng-if.component.html'
})
export class DirNgIfComponent implements OnInit {
  isUserLogIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
