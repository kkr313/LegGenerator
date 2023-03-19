import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../common.service";

@Component({
  selector: 'app-l4file',
  templateUrl: './l4file.component.html',
  styleUrls: ['./l4file.component.css']
})
export class L4fileComponent implements OnInit {

  currencyCodes: string[];
  defineBasis: string[];
  loadTypes: string[];

  constructor(private commonService: CommonService) {
    this.currencyCodes = commonService.getCurrencies();
    this.defineBasis = commonService.getBasis();
    this.loadTypes = commonService.getLoadType();
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
  cfs_stuffing_key: any;
  cfs_stuffing_value: any;
  service_type_key: any;
  service_type_value: any;
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
  charge1_name_key: any;
  charge1_name_value: any;
  charge1_basis_key: any;
  charge1_basis_value: any;
  charge1_currency_key: any;
  charge1_currency_value: any;
  charge2_name_key: any;
  charge2_name_value: any;
  charge2_basis_key: any;
  charge2_basis_value: any;
  charge2_currency_key: any;
  charge2_currency_value: any;
  charge3_name_key: any;
  charge3_name_value: any;
  charge3_basis_key: any;
  charge3_basis_value: any;
  charge3_currency_key: any;
  charge3_currency_value: any;
  charge4_name_key: any;
  charge4_name_value: any;
  charge4_basis_key: any;
  charge4_basis_value: any;
  charge4_currency_key: any;
  charge4_currency_value: any;
  charge5_name_key: any;
  charge5_name_value: any;
  charge5_basis_key: any;
  charge5_basis_value: any;
  charge5_currency_key: any;
  charge5_currency_value: any;

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
          this.cfs_stuffing_key = Res?. cfs_stuffing;
          this.cfs_stuffing_value = Res?. cfs_stuffing_value;
          this.service_type_key = Res?. service_type;
          this.service_type_value = Res?. service_type_value;
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
          this.charge1_name_key = Res?. charge1_l4_name;
          this.charge1_name_value = Res?. charge1_l4_name_value;
          this.charge1_basis_key = Res?. charge1_l4_basis;
          this.charge1_basis_value = Res?. charge1_l4_basis_value;
          this.charge1_currency_key = Res?. charge1_l4_currency;
          this.charge1_currency_value = Res?. charge1_l4_currency_value;
          this.charge2_name_key = Res?. charge2_l4_name;
          this.charge2_name_value = Res?. charge2_l4_name_value;
          this.charge2_basis_key = Res?. charge2_l4_basis;
          this.charge2_basis_value = Res?. charge2_l4_basis_value;
          this.charge2_currency_key = Res?. charge2_l4_currency;
          this.charge2_currency_value = Res?. charge2_l4_currency_value;
          this.charge3_name_key = Res?. charge3_l4_name;
          this.charge3_name_value = Res?. charge3_l4_name_value;
          this.charge3_basis_key = Res?. charge3_l4_basis;
          this.charge3_basis_value = Res?. charge3_l4_basis_value;
          this.charge3_currency_key = Res?. charge3_l4_currency;
          this.charge3_currency_value = Res?. charge3_l4_currency_value;
          this.charge4_name_key = Res?. charge4_l4_name;
          this.charge4_name_value = Res?. charge4_l4_name_value;
          this.charge4_basis_key = Res?. charge4_l4_basis;
          this.charge4_basis_value = Res?. charge4_l4_basis_value;
          this.charge4_currency_key = Res?. charge4_l4_currency;
          this.charge4_currency_value = Res?. charge4_l4_currency_value;
          this.charge5_name_key = Res?. charge5_l4_name;
          this.charge5_name_value = Res?. charge5_l4_name_value;
          this.charge5_basis_key = Res?. charge5_l4_basis;
          this.charge5_basis_value = Res?. charge5_l4_basis_value;
          this.charge5_currency_key = Res?. charge5_l4_currency;
          this.charge5_currency_value = Res?. charge5_l4_currency_value;
      }
      localStorage.setItem('L4dataSource', JSON.stringify(Res));
    })
  }

  updateNewValue(get: any, key: string) {
    if(key.indexOf('_l4') !== -1 || key === "cargo_type_value"){
      this.commonService.FileData[key] = get.target.value
    }else{
      this.commonService.FileData[key] = get.target.value.toUpperCase()
    }
    this.commonService.updateValue.next(this.commonService.FileData);
    localStorage.setItem('L4dataSource', JSON.stringify(this.commonService.FileData));
  }

}
