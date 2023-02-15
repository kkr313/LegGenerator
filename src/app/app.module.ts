import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonService } from './common.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FclComponent } from './fcl/fcl.component';
import { LclComponent } from './lcl/lcl.component';
import { AirComponent } from './air/air.component';
import { AccordionComponent } from './widget/accordion/accordion.component';
import { MasterfileComponent } from './widget/masterfile/masterfile.component';
import { L3fileComponent } from './widget/FCL/l3file/l3file.component';
import { DownlaodbtnComponent } from './widget/downlaodbtn/downlaodbtn.component';
import { L2fileComponent } from './widget/FCL/l2file/l2file.component';
import { L4fileComponent } from './widget/FCL/l4file/l4file.component';




@NgModule({
  declarations: [
    AppComponent,
    FclComponent,
    LclComponent,
    AirComponent,
    AccordionComponent,
    MasterfileComponent,
    L3fileComponent,
    DownlaodbtnComponent,
    L2fileComponent,
    L4fileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
