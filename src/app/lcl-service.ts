import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import LclData from 'src/assets/data/legsheader.json';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LclService {

  constructor(private apiService: ApiService) { }

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
    start_date_value: this.generateDates().startDate,
    expiry: LclData.LCL[0].L3.col12.key,
    expiry_value: this.generateDates().expiryDate,
    remarks: LclData.LCL[0].L3.col13.key,
    remarks_value: LclData.LCL[0].L3.col13.value,
    inclusions: LclData.LCL[0].L3.col14.key,
    inclusions_value: LclData.LCL[0].L3.col14.value,
    charge1_l3_name: LclData.LCL[0].L3.charges1.charge_name_key,
    charge1_l3_name_value: LclData.LCL[0].L3.charges1.charge_name_value,
    charge1_l3_min: LclData.LCL[0].L3.charges1.charge_name_min_key,
    charge1_l3_min_value: LclData.LCL[0].L3.charges1.charge_name_min_value,
    charge1_l3_basis: LclData.LCL[0].L3.charges1.charge_basis_key,
    charge1_l3_basis_value: LclData.LCL[0].L3.charges1.charge_basis_value,
    charge1_l3_currency: LclData.LCL[0].L3.charges1.charge_currency_key,
    charge1_l3_currency_value: LclData.LCL[0].L3.charges1.charge_currency_value,
    charge2_l3_name: LclData.LCL[0].L3.charges2.charge_name_key,
    charge2_l3_name_value: LclData.LCL[0].L3.charges2.charge_name_value,
    charge2_l3_min: LclData.LCL[0].L3.charges2.charge_name_min_key,
    charge2_l3_min_value: LclData.LCL[0].L3.charges2.charge_name_min_value,
    charge2_l3_basis: LclData.LCL[0].L3.charges2.charge_basis_key,
    charge2_l3_basis_value: LclData.LCL[0].L3.charges2.charge_basis_value,
    charge2_l3_currency: LclData.LCL[0].L3.charges2.charge_currency_key,
    charge2_l3_currency_value: LclData.LCL[0].L3.charges2.charge_currency_value,
    charge3_l3_name: LclData.LCL[0].L3.charges3.charge_name_key,
    charge3_l3_name_value: LclData.LCL[0].L3.charges3.charge_name_value,
    charge3_l3_min: LclData.LCL[0].L3.charges3.charge_name_min_key,
    charge3_l3_min_value: LclData.LCL[0].L3.charges3.charge_name_min_value,
    charge3_l3_basis: LclData.LCL[0].L3.charges3.charge_basis_key,
    charge3_l3_basis_value: LclData.LCL[0].L3.charges3.charge_basis_value,
    charge3_l3_currency: LclData.LCL[0].L3.charges3.charge_currency_key,
    charge3_l3_currency_value: LclData.LCL[0].L3.charges3.charge_currency_value,
    charge4_l3_name: LclData.LCL[0].L3.charges4.charge_name_key,
    charge4_l3_name_value: LclData.LCL[0].L3.charges4.charge_name_value,
    charge4_l3_min: LclData.LCL[0].L3.charges4.charge_name_min_key,
    charge4_l3_min_value: LclData.LCL[0].L3.charges4.charge_name_min_value,
    charge4_l3_basis: LclData.LCL[0].L3.charges4.charge_basis_key,
    charge4_l3_basis_value: LclData.LCL[0].L3.charges4.charge_basis_value,
    charge4_l3_currency: LclData.LCL[0].L3.charges4.charge_currency_key,
    charge4_l3_currency_value: LclData.LCL[0].L3.charges4.charge_currency_value,
    charge5_l3_name: LclData.LCL[0].L3.charges5.charge_name_key,
    charge5_l3_name_value: LclData.LCL[0].L3.charges5.charge_name_value,
    charge5_l3_min: LclData.LCL[0].L3.charges5.charge_name_min_key,
    charge5_l3_min_value: LclData.LCL[0].L3.charges5.charge_name_min_value,
    charge5_l3_basis: LclData.LCL[0].L3.charges5.charge_basis_key,
    charge5_l3_basis_value: LclData.LCL[0].L3.charges5.charge_basis_value,
    charge5_l3_currency: LclData.LCL[0].L3.charges5.charge_currency_key,
    charge5_l3_currency_value: LclData.LCL[0].L3.charges5.charge_currency_value,

    charge1_l2_name: LclData.LCL[0].L2.charges1.charge_name_key,
    charge1_l2_name_value: LclData.LCL[0].L2.charges1.charge_name_value,
    charge1_l2_min: LclData.LCL[0].L2.charges1.charge_name_min_key,
    charge1_l2_min_value: LclData.LCL[0].L2.charges1.charge_name_min_value,
    charge1_l2_basis: LclData.LCL[0].L2.charges1.charge_basis_key,
    charge1_l2_basis_value: LclData.LCL[0].L2.charges1.charge_basis_value,
    charge1_l2_currency: LclData.LCL[0].L2.charges1.charge_currency_key,
    charge1_l2_currency_value: LclData.LCL[0].L2.charges1.charge_currency_value,
    charge2_l2_name: LclData.LCL[0].L2.charges2.charge_name_key,
    charge2_l2_name_value: LclData.LCL[0].L2.charges2.charge_name_value,
    charge2_l2_min: LclData.LCL[0].L2.charges2.charge_name_min_key,
    charge2_l2_min_value: LclData.LCL[0].L2.charges2.charge_name_min_value,
    charge2_l2_basis: LclData.LCL[0].L2.charges2.charge_basis_key,
    charge2_l2_basis_value: LclData.LCL[0].L2.charges2.charge_basis_value,
    charge2_l2_currency: LclData.LCL[0].L2.charges2.charge_currency_key,
    charge2_l2_currency_value: LclData.LCL[0].L2.charges2.charge_currency_value,
    charge3_l2_name: LclData.LCL[0].L2.charges3.charge_name_key,
    charge3_l2_name_value: LclData.LCL[0].L2.charges3.charge_name_value,
    charge3_l2_min: LclData.LCL[0].L2.charges3.charge_name_min_key,
    charge3_l2_min_value: LclData.LCL[0].L2.charges3.charge_name_min_value,
    charge3_l2_basis: LclData.LCL[0].L2.charges3.charge_basis_key,
    charge3_l2_basis_value: LclData.LCL[0].L2.charges3.charge_basis_value,
    charge3_l2_currency: LclData.LCL[0].L2.charges3.charge_currency_key,
    charge3_l2_currency_value: LclData.LCL[0].L2.charges3.charge_currency_value,
    charge4_l2_name: LclData.LCL[0].L2.charges4.charge_name_key,
    charge4_l2_name_value: LclData.LCL[0].L2.charges4.charge_name_value,
    charge4_l2_min: LclData.LCL[0].L2.charges4.charge_name_min_key,
    charge4_l2_min_value: LclData.LCL[0].L2.charges4.charge_name_min_value,
    charge4_l2_basis: LclData.LCL[0].L2.charges4.charge_basis_key,
    charge4_l2_basis_value: LclData.LCL[0].L2.charges4.charge_basis_value,
    charge4_l2_currency: LclData.LCL[0].L2.charges4.charge_currency_key,
    charge4_l2_currency_value: LclData.LCL[0].L2.charges4.charge_currency_value,
    charge5_l2_name: LclData.LCL[0].L2.charges5.charge_name_key,
    charge5_l2_name_value: LclData.LCL[0].L2.charges5.charge_name_value,
    charge5_l2_min: LclData.LCL[0].L2.charges5.charge_name_min_key,
    charge5_l2_min_value: LclData.LCL[0].L2.charges5.charge_name_min_value,
    charge5_l2_basis: LclData.LCL[0].L2.charges5.charge_basis_key,
    charge5_l2_basis_value: LclData.LCL[0].L2.charges5.charge_basis_value,
    charge5_l2_currency: LclData.LCL[0].L2.charges5.charge_currency_key,
    charge5_l2_currency_value: LclData.LCL[0].L2.charges5.charge_currency_value,

    charge1_l4_name: LclData.LCL[0].L4.charges1.charge_name_key,
    charge1_l4_name_value: LclData.LCL[0].L4.charges1.charge_name_value,
    charge1_l4_min: LclData.LCL[0].L4.charges1.charge_name_min_key,
    charge1_l4_min_value: LclData.LCL[0].L4.charges1.charge_name_min_value,
    charge1_l4_basis: LclData.LCL[0].L4.charges1.charge_basis_key,
    charge1_l4_basis_value: LclData.LCL[0].L4.charges1.charge_basis_value,
    charge1_l4_currency: LclData.LCL[0].L4.charges1.charge_currency_key,
    charge1_l4_currency_value: LclData.LCL[0].L4.charges1.charge_currency_value,
    charge2_l4_name: LclData.LCL[0].L4.charges2.charge_name_key,
    charge2_l4_name_value: LclData.LCL[0].L4.charges2.charge_name_value,
    charge2_l4_min: LclData.LCL[0].L4.charges2.charge_name_min_key,
    charge2_l4_min_value: LclData.LCL[0].L4.charges2.charge_name_min_value,
    charge2_l4_basis: LclData.LCL[0].L4.charges2.charge_basis_key,
    charge2_l4_basis_value: LclData.LCL[0].L4.charges2.charge_basis_value,
    charge2_l4_currency: LclData.LCL[0].L4.charges2.charge_currency_key,
    charge2_l4_currency_value: LclData.LCL[0].L4.charges2.charge_currency_value,
    charge3_l4_name: LclData.LCL[0].L4.charges3.charge_name_key,
    charge3_l4_name_value: LclData.LCL[0].L4.charges3.charge_name_value,
    charge3_l4_min: LclData.LCL[0].L4.charges3.charge_name_min_key,
    charge3_l4_min_value: LclData.LCL[0].L4.charges3.charge_name_min_value,
    charge3_l4_basis: LclData.LCL[0].L4.charges3.charge_basis_key,
    charge3_l4_basis_value: LclData.LCL[0].L4.charges3.charge_basis_value,
    charge3_l4_currency: LclData.LCL[0].L4.charges3.charge_currency_key,
    charge3_l4_currency_value: LclData.LCL[0].L4.charges3.charge_currency_value,
    charge4_l4_name: LclData.LCL[0].L4.charges4.charge_name_key,
    charge4_l4_name_value: LclData.LCL[0].L4.charges4.charge_name_value,
    charge4_l4_min: LclData.LCL[0].L4.charges4.charge_name_min_key,
    charge4_l4_min_value: LclData.LCL[0].L4.charges4.charge_name_min_value,
    charge4_l4_basis: LclData.LCL[0].L4.charges4.charge_basis_key,
    charge4_l4_basis_value: LclData.LCL[0].L4.charges4.charge_basis_value,
    charge4_l4_currency: LclData.LCL[0].L4.charges4.charge_currency_key,
    charge4_l4_currency_value: LclData.LCL[0].L4.charges4.charge_currency_value,
    charge5_l4_name: LclData.LCL[0].L4.charges5.charge_name_key,
    charge5_l4_name_value: LclData.LCL[0].L4.charges5.charge_name_value,
    charge5_l4_min: LclData.LCL[0].L4.charges5.charge_name_min_key,
    charge5_l4_min_value: LclData.LCL[0].L4.charges5.charge_name_min_value,
    charge5_l4_basis: LclData.LCL[0].L4.charges5.charge_basis_key,
    charge5_l4_basis_value: LclData.LCL[0].L4.charges5.charge_basis_value,
    charge5_l4_currency: LclData.LCL[0].L4.charges5.charge_currency_key,
    charge5_l4_currency_value: LclData.LCL[0].L4.charges5.charge_currency_value,

    charge1_l2cha_name: LclData.LCL[0].L2Cha.charges1.charge_name_key,
    charge1_l2cha_name_value: LclData.LCL[0].L2Cha.charges1.charge_name_value,
    charge1_l2cha_min: LclData.LCL[0].L2Cha.charges1.charge_name_min_key,
    charge1_l2cha_min_value: LclData.LCL[0].L2Cha.charges1.charge_name_min_value,
    charge1_l2cha_basis: LclData.LCL[0].L2Cha.charges1.charge_basis_key,
    charge1_l2cha_basis_value: LclData.LCL[0].L2Cha.charges1.charge_basis_value,
    charge1_l2cha_currency: LclData.LCL[0].L2Cha.charges1.charge_currency_key,
    charge1_l2cha_currency_value: LclData.LCL[0].L2Cha.charges1.charge_currency_value,
    charge2_l2cha_name: LclData.LCL[0].L2Cha.charges2.charge_name_key,
    charge2_l2cha_name_value: LclData.LCL[0].L2Cha.charges2.charge_name_value,
    charge2_l2cha_min: LclData.LCL[0].L2Cha.charges2.charge_name_min_key,
    charge2_l2cha_min_value: LclData.LCL[0].L2Cha.charges2.charge_name_min_value,
    charge2_l2cha_basis: LclData.LCL[0].L2Cha.charges2.charge_basis_key,
    charge2_l2cha_basis_value: LclData.LCL[0].L2Cha.charges2.charge_basis_value,
    charge2_l2cha_currency: LclData.LCL[0].L2Cha.charges2.charge_currency_key,
    charge2_l2cha_currency_value: LclData.LCL[0].L2Cha.charges2.charge_currency_value,
    charge3_l2cha_name: LclData.LCL[0].L2Cha.charges3.charge_name_key,
    charge3_l2cha_name_value: LclData.LCL[0].L2Cha.charges3.charge_name_value,
    charge3_l2cha_min: LclData.LCL[0].L2Cha.charges3.charge_name_min_key,
    charge3_l2cha_min_value: LclData.LCL[0].L2Cha.charges3.charge_name_min_value,
    charge3_l2cha_basis: LclData.LCL[0].L2Cha.charges3.charge_basis_key,
    charge3_l2cha_basis_value: LclData.LCL[0].L2Cha.charges3.charge_basis_value,
    charge3_l2cha_currency: LclData.LCL[0].L2Cha.charges3.charge_currency_key,
    charge3_l2cha_currency_value: LclData.LCL[0].L2Cha.charges3.charge_currency_value,
    charge4_l2cha_name: LclData.LCL[0].L2Cha.charges4.charge_name_key,
    charge4_l2cha_name_value: LclData.LCL[0].L2Cha.charges4.charge_name_value,
    charge4_l2cha_min: LclData.LCL[0].L2Cha.charges4.charge_name_min_key,
    charge4_l2cha_min_value: LclData.LCL[0].L2Cha.charges4.charge_name_min_value,
    charge4_l2cha_basis: LclData.LCL[0].L2Cha.charges4.charge_basis_key,
    charge4_l2cha_basis_value: LclData.LCL[0].L2Cha.charges4.charge_basis_value,
    charge4_l2cha_currency: LclData.LCL[0].L2Cha.charges4.charge_currency_key,
    charge4_l2cha_currency_value: LclData.LCL[0].L2Cha.charges4.charge_currency_value,
    charge5_l2cha_name: LclData.LCL[0].L2Cha.charges5.charge_name_key,
    charge5_l2cha_name_value: LclData.LCL[0].L2Cha.charges5.charge_name_value,
    charge5_l2cha_min: LclData.LCL[0].L2Cha.charges5.charge_name_min_key,
    charge5_l2cha_min_value: LclData.LCL[0].L2Cha.charges5.charge_name_min_value,
    charge5_l2cha_basis: LclData.LCL[0].L2Cha.charges5.charge_basis_key,
    charge5_l2cha_basis_value: LclData.LCL[0].L2Cha.charges5.charge_basis_value,
    charge5_l2cha_currency: LclData.LCL[0].L2Cha.charges5.charge_currency_key,
    charge5_l2cha_currency_value: LclData.LCL[0].L2Cha.charges5.charge_currency_value,

    charge1_l4cha_name: LclData.LCL[0].L4Cha.charges1.charge_name_key,
    charge1_l4cha_name_value: LclData.LCL[0].L4Cha.charges1.charge_name_value,
    charge1_l4cha_min: LclData.LCL[0].L4Cha.charges1.charge_name_min_key,
    charge1_l4cha_min_value: LclData.LCL[0].L4Cha.charges1.charge_name_min_value,
    charge1_l4cha_basis: LclData.LCL[0].L4Cha.charges1.charge_basis_key,
    charge1_l4cha_basis_value: LclData.LCL[0].L4Cha.charges1.charge_basis_value,
    charge1_l4cha_currency: LclData.LCL[0].L4Cha.charges1.charge_currency_key,
    charge1_l4cha_currency_value: LclData.LCL[0].L4Cha.charges1.charge_currency_value,
    charge2_l4cha_name: LclData.LCL[0].L4Cha.charges2.charge_name_key,
    charge2_l4cha_name_value: LclData.LCL[0].L4Cha.charges2.charge_name_value,
    charge2_l4cha_min: LclData.LCL[0].L4Cha.charges2.charge_name_min_key,
    charge2_l4cha_min_value: LclData.LCL[0].L4Cha.charges2.charge_name_min_value,
    charge2_l4cha_basis: LclData.LCL[0].L4Cha.charges2.charge_basis_key,
    charge2_l4cha_basis_value: LclData.LCL[0].L4Cha.charges2.charge_basis_value,
    charge2_l4cha_currency: LclData.LCL[0].L4Cha.charges2.charge_currency_key,
    charge2_l4cha_currency_value: LclData.LCL[0].L4Cha.charges2.charge_currency_value,
    charge3_l4cha_name: LclData.LCL[0].L4Cha.charges3.charge_name_key,
    charge3_l4cha_name_value: LclData.LCL[0].L4Cha.charges3.charge_name_value,
    charge3_l4cha_min: LclData.LCL[0].L4Cha.charges3.charge_name_min_key,
    charge3_l4cha_min_value: LclData.LCL[0].L4Cha.charges3.charge_name_min_value,
    charge3_l4cha_basis: LclData.LCL[0].L4Cha.charges3.charge_basis_key,
    charge3_l4cha_basis_value: LclData.LCL[0].L4Cha.charges3.charge_basis_value,
    charge3_l4cha_currency: LclData.LCL[0].L4Cha.charges3.charge_currency_key,
    charge3_l4cha_currency_value: LclData.LCL[0].L4Cha.charges3.charge_currency_value,
    charge4_l4cha_name: LclData.LCL[0].L4Cha.charges4.charge_name_key,
    charge4_l4cha_name_value: LclData.LCL[0].L4Cha.charges4.charge_name_value,
    charge4_l4cha_min: LclData.LCL[0].L4Cha.charges4.charge_name_min_key,
    charge4_l4cha_min_value: LclData.LCL[0].L4Cha.charges4.charge_name_min_value,
    charge4_l4cha_basis: LclData.LCL[0].L4Cha.charges4.charge_basis_key,
    charge4_l4cha_basis_value: LclData.LCL[0].L4Cha.charges4.charge_basis_value,
    charge4_l4cha_currency: LclData.LCL[0].L4Cha.charges4.charge_currency_key,
    charge4_l4cha_currency_value: LclData.LCL[0].L4Cha.charges4.charge_currency_value,
    charge5_l4cha_name: LclData.LCL[0].L4Cha.charges5.charge_name_key,
    charge5_l4cha_name_value: LclData.LCL[0].L4Cha.charges5.charge_name_value,
    charge5_l4cha_min: LclData.LCL[0].L4Cha.charges5.charge_name_min_key,
    charge5_l4cha_min_value: LclData.LCL[0].L4Cha.charges5.charge_name_min_value,
    charge5_l4cha_basis: LclData.LCL[0].L4Cha.charges5.charge_basis_key,
    charge5_l4cha_basis_value: LclData.LCL[0].L4Cha.charges5.charge_basis_value,
    charge5_l4cha_currency: LclData.LCL[0].L4Cha.charges5.charge_currency_key,
    charge5_l4cha_currency_value: LclData.LCL[0].L4Cha.charges5.charge_currency_value,

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

    charge1_l1_name: LclData.LCL[0].L1.charges1.charge_name_key,
    charge1_l1_name_value: LclData.LCL[0].L1.charges1.charge_name_value,
    charge1_l1_min: LclData.LCL[0].L1.charges1.charge_name_min_key,
    charge1_l1_min_value: LclData.LCL[0].L1.charges1.charge_name_min_value,
    charge1_l1_basis: LclData.LCL[0].L1.charges1.charge_basis_key,
    charge1_l1_basis_value: LclData.LCL[0].L1.charges1.charge_basis_value,
    charge1_l1_currency: LclData.LCL[0].L1.charges1.charge_currency_key,
    charge1_l1_currency_value: LclData.LCL[0].L1.charges1.charge_currency_value,
    charge2_l1_name: LclData.LCL[0].L1.charges2.charge_name_key,
    charge2_l1_name_value: LclData.LCL[0].L1.charges2.charge_name_value,
    charge2_l1_min: LclData.LCL[0].L1.charges2.charge_name_min_key,
    charge2_l1_min_value: LclData.LCL[0].L1.charges2.charge_name_min_value,
    charge2_l1_basis: LclData.LCL[0].L1.charges2.charge_basis_key,
    charge2_l1_basis_value: LclData.LCL[0].L1.charges2.charge_basis_value,
    charge2_l1_currency: LclData.LCL[0].L1.charges2.charge_currency_key,
    charge2_l1_currency_value: LclData.LCL[0].L1.charges2.charge_currency_value,
    charge3_l1_name: LclData.LCL[0].L1.charges3.charge_name_key,
    charge3_l1_name_value: LclData.LCL[0].L1.charges3.charge_name_value,
    charge3_l1_min: LclData.LCL[0].L1.charges3.charge_name_min_key,
    charge3_l1_min_value: LclData.LCL[0].L1.charges3.charge_name_min_value,
    charge3_l1_basis: LclData.LCL[0].L1.charges3.charge_basis_key,
    charge3_l1_basis_value: LclData.LCL[0].L1.charges3.charge_basis_value,
    charge3_l1_currency: LclData.LCL[0].L1.charges3.charge_currency_key,
    charge3_l1_currency_value: LclData.LCL[0].L1.charges3.charge_currency_value,
    charge4_l1_name: LclData.LCL[0].L1.charges4.charge_name_key,
    charge4_l1_name_value: LclData.LCL[0].L1.charges4.charge_name_value,
    charge4_l1_min: LclData.LCL[0].L1.charges4.charge_name_min_key,
    charge4_l1_min_value: LclData.LCL[0].L1.charges4.charge_name_min_value,
    charge4_l1_basis: LclData.LCL[0].L1.charges4.charge_basis_key,
    charge4_l1_basis_value: LclData.LCL[0].L1.charges4.charge_basis_value,
    charge4_l1_currency: LclData.LCL[0].L1.charges4.charge_currency_key,
    charge4_l1_currency_value: LclData.LCL[0].L1.charges4.charge_currency_value,
    charge5_l1_name: LclData.LCL[0].L1.charges5.charge_name_key,
    charge5_l1_name_value: LclData.LCL[0].L1.charges5.charge_name_value,
    charge5_l1_min: LclData.LCL[0].L1.charges5.charge_name_min_key,
    charge5_l1_min_value: LclData.LCL[0].L1.charges5.charge_name_min_value,
    charge5_l1_basis: LclData.LCL[0].L1.charges5.charge_basis_key,
    charge5_l1_basis_value: LclData.LCL[0].L1.charges5.charge_basis_value,
    charge5_l1_currency: LclData.LCL[0].L1.charges5.charge_currency_key,
    charge5_l1_currency_value: LclData.LCL[0].L1.charges5.charge_currency_value,

    charge1_l5_name: LclData.LCL[0].L5.charges1.charge_name_key,
    charge1_l5_name_value: LclData.LCL[0].L5.charges1.charge_name_value,
    charge1_l5_min: LclData.LCL[0].L5.charges1.charge_name_min_key,
    charge1_l5_min_value: LclData.LCL[0].L5.charges1.charge_name_min_value,
    charge1_l5_basis: LclData.LCL[0].L5.charges1.charge_basis_key,
    charge1_l5_basis_value: LclData.LCL[0].L5.charges1.charge_basis_value,
    charge1_l5_currency: LclData.LCL[0].L5.charges1.charge_currency_key,
    charge1_l5_currency_value: LclData.LCL[0].L5.charges1.charge_currency_value,
    charge2_l5_name: LclData.LCL[0].L5.charges2.charge_name_key,
    charge2_l5_name_value: LclData.LCL[0].L5.charges2.charge_name_value,
    charge2_l5_min: LclData.LCL[0].L5.charges2.charge_name_min_key,
    charge2_l5_min_value: LclData.LCL[0].L5.charges2.charge_name_min_value,
    charge2_l5_basis: LclData.LCL[0].L5.charges2.charge_basis_key,
    charge2_l5_basis_value: LclData.LCL[0].L5.charges2.charge_basis_value,
    charge2_l5_currency: LclData.LCL[0].L5.charges2.charge_currency_key,
    charge2_l5_currency_value: LclData.LCL[0].L5.charges2.charge_currency_value,
    charge3_l5_name: LclData.LCL[0].L5.charges3.charge_name_key,
    charge3_l5_name_value: LclData.LCL[0].L5.charges3.charge_name_value,
    charge3_l5_min: LclData.LCL[0].L5.charges3.charge_name_min_key,
    charge3_l5_min_value: LclData.LCL[0].L5.charges3.charge_name_min_value,
    charge3_l5_basis: LclData.LCL[0].L5.charges3.charge_basis_key,
    charge3_l5_basis_value: LclData.LCL[0].L5.charges3.charge_basis_value,
    charge3_l5_currency: LclData.LCL[0].L5.charges3.charge_currency_key,
    charge3_l5_currency_value: LclData.LCL[0].L5.charges3.charge_currency_value,
    charge4_l5_name: LclData.LCL[0].L5.charges4.charge_name_key,
    charge4_l5_name_value: LclData.LCL[0].L5.charges4.charge_name_value,
    charge4_l5_min: LclData.LCL[0].L5.charges4.charge_name_min_key,
    charge4_l5_min_value: LclData.LCL[0].L5.charges4.charge_name_min_value,
    charge4_l5_basis: LclData.LCL[0].L5.charges4.charge_basis_key,
    charge4_l5_basis_value: LclData.LCL[0].L5.charges4.charge_basis_value,
    charge4_l5_currency: LclData.LCL[0].L5.charges4.charge_currency_key,
    charge4_l5_currency_value: LclData.LCL[0].L5.charges4.charge_currency_value,
    charge5_l5_name: LclData.LCL[0].L5.charges5.charge_name_key,
    charge5_l5_name_value: LclData.LCL[0].L5.charges5.charge_name_value,
    charge5_l5_min: LclData.LCL[0].L5.charges5.charge_name_min_key,
    charge5_l5_min_value: LclData.LCL[0].L5.charges5.charge_name_min_value,
    charge5_l5_basis: LclData.LCL[0].L5.charges5.charge_basis_key,
    charge5_l5_basis_value: LclData.LCL[0].L5.charges5.charge_basis_value,
    charge5_l5_currency: LclData.LCL[0].L5.charges5.charge_currency_key,
    charge5_l5_currency_value: LclData.LCL[0].L5.charges5.charge_currency_value,

  }

  updateValue = new BehaviorSubject(this.FileData);

  downloadFile(legsData: any, filename = 'data', key: string) {
    let legs = '';
    if (key.includes('L2ChaHeader')) {
      legs = key.substring(0, 2).toLowerCase();
      legs = legs + "_cha"
    } else if (key.includes('L4ChaHeader')) {
      legs = key.substring(0, 2).toLowerCase();
      legs = legs + "_cha"
    } else {
      legs = key.substring(0, 2).toLowerCase();
    }

    const fileName = filename + ".csv";


    let directUpload = localStorage.getItem('directUpload');

    const obj: { [key: string]: any } = {
      L3Header: [
        this.FileData.origin_port,
        this.FileData.destination_port,
        this.FileData.via_pol,
        this.FileData.via_pod,
        this.FileData.via_port,
        this.FileData.transit_time,
        this.FileData.service_name,
        this.FileData.service_type,
        this.FileData.cargo_type,
        this.FileData.commodities,
        this.FileData.start_date,
        this.FileData.expiry,
        this.FileData.remarks,
        this.FileData.inclusions,
        this.FileData.charge1_l3_name,
        this.FileData.charge1_l3_min,
        this.FileData.charge1_l3_basis,
        this.FileData.charge1_l3_currency,
        this.FileData.charge2_l3_name,
        this.FileData.charge2_l3_min,
        this.FileData.charge2_l3_basis,
        this.FileData.charge2_l3_currency,
        this.FileData.charge3_l3_name,
        this.FileData.charge3_l3_min,
        this.FileData.charge3_l3_basis,
        this.FileData.charge3_l3_currency,
        this.FileData.charge4_l3_name,
        this.FileData.charge4_l3_min,
        this.FileData.charge4_l3_basis,
        this.FileData.charge4_l3_currency,
        this.FileData.charge5_l3_name,
        this.FileData.charge5_l3_min,
        this.FileData.charge5_l3_basis,
        this.FileData.charge5_l3_currency,
      ],
      L2Header: [
        this.FileData.origin_port,
        this.FileData.destination_port,
        this.FileData.via_pol,
        this.FileData.via_pod,
        this.FileData.service_type,
        this.FileData.cargo_type,
        this.FileData.commodities,
        this.FileData.start_date,
        this.FileData.expiry,
        this.FileData.remarks,
        this.FileData.inclusions,
        this.FileData.charge1_l2_name,
        this.FileData.charge1_l2_min,
        this.FileData.charge1_l2_basis,
        this.FileData.charge1_l2_currency,
        this.FileData.charge2_l2_name,
        this.FileData.charge2_l2_min,
        this.FileData.charge2_l2_basis,
        this.FileData.charge2_l2_currency,
        this.FileData.charge3_l2_name,
        this.FileData.charge3_l2_min,
        this.FileData.charge3_l2_basis,
        this.FileData.charge3_l2_currency,
        this.FileData.charge4_l2_name,
        this.FileData.charge4_l2_min,
        this.FileData.charge4_l2_basis,
        this.FileData.charge4_l2_currency,
        this.FileData.charge5_l2_name,
        this.FileData.charge5_l2_min,
        this.FileData.charge5_l2_basis,
        this.FileData.charge5_l2_currency,
      ],
      L4Header: [
        this.FileData.origin_port,
        this.FileData.destination_port,
        this.FileData.via_pol,
        this.FileData.via_pod,
        this.FileData.service_type,
        this.FileData.cargo_type,
        this.FileData.commodities,
        this.FileData.start_date,
        this.FileData.expiry,
        this.FileData.remarks,
        this.FileData.inclusions,
        this.FileData.charge1_l4_name,
        this.FileData.charge1_l4_min,
        this.FileData.charge1_l4_basis,
        this.FileData.charge1_l4_currency,
        this.FileData.charge2_l4_name,
        this.FileData.charge2_l4_min,
        this.FileData.charge2_l4_basis,
        this.FileData.charge2_l4_currency,
        this.FileData.charge3_l4_name,
        this.FileData.charge3_l4_min,
        this.FileData.charge3_l4_basis,
        this.FileData.charge3_l4_currency,
        this.FileData.charge4_l4_name,
        this.FileData.charge4_l4_min,
        this.FileData.charge4_l4_basis,
        this.FileData.charge4_l4_currency,
        this.FileData.charge5_l4_name,
        this.FileData.charge5_l4_min,
        this.FileData.charge5_l4_basis,
        this.FileData.charge5_l4_currency,
      ],
      L2ChaHeader: [
        this.FileData.origin_port,
        this.FileData.start_date,
        this.FileData.expiry,
        this.FileData.remarks,
        this.FileData.inclusions,
        this.FileData.charge1_l2cha_name,
        this.FileData.charge1_l2cha_min,
        this.FileData.charge1_l2cha_basis,
        this.FileData.charge1_l2cha_currency,
        this.FileData.charge2_l2cha_name,
        this.FileData.charge2_l2cha_min,
        this.FileData.charge2_l2cha_basis,
        this.FileData.charge2_l2cha_currency,
        this.FileData.charge3_l2cha_name,
        this.FileData.charge3_l2cha_min,
        this.FileData.charge3_l2cha_basis,
        this.FileData.charge3_l2cha_currency,
        this.FileData.charge4_l2cha_name,
        this.FileData.charge4_l2cha_min,
        this.FileData.charge4_l2cha_basis,
        this.FileData.charge4_l2cha_currency,
        this.FileData.charge5_l2cha_name,
        this.FileData.charge5_l2cha_min,
        this.FileData.charge5_l2cha_basis,
        this.FileData.charge5_l2cha_currency,
      ],
      L4ChaHeader: [
        this.FileData.destination_port,
        this.FileData.start_date,
        this.FileData.expiry,
        this.FileData.remarks,
        this.FileData.inclusions,
        this.FileData.charge1_l4cha_name,
        this.FileData.charge1_l4cha_min,
        this.FileData.charge1_l4cha_basis,
        this.FileData.charge1_l4cha_currency,
        this.FileData.charge2_l4cha_name,
        this.FileData.charge2_l4cha_min,
        this.FileData.charge2_l4cha_basis,
        this.FileData.charge2_l4cha_currency,
        this.FileData.charge3_l4cha_name,
        this.FileData.charge3_l4cha_min,
        this.FileData.charge3_l4cha_basis,
        this.FileData.charge3_l4cha_currency,
        this.FileData.charge4_l4cha_name,
        this.FileData.charge4_l4cha_min,
        this.FileData.charge4_l4cha_basis,
        this.FileData.charge4_l4cha_currency,
        this.FileData.charge5_l4cha_name,
        this.FileData.charge5_l4cha_min,
        this.FileData.charge5_l4cha_basis,
        this.FileData.charge5_l4cha_currency,
      ],
      L1Header: [
        this.FileData.origin,
        this.FileData.destination,
        this.FileData.origin_portcode,
        this.FileData.destination_portcode,
        this.FileData.origin_pincode,
        this.FileData.destination_pincode,
        this.FileData.origin_country_code,
        this.FileData.destination_country_code,
        this.FileData.origin_state_code,
        this.FileData.destination_state_code,
        this.FileData.impo_expo,
        this.FileData.service_type,
        this.FileData.transit_time,
        this.FileData.transport_mode,
        this.FileData.no_of_axle,
        this.FileData.distance_range,
        this.FileData.distance_unit,
        this.FileData.volume_range,
        this.FileData.volume_unit,
        this.FileData.weight_range,
        this.FileData.weight_unit,
        this.FileData.start_date,
        this.FileData.expiry,
        this.FileData.remarks,
        this.FileData.inclusions,
        this.FileData.charge1_l1_name,
        this.FileData.charge1_l1_min,
        this.FileData.charge1_l1_basis,
        this.FileData.charge1_l1_currency,
        this.FileData.charge2_l1_name,
        this.FileData.charge2_l1_min,
        this.FileData.charge2_l1_basis,
        this.FileData.charge2_l1_currency,
        this.FileData.charge3_l1_name,
        this.FileData.charge3_l1_min,
        this.FileData.charge3_l1_basis,
        this.FileData.charge3_l1_currency,
        this.FileData.charge4_l1_name,
        this.FileData.charge4_l1_min,
        this.FileData.charge4_l1_basis,
        this.FileData.charge4_l1_currency,
        this.FileData.charge5_l1_name,
        this.FileData.charge5_l1_min,
        this.FileData.charge5_l1_basis,
        this.FileData.charge5_l1_currency,
      ],
      L5Header: [
        this.FileData.origin,
        this.FileData.destination,
        this.FileData.origin_portcode,
        this.FileData.destination_portcode,
        this.FileData.origin_pincode,
        this.FileData.destination_pincode,
        this.FileData.origin_country_code,
        this.FileData.destination_country_code,
        this.FileData.origin_state_code,
        this.FileData.destination_state_code,
        this.FileData.impo_expo,
        this.FileData.service_type,
        this.FileData.transit_time,
        this.FileData.transport_mode,
        this.FileData.no_of_axle,
        this.FileData.distance_range,
        this.FileData.distance_unit,
        this.FileData.volume_range,
        this.FileData.volume_unit,
        this.FileData.weight_range,
        this.FileData.weight_unit,
        this.FileData.start_date,
        this.FileData.expiry,
        this.FileData.remarks,
        this.FileData.inclusions,
        this.FileData.charge1_l5_name,
        this.FileData.charge1_l5_min,
        this.FileData.charge1_l5_basis,
        this.FileData.charge1_l5_currency,
        this.FileData.charge2_l5_name,
        this.FileData.charge2_l5_min,
        this.FileData.charge2_l5_basis,
        this.FileData.charge2_l5_currency,
        this.FileData.charge3_l5_name,
        this.FileData.charge3_l5_min,
        this.FileData.charge3_l5_basis,
        this.FileData.charge3_l5_currency,
        this.FileData.charge4_l5_name,
        this.FileData.charge4_l5_min,
        this.FileData.charge4_l5_basis,
        this.FileData.charge4_l5_currency,
        this.FileData.charge5_l5_name,
        this.FileData.charge5_l5_min,
        this.FileData.charge5_l5_basis,
        this.FileData.charge5_l5_currency,
      ],
    }

    let csvData = this.ConvertToCSV(legsData, obj[key]);

    if (directUpload === 'false') {
      let blob: any = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
      let dwldLink = document.createElement("a");
      let url = URL.createObjectURL(blob);
      let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
      if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
      }
      dwldLink.setAttribute("href", url);
      dwldLink.setAttribute("download", filename + ".csv");
      dwldLink.style.visibility = "hidden";
      document.body.appendChild(dwldLink);
      dwldLink.click();
      document.body.removeChild(dwldLink);
    } else {
      const subVendorId = localStorage.getItem('subVendorId');
      const vendorId = localStorage.getItem('vendorId');
      let blob: any = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
      const CsvFiles = new File([blob], 'test.csv', { type: "text/csv" });
      if (vendorId !== null && vendorId !== undefined && subVendorId !== null && subVendorId !== undefined) {
        this.directUpload(CsvFiles, legs, vendorId, subVendorId, fileName)
      } else {
        alert("VendorId or SubVendor Id is not selected")
      }
    }
  }

  ConvertToCSV(objArray: string, headerList: string[]) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    for (let index in headerList) {
      row += headerList[index] + ',';
    }

    row = row.slice(0, -1);
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in headerList) {
        let head = headerList[index];
        line += array[i][head] + ',';
      }
      line = line.slice(0, -1);
      str += line + '\r\n';
    }
    return str;
  }

  directUpload(file: Blob, legs: string, vendorId: any, subVendorId: any, fileName: string) {
    let zohoDeskNo = Math.floor(Math.random() * 90000) + 10000;
    const data = new FormData();
    data.append("mode", "SEA-LCL");
    data.append("leg", legs);
    data.append("vendor", vendorId);
    data.append("subVendor", subVendorId);
    if (legs.includes('l1') || legs.includes('l5') || legs.includes('l2_cha') || legs.includes('l4_cha')) {
      data.append("combinationSubVendors", subVendorId);
    }
    data.append("agent", "");
    data.append("airline", "");
    data.append("charge", "");
    data.append("inputFileSource", "ZOHO-DESK");
    data.append("fclType", "LCL-RATES");
    data.append("inputFile", "");
    data.append("zohoTicketNumber", zohoDeskNo.toString());
    data.append("dateReceived", this.dateReceived());
    data.append("file", file, fileName);
    data.append("formId", "0");

    if(localStorage.getItem('ModeSelected') === 'QA'){
      this.apiService.UploadQaFile(data).subscribe(
        (res) => {
          console.log(res);
          alert(legs.toUpperCase()+" Leg File Uploaded")
        },
        (error) => {
          console.error('Error uploading file:', error);
          alert('clear this error issue'+ error.message)
        }
      );
    }else if (localStorage.getItem('ModeSelected') === 'Staging'){
      console.log('Staging call')
      this.apiService.UploadStagingFile(data).subscribe(
        (res) => {
          console.log(res);
          alert(legs.toUpperCase()+" Leg File Uploaded")
        },
        (error) => {
          console.error('Error uploading file:', error);
          alert('clear this error issue'+ error.message)
        }
      );
    }else{
      this.apiService.UploadProdFile(data).subscribe(
        (res) => {
          console.log(res);
          alert(legs.toUpperCase()+" Leg File Uploaded")
        },
        (error) => {
          console.error('Error uploading file:', error);
          alert('clear this error issue'+ error.message)
        }
      );
    }

    // this.http.post(this.apiService.getValues().baseURL+'/rateupload/file', data, { headers }).subscribe(
    //   (res) => {
    //     console.log(res);
    //     alert(legs.toUpperCase() + " Leg File Uploaded")
    //   },
    //   (error) => {
    //     console.error('Error uploading file:', error);
    //     alert('clear this error issue' + error.message)
    //   }
    // );

  }


  /* Common Services for Basis,Currency & Load Type */

  private currencyCodes = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"];

  getCurrencies() {
    return this.currencyCodes;
  }

  private defineBasis = ['gross_weight', 'per_cbm', 'per_w/m', 'per_ton', 'per_shipment', 'per shipping bill', 'per_hbl', 'per_bl', 'per_quintal', 'per_doc', 'flat', 'N/A', 'per_lbs', 'per_carton', 'per_pallet', 'per_vehicle', 'per_shift', 'per_package', 'per_invoice', 'per_cft', 'per_day', 'per revalidation', 'per_kg', '% on pickup', '% on delivery'];

  getBasis() {
    return this.defineBasis;
  }

  generateDates(): { startDate: string, expiryDate: string, sailingDate: string } {
    const currentDate = new Date();
    const startDate = this.formatDate(currentDate);

    const expiryDate = new Date(currentDate);
    expiryDate.setFullYear(currentDate.getFullYear() + 1);
    const formattedExpiryDate = this.formatDate(expiryDate);

    const sailingDate = new Date(currentDate);
    sailingDate.setDate(currentDate.getDate() + 15);
    const formattedSailingDate = this.formatDate(sailingDate);

    return {
      startDate: startDate,
      expiryDate: formattedExpiryDate,
      sailingDate: formattedSailingDate
    };
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return day + '-' + month + '-' + year;
  }

  dateReceived(){
    // create a new Date object for the current date and time
    const date = new Date();

    // create an array of weekday names
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // create an array of month names
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // extract the date and time components
    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const timezone = 'GMT+0530';
    const timezoneName = 'India Standard Time';

    // construct the timestamp string
    const timestamp = `${weekday} ${month} ${day} ${year} ${hour}:${minute}:${second} ${timezone} (${timezoneName})`;

    return timestamp
    // console.log(timestamp); // output: "Sat Apr 16 2023 20:38:49 GMT+0530 (India Standard Time)"

  }


}
