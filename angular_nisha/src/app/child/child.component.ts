import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() uName : string | undefined
@Output() notify: EventEmitter<string> = new EventEmitter<string>()
passData(){
  this.notify.emit("this is from child component")
}
  constructor() { }
  ngOnInit(): void {
  }

}