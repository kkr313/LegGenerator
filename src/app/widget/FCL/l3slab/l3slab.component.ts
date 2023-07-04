import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../common.service";

@Component({
  selector: 'app-l3slab',
  templateUrl: './l3slab.component.html',
  styleUrls: ['./l3slab.component.css']
})
export class L3slabComponent implements OnInit {

  currencyCodes: string[];
  loadTypes: string[];

  constructor(private commonService: CommonService) {
    this.currencyCodes = commonService.getCurrencies();
    this.loadTypes = commonService.getLoadType();
  }

  from_port_key: any;
  from_port_value: any;
  to_port_key: any;
  to_port_value: any;
  service_type_key: any;
  service_type_value: any;
  commodity_key: any;
  commodity_value: any;
  cargo_type_key: any;
  cargo_type_value: any;
  contract_key: any;
  contract_value: any;
  load_type_key: any;
  load_type_value: any;
  currency_key: any;
  currency_value: any;
  slab_key: any;
  slab_value: any;
  mode_of_transportation_key: any;
  mode_of_transportation_value: any;
  dangerous_cargo_key: any;
  dangerous_cargo_value: any;
  transit_time_key: any;
  transit_time_value: any;
  start_date_key: any;
  start_date_value: any;
  expiry_key: any;
  expiry_value: any;
  from_slab_key: any;
  from_slab_value: any;
  to_slab_key: any;
  to_slab_value: any;

  ngOnInit(): void {
    this.commonService.updateValue.subscribe((Res: any) => {
      if (Res) {
        this.from_port_key = Res?. origin_port;
        this.from_port_value = Res?.origin_port_value;
        this.to_port_key = Res?.destination_port;
        this.to_port_value = Res?.destination_port_value;
        this.service_type_key = Res?.service_type;
        this.service_type_value = Res?.service_type_value;
        this.commodity_key = Res?.commodities;
        this.commodity_value = Res?.commodities_value;
        this.cargo_type_key = Res?.cargo_type;
        this.cargo_type_value = Res?.cargo_type_value;
        this.contract_key = Res?.contract_number;
        this.contract_value = Res?.contract_number_value;
        this.load_type_key = Res?.load_type;
        this.load_type_value = Res?.load_type_value;
        this.currency_key = Res?.charge1_l3_currency;
        this.currency_value = Res?.charge1_l3_currency_value;
        this.slab_key = Res?.slab;
        this.slab_value = Res?.slab_value;
        this.mode_of_transportation_key = Res?.transport_mode;
        this.mode_of_transportation_value = Res?.transport_mode_value;
        this.dangerous_cargo_key = Res?.dangerous_cargo;
        this.dangerous_cargo_value = Res?.dangerous_cargo_value;
        this.transit_time_key = Res?.transit_time;
        this.transit_time_value = Res?.transit_time_value;
        this.start_date_key = Res?.start_date;
        this.start_date_value = Res?.start_date_value;
        this.expiry_key = Res?.expiry;
        this.expiry_value = Res?.expiry_value;
        this.from_slab_key = Res?.from_slab;
        this.from_slab_value = Res?.from_slab_value;
        this.to_slab_key = Res?.to_slab;
        this.to_slab_value = Res?.to_slab_value;
      }
      let localStorageData: any = {};
      Object.keys(Res).forEach((key, index) => {
        if (index % 2 !== 0) {
          localStorageData[key] = Res[key];
        }
      });
      localStorage.setItem('L3slab', JSON.stringify(localStorageData));
    })
  }

  updateNewValue(get: any, key: string) {
    if(key === "cargo_type_value"){
      this.commonService.FileData[key] = get.target.value
    }
    else{
      this.commonService.FileData[key] = get.target.value.toUpperCase()
    }
    this.commonService.updateValue.next(this.commonService.FileData);
    localStorage.setItem('L3slab', JSON.stringify(this.commonService.FileData));
  }

}
