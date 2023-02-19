import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../common.service";

@Component({
  selector: 'app-l2chafile',
  templateUrl: './l2chafile.component.html',
  styleUrls: ['./l2chafile.component.css']
})
export class L2chafileComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  origin_port_key: any;
  origin_port_value: any;
  via_port_key: any;
  via_port_value: any;
  cfs_stuffing_key: any;
  cfs_stuffing_value: any;
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
          this.via_port_key = Res?. via_port;
          this.via_port_value = Res?. via_port_value;
          this.cfs_stuffing_key = Res?. cfs_stuffing;
          this.cfs_stuffing_value = Res?. cfs_stuffing_value;
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
          this.charge1_name_key = Res?. charge1_l2cha_name;
          this.charge1_name_value = Res?. charge1_l2cha_name_value;
          this.charge1_basis_key = Res?. charge1_l2cha_basis;
          this.charge1_basis_value = Res?. charge1_l2cha_basis_value;
          this.charge1_currency_key = Res?. charge1_l2cha_currency;
          this.charge1_currency_value = Res?. charge1_l2cha_currency_value;
          this.charge2_name_key = Res?. charge2_l2cha_name;
          this.charge2_name_value = Res?. charge2_l2cha_name_value;
          this.charge2_basis_key = Res?. charge2_l2cha_basis;
          this.charge2_basis_value = Res?. charge2_l2cha_basis_value;
          this.charge2_currency_key = Res?. charge2_l2cha_currency;
          this.charge2_currency_value = Res?. charge2_l2cha_currency_value;
          this.charge3_name_key = Res?. charge3_l2cha_name;
          this.charge3_name_value = Res?. charge3_l2cha_name_value;
          this.charge3_basis_key = Res?. charge3_l2cha_basis;
          this.charge3_basis_value = Res?. charge3_l2cha_basis_value;
          this.charge3_currency_key = Res?. charge3_l2cha_currency;
          this.charge3_currency_value = Res?. charge3_l2cha_currency_value;
          this.charge4_name_key = Res?. charge4_l2cha_name;
          this.charge4_name_value = Res?. charge4_l2cha_name_value;
          this.charge4_basis_key = Res?. charge4_l2cha_basis;
          this.charge4_basis_value = Res?. charge4_l2cha_basis_value;
          this.charge4_currency_key = Res?. charge4_l2cha_currency;
          this.charge4_currency_value = Res?. charge4_l2cha_currency_value;
          this.charge5_name_key = Res?. charge5_l2cha_name;
          this.charge5_name_value = Res?. charge5_l2cha_name_value;
          this.charge5_basis_key = Res?. charge5_l2cha_basis;
          this.charge5_basis_value = Res?. charge5_l2cha_basis_value;
          this.charge5_currency_key = Res?. charge5_l2cha_currency;
          this.charge5_currency_value = Res?. charge5_l2cha_currency_value;
      }
      localStorage.setItem('L2ChadataSource', JSON.stringify(Res));
    })
  }

  updateNewValue(get: any, key: string) {
    // if (key.indexOf('_l2cha_currency_value') !== -1 || !key.includes('_l2cha')) {
    //   this.commonService.FileData[key] = value.toUpperCase();
    // } else {
    //   this.commonService.FileData[key] = value;
    // }
    if(key.indexOf('_l2cha') !== -1){
      this.commonService.FileData[key] = get.target.value
    }else{
      this.commonService.FileData[key] = get.target.value.toUpperCase()
    }
    this.commonService.updateValue.next(this.commonService.FileData);
    localStorage.setItem('L2ChadataSource', JSON.stringify(this.commonService.FileData));
  }

}
