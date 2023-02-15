import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../common.service";

@Component({
  selector: 'app-masterfile',
  templateUrl: './masterfile.component.html',
  styleUrls: ['./masterfile.component.css']
})
export class MasterfileComponent implements OnInit {
  constructor(private commonService: CommonService) {

  }

  origin_port_key: any;
  origin_port_value: any;
  destination_port_key: any;
  destination_port_value: any;
  via_pol_key: any;
  via_pol_value: any;
  via_pod_key: any;
  via_pod_value: any;
  via_port_key: any;
  via_port_value: any;
  contract_number_key: any;
  contract_number_value: any;
  transit_time_key: any;
  transit_time_value: any;
  service_type_key: any;
  service_type_value: any;
  sailing_date_key: any;
  sailing_date_value: any;
  cargo_type_key: any;
  cargo_type_value: any;
  commodities_key: any;
  commodities_value: any;
  other_charges_key: any;
  other_charges_value: any;
  if_applicable_charges_key: any;
  if_applicable_charges_value: any;
  start_date_key: any;
  start_date_value: any;
  expiry_key: any;
  expiry_value: any;
  remarks_key: any;
  remarks_value: any;
  inclusions_key: any;
  inclusions_value: any;
  load_type_key: any;
  load_type_value: any;


  ngOnInit(): void {
    this.commonService.updateValue.subscribe((Res: any) => {
      if (Res) {
        this.origin_port_key = Res?.origin_port,
        this.origin_port_value = Res?.origin_port_value,
        this.destination_port_key = Res?.destination_port,
        this.destination_port_value = Res?.destination_port_value,
        this.via_pol_key = Res?. via_pol;
        this.via_pol_value = Res?. via_pol_value;
        this.via_pod_key = Res?. via_pod;
        this.via_pod_value = Res?. via_pod_value;
        this.via_port_key = Res?. via_port;
        this.via_port_value = Res?. via_port_value;
        this.contract_number_key = Res?. contract_number;
        this.contract_number_value = Res?. contract_number_value;
        this.transit_time_key = Res?. transit_time;
        this.transit_time_value = Res?. transit_time_value;
        this.service_type_key = Res?. service_type;
        this.service_type_value = Res?. service_type_value;
        this.sailing_date_key = Res?. sailing_date;
        this.sailing_date_value = Res?. sailing_date_value;
        this.cargo_type_key = Res?. cargo_type;
        this.cargo_type_value = Res?. cargo_type_value;
        this.commodities_key = Res?. commodities;
        this.commodities_value = Res?. commodities_value;
        this.other_charges_key = Res?. other_charges;
        this.other_charges_value = Res?. other_charges_value;
        this.if_applicable_charges_key = Res?. if_applicable_charges;
        this.if_applicable_charges_value = Res?. if_applicable_charges_value;
        this.start_date_key = Res?. start_date;
        this.start_date_value = Res?. start_date_value;
        this.expiry_key = Res?. expiry;
        this.expiry_value = Res?. expiry_value;
        this.remarks_key = Res?. remarks;
        this.remarks_value = Res?. remarks_value;
        this.inclusions_key = Res?. inclusions;
        this.inclusions_value = Res?. inclusions_value;
        this.load_type_key = Res?. load_type;
        this.load_type_value = Res?. load_type_value;
      }
    })
  }


  updateNewValue(res: any, key: string) {
    this.commonService.FileData[key] = res.target.value.toUpperCase()
    this.commonService.updateValue.next(this.commonService.FileData)
  }

}
