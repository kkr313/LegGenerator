import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import LclData from 'src/assets/data/legsheader.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LclService {

  constructor() { }

  FileData: any = {
    origin_port: LclData.LCL[0].L3.col1.key,
    origin_port_value: LclData.LCL[0].L3.col1.value,
    destination_port: LclData.LCL[0].L3.col2.key,
    destination_port_value: LclData.LCL[0].L3.col2.value,
    origin_portcode: LclData.LCL[0].L1.col3.key,
    origin_portcode_value: LclData.LCL[0].L3.col2.value,
    destination_portcode: LclData.LCL[0].L1.col4.key,
    destination_portcode_value: LclData.LCL[0].L3.col1.value,
    via_pol: LclData.LCL[0].L3.col3.key,
    via_pol_value: LclData.LCL[0].L3.col3.value,
    via_pod: LclData.LCL[0].L3.col4.key,
    via_pod_value: LclData.LCL[0].L3.col4.value,
    via_port: LclData.LCL[0].L3.col5.key,
    via_port_value: LclData.LCL[0].L3.col5.value,
    transit_time: LclData.LCL[0].L3.col6.key,
    transit_time_value: LclData.LCL[0].L3.col6.value,
    service_type: LclData.LCL[0].L3.col7.key,
    service_type_value: LclData.LCL[0].L3.col7.value,
    service_name: LclData.LCL[0].L3.col8.key,
    service_name_value: LclData.LCL[0].L3.col8.value,
    cargo_type: LclData.LCL[0].L3.col9.key,
    cargo_type_value: LclData.LCL[0].L3.col9.value,
    commodities: LclData.LCL[0].L3.col10.key,
    commodities_value: LclData.LCL[0].L3.col10.value,
    start_date: LclData.LCL[0].L3.col11.key,
    start_date_value: LclData.LCL[0].L3.col11.value,
    expiry: LclData.LCL[0].L3.col12.key,
    expiry_value: LclData.LCL[0].L3.col12.value,
    remarks: LclData.LCL[0].L3.col13.key,
    remarks_value: LclData.LCL[0].L3.col13.value,
    inclusions: LclData.LCL[0].L3.col14.key,
    inclusions_value: LclData.LCL[0].L3.col14.value,

    origin: LclData.LCL[0].L1.col1.key,
    origin_value: LclData.LCL[0].L1.col1.value,
    destination: LclData.LCL[0].L1.col2.key,
    destination_value: LclData.LCL[0].L1.col2.value,
    origin_pincode: LclData.LCL[0].L1.col5.key,
    origin_pincode_value: LclData.LCL[0].L1.col5.value,
    destination_pincode: LclData.LCL[0].L1.col6.key,
    destination_pincode_value: LclData.LCL[0].L1.col6.value,
    origin_country_code: LclData.LCL[0].L1.col7.key,
    origin_country_code_value: LclData.LCL[0].L3.col1.value.substring(0, 2),
    destination_country_code: LclData.LCL[0].L1.col8.key,
    destination_country_code_value: LclData.LCL[0].L3.col2.value.substring(0, 2),
    origin_state_code: LclData.LCL[0].L1.col9.key,
    origin_state_code_value: LclData.LCL[0].L1.col9.value,
    destination_state_code: LclData.LCL[0].L1.col10.key,
    destination_state_code_value: LclData.LCL[0].L1.col10.value,
    impo_expo: LclData.LCL[0].L1.col11.key,
    impo_expo_value: LclData.LCL[0].L1.col11.value,
    transport_mode: LclData.LCL[0].L1.col12.key,
    transport_mode_value: LclData.LCL[0].L1.col12.value,
    no_of_axle: LclData.LCL[0].L1.col13.key,
    no_of_axle_value: LclData.LCL[0].L1.col13.value,
    distance_range: LclData.LCL[0].L1.col14.key,
    distance_range_value: LclData.LCL[0].L1.col14.value,
    distance_unit: LclData.LCL[0].L1.col15.key,
    distance_unit_value: LclData.LCL[0].L1.col15.value,
    volume_range: LclData.LCL[0].L1.col16.key,
    volume_range_value: LclData.LCL[0].L1.col16.value,
    volume_unit: LclData.LCL[0].L1.col17.key,
    volume_unit_value: LclData.LCL[0].L1.col17.value,
    weight_range: LclData.LCL[0].L1.col18.key,
    weight_range_value: LclData.LCL[0].L1.col18.value,
    weight_unit: LclData.LCL[0].L1.col19.key,
    weight_unit_value: LclData.LCL[0].L1.col19.value,
  }

  updateValue = new BehaviorSubject(this.FileData);


}
