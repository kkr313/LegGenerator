import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-downlaodbtn',
  templateUrl: './downlaodbtn.component.html',
  styleUrls: ['./downlaodbtn.component.css']
})
export class DownlaodbtnComponent implements OnInit {

  firstDropdownOptions = [
    { value: 'QA', label: 'QA' },
    { value: 'Staging', label: 'Staging' }
  ];

  secondDropdownOptions: { value: string; label: string; }[] = [];
  thirdDropdownOptions: { value: string; label: string; }[] = [];

  selectedFirstDropdownValue = this.firstDropdownOptions[0].value;
  selectedSecondDropdownValue = '';
  selectedThirdDropdownValue = '';

  updateSecondDropdownOptions() {
    switch (this.selectedFirstDropdownValue) {
      case 'Staging':
        this.secondDropdownOptions = [
          { label: 'FWDA', value: "FWDA-Staging" },
          { label: 'NGLSA', value: "NGLSA-Staging" },
          { label: 'SKYNET', value: "SKYNET-Staging" }
        ];
        break;
      case 'QA':
        this.secondDropdownOptions = [
          { label: 'FWQA', value: "FWQA-QA" },
          { label: 'NGLQA', value: "NGLQA-QA" },
          { label: 'SKYQA', value: "SKYQA-QA" },
        ];
        break;
    }
    this.selectedSecondDropdownValue = this.secondDropdownOptions[0].value;
    this.updateThirdDropdownOptions();
    console.log(this.selectedFirstDropdownValue);
    console.log(this.selectedSecondDropdownValue);
  }

  updateThirdDropdownOptions() {
    switch (this.selectedFirstDropdownValue) {
      case 'QA':
        this.thirdDropdownOptions = [
          { label: 'EMIRATES', value: "EMIRATES" },
          { label: 'CMA CGM', value: "CMA CGM" },
          { label: 'HAPAG', value: "HAPAG" },
          { label: 'SAFMARINE', value: "SAFMARINE" },
          { label: 'CUL', value: "CUL" },
          { label: 'EMC', value: "EMC" },
          { label: 'EVERGREEN', value: "EVERGREEN" },
          { label: 'COSCO', value: "COSCO" },
          { label: 'MAERSK', value: "MAERSK" },
          { label: 'WAN HAI', value: "WAN HAI" }
        ];
        break;
      case 'Staging':
        this.thirdDropdownOptions = [
          { label: 'EMIRATES', value: "EMIRATES" },
          { label: 'CMA CGM', value: "CMA CGM" },
          { label: 'HAPAG', value: "HAPAG" },
          { label: 'SAFMARINE', value: "SAFMARINE" },
          { label: 'CUL', value: "CUL" },
          { label: 'EMC', value: "EMC" },
          { label: 'EVERGREEN', value: "EVERGREEN" },
          { label: 'COSCO', value: "COSCO" },
          { label: 'MAERSK', value: "MAERSK" },
          { label: 'WAN HAI', value: "WAN HAI" }
        ];
        break;
    }
    this.selectedThirdDropdownValue = this.thirdDropdownOptions[0].value;
    console.log(this.selectedThirdDropdownValue);
  }

  selectLinear() {
    if (this.selectedFirstDropdownValue === "QA") {
      this.thirdDropdownOptions.map(option => {
        if (this.selectedThirdDropdownValue == option.value) {
          this.selectedThirdDropdownValue = option.value
          console.log(this.selectedThirdDropdownValue)
        }
      });
    } else {
      this.thirdDropdownOptions.map(option => {
        if (this.selectedThirdDropdownValue == option.value) {
          this.selectedThirdDropdownValue = option.value
          console.log(this.selectedThirdDropdownValue)
        }
      });
    }
  }

  selectVendor() {
    if (this.selectedFirstDropdownValue === "QA") {
      this.secondDropdownOptions.map(option => {
        if (this.selectedSecondDropdownValue == option.value) {
          this.selectedSecondDropdownValue = option.value
          console.log(this.selectedSecondDropdownValue)
        }
      });
    } else {
      this.secondDropdownOptions.map(option => {
        if (this.selectedSecondDropdownValue == option.value) {
          this.selectedSecondDropdownValue = option.value
          console.log(this.selectedSecondDropdownValue)
        }
      });
    }

  }


  constructor(private commonService: CommonService, private http: HttpClient) { }



  ngOnInit(): void {

    // this.selectedEnvValue = this.env[0].value;
    // this.selectedVendorValue = this.vendor[0].value;
    // this.selectedLinearValue = this.linear[0].value;
    this.selectedFirstDropdownValue = this.firstDropdownOptions[0].value;
  }

  l3Data: any;
  legsData:any

