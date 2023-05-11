import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ng-content-parent',
  templateUrl: './ng-content-parent.component.html',
  styleUrls: ['./ng-content-parent.component.css']
})
export class NgContentParentComponent implements OnInit {
adminRole:boolean = false
  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {
    
  }

}
