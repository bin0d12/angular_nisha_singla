import { Component, Input, OnInit,SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-pratice',
  templateUrl: './life-cycle-hook-pratice.component.html'
})
export class LifeCycleHookPraticeComponent implements OnInit {
  @Input() myNumber: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}


