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

  RemoveLocalStorage(Mode: any){
    if(Mode === "lclMode"){
      // // localStorage.removeItem('L3dataSource');
      // localStorage.removeItem('L2dataSource');
      // localStorage.removeItem('L4dataSource');
      // localStorage.removeItem('L2ChadataSource');
      // localStorage.removeItem('L4ChadataSource');
      // localStorage.removeItem('L1dataSource');
      // localStorage.removeItem('L5dataSource');
      // localStorage.removeItem('selectedLegs');
      // localStorage.getItem('L3dataSource');
    }

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
