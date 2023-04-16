import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Legs Generator';
  viewMode = 'tab1';
  Mode = 'fclMode';
  isActive: any;

  ngOnInit() {}

  onTabChange(){
    this.Mode = 'fclMode';
  }
  
 
}
