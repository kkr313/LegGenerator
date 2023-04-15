import { Component, OnInit } from '@angular/core';
import { LclService } from 'src/app/lcl-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-lcl-downloadbtn',
  templateUrl: './lcl-downloadbtn.component.html',
  styleUrls: ['./lcl-downloadbtn.component.css'],
})
export class LclDownloadbtnComponent implements OnInit {
  constructor(private lclService: LclService, private apiService: ApiService) { }

  EnvDropdownOptions = [
    { value: 'QA', label: 'QA' },
    { value: 'Staging', label: 'Staging' },
    { value: 'Prod', label: 'Prod' },
  ];

  secondDropdownOptions: any[] = [];
  thirdDropdownOptions: any[] = [];
  fourthDropdownOptions: any[] = [];

  selectedFirstDropdownValue = '';
  selectedSecondDropdownValue = '';
  selectedThirdDropdownValue = '';
  selectedFourthDropdownValue = '';
  selectedEnvironment: any;

  updateSecondDropdownOptions() {
    switch (this.selectedFirstDropdownValue) {
      case 'QA':
        this.secondDropdownOptions = this.QaVendors;
        break;
      case 'Staging':
        this.secondDropdownOptions = this.QaVendors;
        break;
      case 'Prod':
        this.secondDropdownOptions = this.QaVendors;
        break;
    }
    this.updateThirdDropdownOptions();
    // this.updateFourthDropdownOptions();
  }

  updateThirdDropdownOptions() {
    switch (this.selectedFirstDropdownValue) {
      case 'QA':
        this.thirdDropdownOptions = this.QaSubVendors;
        break;
      case 'Staging':
        this.thirdDropdownOptions = this.QaSubVendors;
        break;
      case 'Prod':
        this.thirdDropdownOptions = this.QaSubVendors;
        break;
    }
  }

  // updateFourthDropdownOptions() {
  //   switch (this.selectedFirstDropdownValue) {
  //     case 'QA':
  //       this.fourthDropdownOptions = this.QaFileName;
  //       break;
  //     case 'Staging':
  //       this.fourthDropdownOptions = this.QaFileName;
  //       break;
  //     case 'Prod':
  //       this.fourthDropdownOptions = this.QaFileName;
  //       break;
  //   }
  // }

  selectVendor() {
    if (this.selectedFirstDropdownValue === 'QA') {
      this.secondDropdownOptions.map((option) => {
        if (this.selectedSecondDropdownValue == option.value) {
          this.selectedSecondDropdownValue = option.value;
          localStorage.setItem('vendorId', this.selectedSecondDropdownValue);
        }
      });
    }
  }

  selectLinear() {
    if (this.selectedFirstDropdownValue === 'QA') {
      this.thirdDropdownOptions.map((option) => {
        if (this.selectedThirdDropdownValue == option.value) {
          this.selectedThirdDropdownValue = option.value;
          localStorage.setItem('subVendorId', this.selectedThirdDropdownValue);
        }
      });
    }
  }

  // selectFile() {
  //   if (this.selectedFirstDropdownValue === 'QA') {
  //     this.fourthDropdownOptions.map((option) => {
  //       if (this.fourthDropdownOptions == option.value) {
  //         this.fourthDropdownOptions = option.value;
  //         console.log(this.fourthDropdownOptions);
  //       }
  //     });
  //   }
  // }

  QaVendors: any[] = [];
  QavendorsSearch: string = '';
  QaSubVendors: any[] = [];
  QasubVendorsSearch: string = '';
  QaFileName: any[] = [];
  QafilenameSearch: string = '';

  ngOnInit(): void {
    localStorage.removeItem('vendorId');
    localStorage.removeItem('subVendorId');
    //QA API Calls
    this.apiService.getQaFilenames().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        this.QaFileName = response.data;
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );

