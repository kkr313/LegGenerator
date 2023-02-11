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

    console.log(this.selectedFirstDropdownValue)

  }

  l3Data: any;

  downloaData() {
    let data = JSON.parse(localStorage.getItem('dataSource')!);
    if (data) {
      this.l3Data = [{
        origin_port: data.origin_port_value,
        destination_port: data.destination_port_value,
        via_pol: data.via_pol_value,
        via_pod: data.via_pod_value,
        via_port: data.via_port_value,
        contract_number: data.contract_number_value,
        transit_time: data.transit_time_value,
        service_type: data.service_type_value,
        sailing_date: data.sailing_date_value,
        cargo_type: data.cargo_type_value,
        commodities: data.commodities_value,
        other_charges: data.other_charges_value,
        if_applicable_charges: data.if_applicable_charges_value,
        start_date: data.start_date_value,
        expiry: data.expiry_value,
        remarks: data.remarks_value,
        inclusions: data.inclusions_value,
        load_type: data.load_type_value,
        basic_ocean_freight: data.charge1_name_value,
        basic_ocean_freight_basis: data.charge1_basis_value,
        basic_ocean_freight_currency: data.charge1_currency_value,
        bunker_adjustment_charge_baf: data.charge2_name_value,
        bunker_adjustment_charge_baf_basis: data.charge2_basis_value,
        bunker_adjustment_charge_baf_currency: data.charge2_currency_value,
        carrier_security_surcharge: data.charge3_name_value,
        carrier_security_surcharge_basis: data.charge3_basis_value,
        carrier_security_surcharge_currency: data.charge3_currency_value,
        low_sulphur_surcharge: data.charge4_name_value,
        low_sulphur_surcharge_basis: data.charge4_basis_value,
        low_sulphur_surcharge_currency: data.charge4_currency_value,
        peak_season_surcharge: data.charge5_name_value,
        peak_season_surcharge_basis: data.charge5_basis_value,
        peak_season_surcharge_currency: data.charge5_currency_value,
      }]
    }

    this.commonService.downloadFile(this.l3Data, 'FCL_L3');
  }

  directUpload(){
    // this.downloaData();
  }

}
