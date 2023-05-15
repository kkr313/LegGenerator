import { Component, OnInit } from '@angular/core';
import { AirService } from 'src/app/air-service';

@Component({
  selector: 'app-air-masterfile',
  templateUrl: './air-masterfile.component.html',
  styleUrls: ['./air-masterfile.component.css']
})
export class AirMasterfileComponent implements OnInit {

  constructor(private airService: AirService) { }

  origin_port_key: any;
  origin_port_value: any;
  destination_port_key: any;
  destination_port_value: any;
  via_route_key: any;
  via_route_value: any;
  transit_time_key: any;
  transit_time_value: any;
  service_type_key: any;
  service_type_value: any;
  frequency_key: any;
  frequency_value: any;
  cargo_type_key: any;
  cargo_type_value: any;
  commodities_key: any;
  commodities_value: any;
  start_date_key: any;
  start_date_value: any;
  expiry_key: any;
  expiry_value: any;
  remarks_key: any;
  remarks_value: any;
  inclusions_key: any;
  inclusions_value: any;
  origin_key: any;
  origin_value: any;
  destinationt_key: any;
  destination_value: any;
  origin_portcode_key: any;
  origin_portcode_value: any;
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

  ngOnInit(): void {
    this.airService.updateValue.subscribe((Res: any) => {
      if (Res) {
        this.origin_port_key = Res?.origin_port,
        this.origin_port_value = Res?.origin_port_value,
        this.destination_port_key = Res?.destination_port,
        this.destination_port_value = Res?.destination_port_value,
        this.via_route_key = Res?.via_route;
        this.via_route_value = Res?.via_route_value;
        this.transit_time_key = Res?.transit_time;
        this.transit_time_value = Res?.transit_time_value;
        this.service_type_key = Res?.service_type;
        this.service_type_value = Res?.service_type_value;
        this.frequency_key = Res?.frequency;
        this.frequency_value = Res?.frequency_value;
        this.cargo_type_key = Res?.cargo_type;
        this.cargo_type_value = Res?.cargo_type_value;
        this.commodities_key = Res?.commodities;
        this.commodities_value = Res?.commodities_value;
        this.start_date_key = Res?.start_date;
        this.start_date_value = Res?.start_date_value;
        this.expiry_key = Res?.expiry;
        this.expiry_value = Res?.expiry_value;
        this.remarks_key = Res?.remarks;
        this.remarks_value = Res?.remarks_value;
        this.inclusions_key = Res?.inclusions;
        this.inclusions_value = Res?.inclusions_value;

        this.origin_key = Res?.origin,
        this.origin_value = Res?.origin_value,
        this.destinationt_key = Res?.destination,
        this.destination_value = Res?.destination_value,
        this.origin_portcode_key = Res?.origin_portcode,
        this.origin_portcode_value = this.destination_port_value,
        this.destination_portcode_key = Res?.destination_portcode;
        this.destination_portcode_value = this.origin_port_value;
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
      }
    })
  }

  updateNewValue(res: any, key: string) {
    if (key === "cargo_type_value" || key === "transport_mode_value") {
      this.airService.FileData[key] = res.target.value
    } else {
      this.airService.FileData[key] = res.target.value.toUpperCase()
    }
    this.airService.updateValue.next(this.airService.FileData)
  }
}
