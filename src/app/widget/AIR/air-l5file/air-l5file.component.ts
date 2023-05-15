import { Component, OnInit } from '@angular/core';
import { AirService } from 'src/app/air-service';

@Component({
  selector: 'app-air-l5file',
  templateUrl: './air-l5file.component.html',
  styleUrls: ['./air-l5file.component.css']
})
export class AirL5fileComponent implements OnInit {
  currencyCodes: string[];
  defineBasis: string[];

  constructor(private airService: AirService ) { 
    this.currencyCodes = airService.getCurrencies();
    this.defineBasis = airService.getBasis();
  }

  origin_key: any;
  origin_value: any;
  destinationt_key: any;
  destination_value: any;
  origin_portcode_key: any;
  origin_portcode_value: any;
  destination_port_value: any;
  destination_portcode_key: any;
  destination_portcode_value: any;
  origin_pincode_key: any;
  origin_pincode_value: any;
  destination_pincode_key: any;
  destination_pincode_value: any;
  origin_country_code_key: any;
  origin_country_code_value: any;
  destination_country_code_key: any;
  destination_country_code_value: any;
  origin_state_code_key: any;
  origin_state_code_value: any;
  destination_state_code_key: any;
  destination_state_code_value: any;
  impo_expo_key: any;
  impo_expo_value: any;
  service_type_key: any;
  service_type_value: any;
  transit_time_key:any;
  transit_time_value: any;
  transport_mode_key: any;
  transport_mode_value: any;
  no_of_axle_key: any;
  no_of_axle_value: any;
  distance_range_key: any;
  distance_range_value: any;
  distance_unit_key: any;
  distance_unit_value: any;
  volume_range_key: any;
  volume_range_value: any;
  volume_unit_key: any;
  volume_unit_value: any;
  weight_range_key: any;
  weight_range_value: any;
  weight_unit_key: any;
  weight_unit_value: any;
  start_date_key: any;
  start_date_value: any;
  expiry_key: any;
  expiry_value: any;
  remarks_key: any;
  remarks_value: any;
  inclusions_key: any;
  inclusions_value: any;
  charge1_name_key: any;
  charge1_name_value: any;
  charge1_min_key: any;
  charge1_min_value: any;
  charge1_basis_key: any;
  charge1_basis_value: any;
  charge1_currency_key: any;
  charge1_currency_value: any;
  charge2_name_key: any;
  charge2_name_value: any;
  charge2_min_key: any;
  charge2_min_value: any;
  charge2_basis_key: any;
  charge2_basis_value: any;
  charge2_currency_key: any;
  charge2_currency_value: any;
  charge3_name_key: any;
  charge3_name_value: any;
  charge3_min_key: any;
  charge3_min_value: any;
  charge3_basis_key: any;
  charge3_basis_value: any;
  charge3_currency_key: any;
  charge3_currency_value: any;
  charge4_name_key: any;
  charge4_name_value: any;
  charge4_min_key: any;
  charge4_min_value: any;
  charge4_basis_key: any;
  charge4_basis_value: any;
  charge4_currency_key: any;
  charge4_currency_value: any;
  charge5_name_key: any;
  charge5_name_value: any;
  charge5_min_key: any;
  charge5_min_value: any;
  charge5_basis_key: any;
  charge5_basis_value: any;
  charge5_currency_key: any;
  charge5_currency_value: any;

