import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }
   userName: string = "Binod";
   childData: string | undefined
   parentClick(data: string){
    this.childData =data
   }
  ngOnInit(): void {
  }

}
