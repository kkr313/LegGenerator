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
  ngOnInit() {
    
  }

  onTabChange(){
    this.Mode = 'fclMode';
  }

  constructor(private commonServcie:CommonService){

  }

  downloaData(){
    // this.l3Data = [{
    //   origin_port : this.origin_port_value,
    //   destination_port : this.destination_port_value
    // }]
    // this.commonServcie.downloadFile(this.l3Data, 'FCL_L3');
    // console.log
  }
  
 
}
