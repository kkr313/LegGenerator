import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonService } from './common.service';
import { LclService } from './lcl-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FclComponent } from './fcl/fcl.component';
import { LclComponent } from './lcl/lcl.component';
import { AirComponent } from './air/air.component';

import { AccordionComponent } from './widget/accordion/accordion.component';
import { LclAccordionComponent } from './widget/lcl-accordion/lcl-accordion.component';

import { MasterfileComponent } from './widget/masterfile/masterfile.component';
import { LclMasterfileComponent } from './widget/lcl-masterfile/lcl-masterfile.component';

import { DownlaodbtnComponent } from './widget/downlaodbtn/downlaodbtn.component';

import { L3fileComponent } from './widget/FCL/l3file/l3file.component';
import { L2fileComponent } from './widget/FCL/l2file/l2file.component';
import { L4fileComponent } from './widget/FCL/l4file/l4file.component';
import { L2chafileComponent } from './widget/FCL/l2chafile/l2chafile.component';
import { L4chafileComponent } from './widget/FCL/l4chafile/l4chafile.component';
import { L1fileComponent } from './widget/FCL/l1file/l1file.component';
import { L5fileComponent } from './widget/FCL/l5file/l5file.component';
import { LclL3fileComponent } from './widget/LCL/lcl-l3file/lcl-l3file.component';
import { LclDownloadbtnComponent } from './widget/lcl-downloadbtn/lcl-downloadbtn.component';
import { LclL2fileComponent } from './widget/LCL/lcl-l2file/lcl-l2file.component';
import { LclL4fileComponent } from './widget/LCL/lcl-l4file/lcl-l4file.component';
import { LclL2chafileComponent } from './widget/LCL/lcl-l2chafile/lcl-l2chafile.component';
import { LclL4chafileComponent } from './widget/LCL/lcl-l4chafile/lcl-l4chafile.component';
import { LclL1fileComponent } from './widget/LCL/lcl-l1file/lcl-l1file.component';
import { LclL5fileComponent } from './widget/LCL/lcl-l5file/lcl-l5file.component';






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
    L4fileComponent,
    L2chafileComponent,
    L4chafileComponent,
    L1fileComponent,
    L5fileComponent,
    LclMasterfileComponent,
    LclAccordionComponent,
    LclL3fileComponent,
    LclDownloadbtnComponent,
    LclL2fileComponent,
    LclL4fileComponent,
    LclL2chafileComponent,
    LclL4chafileComponent,
    LclL1fileComponent,
    LclL5fileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CommonService,
    LclService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