    this.apiService.getQaVendors().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        this.QaVendors = response.data;
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );

    this.apiService.getQaSubVendors().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        this.QaSubVendors = response.data;
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );

    //Staging Api Calls

    //Prod Api Calls
  }

  l3Data: any;
  legsData: any;

  downloaData() {
    let l3data = JSON.parse(localStorage.getItem('L3dataSource')!);
    let l2data = JSON.parse(localStorage.getItem('L2dataSource')!);
    let l4data = JSON.parse(localStorage.getItem('L4dataSource')!);
    let l2chadata = JSON.parse(localStorage.getItem('L2ChadataSource')!);
    let l4chadata = JSON.parse(localStorage.getItem('L4ChadataSource')!);
    let l1data = JSON.parse(localStorage.getItem('L1dataSource')!);
    let l5data = JSON.parse(localStorage.getItem('L5dataSource')!);

    this.legsData = {
      L3Data: [
        {
          origin_port: l3data.origin_port_value,
          destination_port: l3data.destination_port_value,
          via_pol: l3data.via_pol_value,
          via_pod: l3data.via_pod_value,
          via_port: l3data.via_port_value,
          transit_time: l3data.transit_time_value,
          service_name: l3data.service_name_value,
          service_type: l3data.service_type_value,
          cargo_type: l3data.cargo_type_value,
          commodities: l3data.commodities_value,
          start_date: l3data.start_date_value,
          expiry: l3data.expiry_value,
          remarks: l3data.remarks_value,
          inclusions: l3data.inclusions_value,
          ocean_freight: l3data.charge1_l3_name_value,
          ocean_freight_min: l3data.charge1_l3_min_value,
          ocean_freight_basis: l3data.charge1_l3_basis_value,
          ocean_freight_currency: l3data.charge1_l3_currency_value,
          bunker_adjustment_factor: l3data.charge2_l3_name_value,
          bunker_adjustment_factor_min: l3data.charge2_l3_min_value,
          bunker_adjustment_factor_basis: l3data.charge2_l3_basis_value,
          bunker_adjustment_factor_currency: l3data.charge2_l3_currency_value,
          ebaf: l3data.charge3_l3_name_value,
          ebaf_min: l3data.charge3_l3_min_value,
          ebaf_basis: l3data.charge3_l3_basis_value,
          ebaf_currency: l3data.charge3_l3_currency_value,
          carrier_surcharge: l3data.charge4_l3_name_value,
          carrier_surcharge_min: l3data.charge4_l3_min_value,
          carrier_surcharge_basis: l3data.charge4_l3_basis_value,
          carrier_surcharge_currency: l3data.charge4_l3_currency_value,
          currency_adjustment: l3data.charge5_l3_name_value,
          currency_adjustment_min: l3data.charge5_l3_min_value,
          currency_adjustment_basis: l3data.charge5_l3_basis_value,
          currency_adjustment_currency: l3data.charge5_l3_currency_value,
        },
      ],
      L2Data: [
        {
          origin_port: l2data.origin_port_value,
          destination_port: l2data.destination_port_value,
          via_pol: l2data.via_pol_value,
          via_pod: l2data.via_pod_value,
          service_type: l2data.service_type_value,
          cargo_type: l2data.cargo_type_value,
          commodities: l2data.commodities_value,
          start_date: l2data.start_date_value,
          expiry: l2data.expiry_value,
          remarks: l2data.remarks_value,
          inclusions: l2data.inclusions_value,
          origin_terminal_handling_charges: l2data.charge1_l2_name_value,
          origin_terminal_handling_charges_min: l2data.charge1_l2_min_value,
          origin_terminal_handling_charges_basis: l2data.charge1_l2_basis_value,
          origin_terminal_handling_charges_currency:
            l2data.charge1_l2_currency_value,
          booking_fee: l2data.charge2_l2_name_value,
          booking_fee_min: l2data.charge2_l2_min_value,
          booking_fee_basis: l2data.charge2_l2_basis_value,
          booking_fee_currency: l2data.charge2_l2_currency_value,
          export_handling: l2data.charge3_l2_name_value,
          export_handling_min: l2data.charge3_l2_min_value,
          export_handling_basis: l2data.charge3_l2_basis_value,
          export_handling_currency: l2data.charge3_l2_currency_value,
          documentation_fee: l2data.charge4_l2_name_value,
          documentation_fee_min: l2data.charge4_l2_min_value,
          documentation_fee_basis: l2data.charge4_l2_basis_value,
          documentation_fee_currency: l2data.charge4_l2_currency_value,
          security_fee: l2data.charge5_l2_name_value,
          security_fee_min: l2data.charge5_l2_min_value,
          security_fee_basis: l2data.charge5_l2_basis_value,
          security_fee_currency: l2data.charge5_l2_currency_value,
        },
      ],
      L4Data: [
        {
          origin_port: l4data.origin_port_value,
          destination_port: l4data.destination_port_value,
          via_pol: l4data.via_pol_value,
          via_pod: l4data.via_pod_value,
          service_type: l4data.service_type_value,
          cargo_type: l4data.cargo_type_value,
          commodities: l4data.commodities_value,
          start_date: l4data.start_date_value,
          expiry: l4data.expiry_value,
          remarks: l4data.remarks_value,
          inclusions: l4data.inclusions_value,
          destination_terminal_handling_charges: l4data.charge1_l4_name_value,
          destination_terminal_handling_charges_min:
            l4data.charge1_l4_min_value,
          destination_terminal_handling_charges_basis:
            l4data.charge1_l4_basis_value,
          destination_terminal_handling_charges_currency:
            l4data.charge1_l4_currency_value,
          congestion_fee: l4data.charge2_l4_name_value,
          congestion_fee_min: l4data.charge2_l4_min_value,
          congestion_fee_basis: l4data.charge2_l4_basis_value,
          congestion_fee_currency: l4data.charge2_l4_currency_value,
          import_handling: l4data.charge3_l4_name_value,
          import_handling_min: l4data.charge3_l4_min_value,
          import_handling_basis: l4data.charge3_l4_basis_value,
          import_handling_currency: l4data.charge3_l4_currency_value,
          cfs_charges: l4data.charge4_l4_name_value,
          cfs_charges_min: l4data.charge4_l4_min_value,
          cfs_charges_basis: l4data.charge4_l4_basis_value,
          cfs_charges_currency: l4data.charge4_l4_currency_value,
          charge_collect_fee: l4data.charge5_l4_name_value,
          charge_collect_fee_min: l4data.charge5_l4_min_value,
          charge_collect_fee_basis: l4data.charge5_l4_basis_value,
          charge_collect_fee_currency: l4data.charge5_l4_currency_value,
        },
      ],
      L2ChaData: [
        {
          origin_port: l2chadata.origin_port_value,
          start_date: l2chadata.start_date_value,
          expiry: l2chadata.expiry_value,
          remarks: l2chadata.remarks_value,
          inclusions: l2chadata.inclusions_value,
          export_custom_clearance_charges: l2chadata.charge1_l2cha_name_value,
          export_custom_clearance_charges_min:
            l2chadata.charge1_l2cha_min_value,
          export_custom_clearance_charges_basis:
            l2chadata.charge1_l2cha_basis_value,
          export_custom_clearance_charges_currency:
            l2chadata.charge1_l2cha_currency_value,
          transport_charges: l2chadata.charge2_l2cha_name_value,
          transport_charges_min: l2chadata.charge2_l2cha_min_value,
          transport_charges_basis: l2chadata.charge2_l2cha_basis_value,
          transport_charges_currency: l2chadata.charge2_l2cha_currency_value,
          eei_filing: l2chadata.charge3_l2cha_name_value,
          eei_filing_min: l2chadata.charge3_l2cha_min_value,
          eei_filing_basis: l2chadata.charge3_l2cha_basis_value,
          eei_filing_currency: l2chadata.charge3_l2cha_currency_value,
          misc: l2chadata.charge4_l2cha_name_value,
          misc_min: l2chadata.charge4_l2cha_min_value,
          misc_basis: l2chadata.charge4_l2cha_basis_value,
          misc_currency: l2chadata.charge4_l2cha_currency_value,
          vgm_certification_charges: l2chadata.charge5_l2cha_name_value,
          vgm_certification_charges_min: l2chadata.charge5_l2cha_min_value,
          vgm_certification_charges_basis: l2chadata.charge5_l2cha_basis_value,
          vgm_certification_charges_currency:
            l2chadata.charge5_l2cha_currency_value,
        },
      ],
      L4ChaData: [
        {
          destination_port: l4chadata.destination_port_value,
          start_date: l4chadata.start_date_value,
          expiry: l4chadata.expiry_value,
          remarks: l4chadata.remarks_value,
          inclusions: l4chadata.inclusions_value,
          import_custom_clearance_charges: l4chadata.charge1_l4cha_name_value,
          import_custom_clearance_charges_min:
            l4chadata.charge1_l4cha_min_value,
          import_custom_clearance_charges_basis:
            l4chadata.charge1_l4cha_basis_value,
          import_custom_clearance_charges_currency:
            l4chadata.charge1_l4cha_currency_value,
          document_transfer_fee: l4chadata.charge2_l4cha_name_value,
          document_transfer_fee_min: l4chadata.charge2_l4cha_min_value,
          document_transfer_fee_basis: l4chadata.charge2_l4cha_basis_value,
          document_transfer_fee_currency:
            l4chadata.charge2_l4cha_currency_value,
          customs_documentation: l4chadata.charge3_l4cha_name_value,
          customs_documentation_min: l4chadata.charge3_l4cha_min_value,
          customs_documentation_basis: l4chadata.charge3_l4cha_basis_value,
          customs_documentation_currency:
            l4chadata.charge3_l4cha_currency_value,
          misc: l4chadata.charge4_l4cha_name_value,
          misc_min: l4chadata.charge4_l4cha_min_value,
          misc_basis: l4chadata.charge4_l4cha_basis_value,
          misc_currency: l4chadata.charge4_l4cha_currency_value,
          aqis_processing_fee: l4chadata.charge5_l4cha_name_value,
          aqis_processing_fee_min: l4chadata.charge5_l4cha_min_value,
          aqis_processing_fee_basis: l4chadata.charge5_l4cha_basis_value,
          aqis_processing_fee_currency: l4chadata.charge5_l4cha_currency_value,
        },
      ],
      L1Data: [
        {
          origin: l1data.origin_value,
          destination: '',
          origin_portcode: '',
          destination_portcode: l1data.origin_port_value,
          origin_pincode: l1data.origin_pincode_value,
          destination_pincode: l1data.destination_pincode_value,
          origin_country_code: l1data.origin_port_value.substring(0, 2),
          destination_country_code: l1data.destination_port_value.substring(
            0,
            2
          ),
          origin_state_code: l1data.origin_state_code_value,
          destination_state_code: l1data.destination_state_code_value,
          impo_expo: l1data.impo_expo_value,
          service_type: l1data.service_type_value,
          transit_time: l1data.transit_time_value,
          transport_mode: l1data.transport_mode_value,
          no_of_axle: l1data.no_of_axle_value,
          distance_range: l1data.distance_range_value,
          distance_unit: l1data.distance_unit_value,
          volume_range: l1data.volume_range_value,
          volume_unit: l1data.volume_unit_value,
          weight_range: l1data.weight_range_value,
          weight_unit: l1data.weight_unit_value,
          start_date: l1data.start_date_value,
          expiry: l1data.expiry_value,
          remarks: l1data.remarks_value,
          inclusions: l1data.inclusions_value,
          load_type: l1data.load_type_value,
          pickup: l1data.charge1_l1_name_value,
          pickup_min: l1data.charge1_l1_min_value,
          pickup_basis: l1data.charge1_l1_basis_value,
          pickup_currency: l1data.charge1_l1_currency_value,
          fuel: l1data.charge2_l1_name_value,
          fuel_min: l1data.charge2_l1_min_value,
          fuel_basis: l1data.charge2_l1_basis_value,
          fuel_currency: l1data.charge2_l1_currency_value,
          toll: l1data.charge3_l1_name_value,
          toll_min: l1data.charge3_l1_min_value,
          toll_basis: l1data.charge3_l1_basis_value,
          toll_currency: l1data.charge3_l1_currency_value,
          miscellaneous_charges: l1data.charge4_l1_name_value,
          miscellaneous_charges_min: l1data.charge4_l1_min_value,
          miscellaneous_charges_basis: l1data.charge4_l1_basis_value,
          miscellaneous_charges_currency: l1data.charge4_l1_currency_value,
          parking: l1data.charge5_l1_name_value,
          parking_min: l1data.charge5_l1_min_value,
          parking_basis: l1data.charge5_l1_basis_value,
          parking_currency: l1data.charge5_l1_currency_value,
        },
      ],
      L5Data: [
        {
          origin: '',
          destination: l5data.destination_value,
          origin_portcode: l5data.destination_port_value,
          destination_portcode: '',
          origin_pincode: l5data.origin_pincode_value,
          destination_pincode: l5data.destination_pincode_value,
          origin_country_code: l1data.origin_port_value.substring(0, 2),
          destination_country_code: l1data.destination_port_value.substring(
            0,
            2
          ),
          origin_state_code: l5data.origin_state_code_value,
          destination_state_code: l5data.destination_state_code_value,
          impo_expo: l5data.impo_expo_value,
          service_type: l5data.service_type_value,
          transit_time: l5data.transit_time_value,
          transport_mode: l5data.transport_mode_value,
          no_of_axle: l5data.no_of_axle_value,
          distance_range: l5data.distance_range_value,
          distance_unit: l5data.distance_unit_value,
          volume_range: l5data.volume_range_value,
          volume_unit: l5data.volume_unit_value,
          weight_range: l5data.weight_range_value,
          weight_unit: l5data.weight_unit_value,
          start_date: l5data.start_date_value,
          expiry: l5data.expiry_value,
          remarks: l5data.remarks_value,
          inclusions: l5data.inclusions_value,
          delivery: l5data.charge1_l5_name_value,
          delivery_min: l5data.charge1_l5_min_value,
          delivery_basis: l5data.charge1_l5_basis_value,
          delivery_currency: l5data.charge1_l5_currency_value,
          fuel: l5data.charge2_l5_name_value,
          fuel_min: l5data.charge2_l5_min_value,
          fuel_basis: l5data.charge2_l5_basis_value,
          fuel_currency: l5data.charge2_l5_currency_value,
          toll: l5data.charge3_l5_name_value,
          toll_min: l5data.charge3_l5_min_value,
          toll_basis: l5data.charge3_l5_basis_value,
          toll_currency: l5data.charge3_l5_currency_value,
          haz: l5data.charge4_l5_name_value,
          haz_min: l5data.charge4_l5_min_value,
          haz_basis: l5data.charge4_l5_basis_value,
          haz_currency: l5data.charge4_l5_currency_value,
          parking: l5data.charge5_l5_name_value,
          parking_min: l5data.charge5_l5_min_value,
          parking_basis: l5data.charge5_l5_basis_value,
          parking_currency: l5data.charge5_l5_currency_value,
        },
      ],
    };

    const legSelected: any = JSON.parse(
      localStorage.getItem('lclSelectedLegs') as string
    );

    const ls = legSelected.options;

    for (let i = 0; i < ls.length; i++) {
      if (ls[i].value) {
        this.lclService.downloadFile(
          this.legsData[`${ls[i].name}Data`],
          `LCL-${ls[i].name}`,
          `${ls[i].name}Header`
        );
      }
    }
  }

  directUpload() {
    localStorage.setItem('directUpload', 'true');
    this.downloaData();
  }

  fileDownload() {
    localStorage.setItem('directUpload', 'false');
    this.downloaData();
  }
}
