import { Component, OnInit } from '@angular/core';
import { AirService } from 'src/app/air-service';

@Component({
  selector: 'app-air-l2chafile',
  templateUrl: './air-l2chafile.component.html',
  styleUrls: ['./air-l2chafile.component.css']
})
export class AirL2chafileComponent implements OnInit {
  currencyCodes: string[];
  defineBasis: string[];

  constructor(private airService: AirService) {
    this.currencyCodes = airService.getCurrencies();
    this.defineBasis = airService.getBasis();
  }

  origin_port_key: any;
  origin_port_value: any;
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
        this.origin_port_key = Res?.origin_port,
        this.origin_port_value = Res?.origin_port_value,
        this.start_date_key = Res?. start_date;
        this.start_date_value = Res?. start_date_value;
        this.expiry_key = Res?. expiry;
        this.expiry_value = Res?. expiry_value;
        this.remarks_key = Res?. remarks;
        this.remarks_value = Res?. remarks_value;
        this.inclusions_key = Res?. inclusions;
        this.inclusions_value = Res?. inclusions_value;
        this.charge1_name_key = Res?. charge1_l2cha_name;
        this.charge1_name_value = Res?. charge1_l2cha_name_value;
        this.charge1_min_key = Res?. charge1_l2cha_min;
        this.charge1_min_value = Res?. charge1_l2cha_min_value;
        this.charge1_basis_key = Res?. charge1_l2cha_basis;
        this.charge1_basis_value = Res?. charge1_l2cha_basis_value;
        this.charge1_currency_key = Res?. charge1_l2cha_currency;
        this.charge1_currency_value = Res?. charge1_l2cha_currency_value;
        this.charge2_name_key = Res?. charge2_l2cha_name;
        this.charge2_name_value = Res?. charge2_l2cha_name_value;
        this.charge2_min_key = Res?. charge2_l2cha_min;
        this.charge2_min_value = Res?. charge2_l2cha_min_value;
        this.charge2_basis_key = Res?. charge2_l2cha_basis;
        this.charge2_basis_value = Res?. charge2_l2cha_basis_value;
        this.charge2_currency_key = Res?. charge2_l2cha_currency;
        this.charge2_currency_value = Res?. charge2_l2cha_currency_value;
        this.charge3_name_key = Res?. charge3_l2cha_name;
        this.charge3_name_value = Res?. charge3_l2cha_name_value;
        this.charge3_min_key = Res?. charge3_l2cha_min;
        this.charge3_min_value = Res?. charge3_l2cha_min_value;
        this.charge3_basis_key = Res?. charge3_l2cha_basis;
        this.charge3_basis_value = Res?. charge3_l2cha_basis_value;
        this.charge3_currency_key = Res?. charge3_l2cha_currency;
        this.charge3_currency_value = Res?. charge3_l2cha_currency_value;
        this.charge4_name_key = Res?. charge4_l2cha_name;
        this.charge4_name_value = Res?. charge4_l2cha_name_value;
        this.charge4_min_key = Res?. charge4_l2cha_min;
        this.charge4_min_value = Res?. charge4_l2cha_min_value;
        this.charge4_basis_key = Res?. charge4_l2cha_basis;
        this.charge4_basis_value = Res?. charge4_l2cha_basis_value;
        this.charge4_currency_key = Res?. charge4_l2cha_currency;
        this.charge4_currency_value = Res?. charge4_l2cha_currency_value;
        this.charge5_name_key = Res?. charge5_l2cha_name;
        this.charge5_name_value = Res?. charge5_l2cha_name_value;
        this.charge5_min_key = Res?. charge5_l2cha_min;
        this.charge5_min_value = Res?. charge5_l2cha_min_value;
        this.charge5_basis_key = Res?. charge5_l2cha_basis;
        this.charge5_basis_value = Res?. charge5_l2cha_basis_value;
        this.charge5_currency_key = Res?. charge5_l2cha_currency;
        this.charge5_currency_value = Res?. charge5_l2cha_currency_value;
      }
      localStorage.setItem('L2ChadataSource', JSON.stringify(Res));
    })
  }

  updateNewValue(get: any, key: string) {
    if(key.indexOf('_l2cha') !== -1){
      this.airService.FileData[key] = get.target.value
    }
    else{
      this.airService.FileData[key] = get.target.value.toUpperCase()
    }
    this.airService.updateValue.next(this.airService.FileData);
    localStorage.setItem('L2ChadataSource', JSON.stringify(this.airService.FileData));
  }
}
