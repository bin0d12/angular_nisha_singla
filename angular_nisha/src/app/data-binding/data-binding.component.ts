import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {
  imageUrl: String = '../../assets/Screenshot (15).png'
 interpolationData: String = "this is interpolation data binding"
 btnStatus: boolean = false
 userName: any
  constructor() { }

  ngOnInit(): void {
  }
changeTitle(){
  this.interpolationData = "this is change after event binding"
}
}
