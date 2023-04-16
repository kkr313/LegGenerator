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
      }
    })
  }

  updateNewValue(res: any, key: string) {
    if (key === "cargo_type_value") {
      this.airService.FileData[key] = res.target.value
    } else {
      this.airService.FileData[key] = res.target.value.toUpperCase()
    }
    this.airService.updateValue.next(this.airService.FileData)
  }
}
