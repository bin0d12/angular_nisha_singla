import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// impor { ViewEncapsulation }

@Component({
  selector: 'app-encapsualtion',
  templateUrl: './encapsualtion.component.html',
  styleUrls: ['./encapsualtion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EncapsualtionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