  ngOnInit(): void {
    this.airService.updateValue.subscribe((Res: any) => {
      if (Res) {
          this.origin_key = Res?.origin,
          this.origin_value = "",
          this.destinationt_key = Res?.destination,
          this.destination_value = Res?.destination_value,
          this.origin_portcode_key = Res?.origin_portcode,
          this.destination_port_value = Res?.destination_port_value,
          this.destination_portcode_key = Res?.destination_portcode;;
          this.destination_portcode_value = "";
          this.origin_pincode_key = Res?. origin_pincode;
          this.origin_pincode_value = Res?. origin_pincode_value;
          this.destination_pincode_key = Res?. destination_pincode;
          this.destination_pincode_value = Res?. destination_pincode_value;
          this.origin_country_code_key = Res?.origin_country_code,
          this.origin_country_code_value = Res?.origin_country_code_value,
          this.destination_country_code_key = Res?.destination_country_code,
          this.destination_country_code_value = Res?.destination_country_code_value,
          this.origin_state_code_key = Res?.origin_state_code;
          this.origin_state_code_value = Res?.origin_state_code_value;
          this.destination_state_code_key = Res?. destination_state_code;
          this.destination_state_code_value = Res?. destination_state_code_value;
          this.impo_expo_key = Res?. impo_expo;
          this.impo_expo_value = Res?. impo_expo_value;
          this.service_type_key = Res?. service_type;
          this.service_type_value = Res?. service_type_value;
          this.transit_time_key = Res?. transit_time;
          this.transit_time_value = Res?. transit_time_value;
          this.transport_mode_key = Res?. transport_mode;
          this.transport_mode_value = Res?. transport_mode_value;
          this.no_of_axle_key = Res?. no_of_axle;
          this.no_of_axle_value = Res?. no_of_axle_value;
          this.distance_range_key = Res?. distance_range;
          this.distance_range_value = Res?. distance_range_value;
          this.distance_unit_key = Res?. distance_unit;
          this.distance_unit_value = Res?. distance_unit_value;
          this.volume_range_key = Res?. volume_range;
          this.volume_range_value = Res?. volume_range_value;
          this.volume_unit_key = Res?. volume_unit;
          this.volume_unit_value = Res?. volume_unit_value;
          this.weight_range_key = Res?. weight_range;
          this.weight_range_value = Res?. weight_range_value;
          this.weight_unit_key = Res?. weight_unit;
          this.weight_unit_value = Res?. weight_unit_value;
          this.start_date_key = Res?. start_date;
          this.start_date_value = Res?. start_date_value;
          this.expiry_key = Res?. expiry;
          this.expiry_value = Res?. expiry_value;
          this.remarks_key = Res?. remarks;
          this.remarks_value = Res?. remarks_value;
          this.inclusions_key = Res?. inclusions;
          this.inclusions_value = Res?. inclusions_value;
          this.charge1_name_key = Res?. charge1_l5_name;
          this.charge1_name_value = Res?. charge1_l5_name_value;
          this.charge1_min_key = Res?. charge1_l5_min;
          this.charge1_min_value = Res?. charge1_l5_min_value;
          this.charge1_basis_key = Res?. charge1_l5_basis;
          this.charge1_basis_value = Res?. charge1_l5_basis_value;
          this.charge1_currency_key = Res?. charge1_l5_currency;
          this.charge1_currency_value = Res?. charge1_l5_currency_value;
          this.charge2_name_key = Res?. charge2_l5_name;
          this.charge2_name_value = Res?. charge2_l5_name_value;
          this.charge2_min_key = Res?. charge2_l5_min;
          this.charge2_min_value = Res?. charge2_l5_min_value;
          this.charge2_basis_key = Res?. charge2_l5_basis;
          this.charge2_basis_value = Res?. charge2_l5_basis_value;
          this.charge2_currency_key = Res?. charge2_l5_currency;
          this.charge2_currency_value = Res?. charge2_l5_currency_value;
          this.charge3_name_key = Res?. charge3_l5_name;
          this.charge3_name_value = Res?. charge3_l5_name_value;
          this.charge3_min_key = Res?. charge3_l5_min;
          this.charge3_min_value = Res?. charge3_l5_min_value;
          this.charge3_basis_key = Res?. charge3_l5_basis;
          this.charge3_basis_value = Res?. charge3_l5_basis_value;
          this.charge3_currency_key = Res?. charge3_l5_currency;
          this.charge3_currency_value = Res?. charge3_l5_currency_value;
          this.charge4_name_key = Res?. charge4_l5_name;
          this.charge4_name_value = Res?. charge4_l5_name_value;
          this.charge4_min_key = Res?. charge4_l5_min;
          this.charge4_min_value = Res?. charge4_l5_min_value;
          this.charge4_basis_key = Res?. charge4_l5_basis;
          this.charge4_basis_value = Res?. charge4_l5_basis_value;
          this.charge4_currency_key = Res?. charge4_l5_currency;
          this.charge4_currency_value = Res?. charge4_l5_currency_value;
          this.charge5_name_key = Res?. charge5_l5_name;
          this.charge5_name_value = Res?. charge5_l5_name_value;
          this.charge5_min_key = Res?. charge5_l5_min;
          this.charge5_min_value = Res?. charge5_l5_min_value;
          this.charge5_basis_key = Res?. charge5_l5_basis;
          this.charge5_basis_value = Res?. charge5_l5_basis_value;
          this.charge5_currency_key = Res?. charge5_l5_currency;
          this.charge5_currency_value = Res?. charge5_l5_currency_value;
      }
      localStorage.setItem('L5dataSource', JSON.stringify(Res));
    })
  }

  updateNewValue(get: any, key: string) {
    if(key.indexOf('_l5') !== -1 || key === "transport_mode_value"){
      this.airService.FileData[key] = get.target.value
    }else{
      this.airService.FileData[key] = get.target.value.toUpperCase()
    }
    this.airService.updateValue.next(this.airService.FileData);
    localStorage.setItem('L5dataSource', JSON.stringify(this.airService.FileData));
  }

}