  downloaData() {
    let l3data = JSON.parse(localStorage.getItem('L3dataSource')!);
    let l2data = JSON.parse(localStorage.getItem('L2dataSource')!);
    let l4data = JSON.parse(localStorage.getItem('L4dataSource')!);
     this.legsData={
      L3Data :[{
        origin_port: l3data.origin_port_value,
        destination_port: l3data.destination_port_value,
        via_pol: l3data.via_pol_value,
        via_pod: l3data.via_pod_value,
        via_port: l3data.via_port_value,
        contract_number: l3data.contract_number_value,
        transit_time: l3data.transit_time_value,
        service_type: l3data.service_type_value,
        sailing_date: l3data.sailing_date_value,
        cargo_type: l3data.cargo_type_value,
        commodities: l3data.commodities_value,
        other_charges: l3data.other_charges_value,
        if_applicable_charges: l3data.if_applicable_charges_value,
        start_date: l3data.start_date_value,
        expiry: l3data.expiry_value,
        remarks: l3data.remarks_value,
        inclusions: l3data.inclusions_value,
        load_type: l3data.load_type_value,
        basic_ocean_freight: l3data.charge1_l3_name_value,
        basic_ocean_freight_basis: l3data.charge1_l3_basis_value,
        basic_ocean_freight_currency: l3data.charge1_l3_currency_value,
        bunker_adjustment_charge_baf: l3data.charge2_l3_name_value,
        bunker_adjustment_charge_baf_basis: l3data.charge2_l3_basis_value,
        bunker_adjustment_charge_baf_currency: l3data.charge2_l3_currency_value,
        carrier_security_surcharge: l3data.charge3_l3_name_value,
        carrier_security_surcharge_basis: l3data.charge3_l3_basis_value,
        carrier_security_surcharge_currency: l3data.charge3_l3_currency_value,
        low_sulphur_surcharge: l3data.charge4_l3_name_value,
        low_sulphur_surcharge_basis: l3data.charge4_l3_basis_value,
        low_sulphur_surcharge_currency: l3data.charge4_l3_currency_value,
        peak_season_surcharge: l3data.charge5_l3_name_value,
        peak_season_surcharge_basis: l3data.charge5_l3_basis_value,
        peak_season_surcharge_currency: l3data.charge5_l3_currency_value,
      }],
      L2Data :[{
        origin_port: l2data.origin_port_value,
        destination_port: l2data.destination_port_value,
        via_pol: l2data.via_pol_value,
        via_pod: l2data.via_pod_value,
        via_port: l2data.via_port_value,
        cfs_stuffing: l2data.cfs_stuffing_value,
        service_type: l2data.service_type_value,
        cargo_type: l2data.cargo_type_value,
        commodities: l2data.commodities_value,
        other_charges: l2data.other_charges_value,
        if_applicable_charges: l2data.if_applicable_charges_value,
        start_date: l2data.start_date_value,
        expiry: l2data.expiry_value,
        remarks: l2data.remarks_value,
        inclusions: l2data.inclusions_value,
        load_type: l2data.load_type_value,
        origin_terminal_handling_charge_othc: l2data.charge1_l2_name_value,
        origin_terminal_handling_charge_othc_basis: l2data.charge1_l2_basis_value,
        origin_terminal_handling_charge_othc_currency: l2data.charge1_l2_currency_value,
        documentation_fee_origin: l2data.charge2_l2_name_value,
        documentation_fee_origin_basis: l2data.charge2_l2_basis_value,
        documentation_fee_origin_currency: l2data.charge2_l2_currency_value,
        cfs_fee_at_origin: l2data.charge3_l2_name_value,
        cfs_fee_at_origin_basis: l2data.charge3_l2_basis_value,
        cfs_fee_at_origin_currency: l2data.charge3_l2_currency_value,
        container_positioning_dps: l2data.charge4_l2_name_value,
        container_positioning_dps_basis: l2data.charge4_l2_basis_value,
        container_positioning_dps_currency: l2data.charge4_l2_currency_value,
        seal_fee: l2data.charge5_l2_name_value,
        seal_fee_basis: l2data.charge5_l2_basis_value,
        seal_fee_currency: l2data.charge5_l2_currency_value,
      }],
      L4Data :[{
        origin_port: l4data.origin_port_value,
        destination_port: l4data.destination_port_value,
        via_pol: l4data.via_pol_value,
        via_pod: l4data.via_pod_value,
        via_port: l4data.via_port_value,
        cfs_stuffing: l4data.cfs_stuffing_value,
        service_type: l4data.service_type_value,
        cargo_type: l4data.cargo_type_value,
        commodities: l4data.commodities_value,
        other_charges: l4data.other_charges_value,
        if_applicable_charges: l4data.if_applicable_charges_value,
        start_date: l4data.start_date_value,
        expiry: l4data.expiry_value,
        remarks: l4data.remarks_value,
        inclusions: l4data.inclusions_value,
        load_type: l4data.load_type_value,
        destination_terminal_handling_charges: l4data.charge1_l4_name_value,
        destination_terminal_handling_charges_basis: l4data.charge1_l4_basis_value,
        destination_terminal_handling_charges_currency: l4data.charge1_l4_currency_value,
        documentation_fee_destination: l4data.charge2_l4_name_value,
        documentation_fee_destination_basis: l4data.charge2_l4_basis_value,
        documentation_fee_destination_currency: l4data.charge2_l4_currency_value,
        customs_examination: l4data.charge3_l4_name_value,
        customs_examination_basis: l4data.charge3_l4_basis_value,
        customs_examination_currency: l4data.charge3_l4_currency_value,
        surplus_and_demand_compensation: l4data.charge4_l4_name_value,
        surplus_and_demand_compensation_basis: l4data.charge4_l4_basis_value,
        surplus_and_demand_compensation_currency: l4data.charge4_l4_currency_value,
        import_service: l4data.charge5_l4_name_value,
        import_service_basis: l4data.charge5_l4_basis_value,
        import_service_currency: l4data.charge5_l4_currency_value,
      }]
     } 


    const legSelected:any=JSON.parse(localStorage.getItem('selectedLegs') as string );

    const ls = legSelected.options

    for(let i=0;i<ls.length;i++){
      if(ls[i].value){

      // const obj1:{[key:string]:any}={}
      // const getfile=JSON.parse(localStorage.getItem(`${ls[i].name}dataSource`) as string);
      this.commonService.downloadFile( this.legsData[`${ls[i].name}Data`], `FCL-${ls[i].name}`,`${ls[i].name}Header`);
      }
    }
  //  this.commonService.downloadFile(this.l3Data, 'FCL_L3');
  }

  directUpload(){
    // this.downloaData();
  }

}
