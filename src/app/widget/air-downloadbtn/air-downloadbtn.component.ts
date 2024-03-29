import { Component, OnInit } from '@angular/core';
import { AirService } from 'src/app/air-service';

@Component({
  selector: 'app-air-downloadbtn',
  templateUrl: './air-downloadbtn.component.html',
  styleUrls: ['./air-downloadbtn.component.css']
})
export class AirDownloadbtnComponent implements OnInit {

  QaVendors: any[];
  QaSubVendors: any[];
  QaAirlines: any[];
  StagingVendors: any [];
  StagingSubVendors: any [];
  StagingAirlines: any[];

  constructor(private airService: AirService) { 
    const QA_STAG_ENABLED = localStorage.getItem('QA_STAG_ENABLED');
    const PROD_ENABLED = localStorage.getItem('PROD_ENABLED');

    const QaVendorsString : any = localStorage.getItem('QaVendors');
    this.QaVendors = JSON.parse(QaVendorsString);

    const QaSubVendorString : any = localStorage.getItem('QaSubVendors');
    this.QaSubVendors = JSON.parse(QaSubVendorString);

    const QaAirlineString : any = localStorage.getItem('QaAirlines');
    this.QaAirlines = JSON.parse(QaAirlineString);


    const StagingVendorsString : any = localStorage.getItem('StagingVendors');
    this.StagingVendors = JSON.parse(StagingVendorsString);

    const StagingSubVendorsString : any = localStorage.getItem('StagingSubVendors');
    this.StagingSubVendors = JSON.parse(StagingSubVendorsString);

    const StagingAirlineString : any = localStorage.getItem('StagingAirlines');
    this.StagingAirlines = JSON.parse(StagingAirlineString);

    if (QA_STAG_ENABLED === 'true') {
      this.EnvDropdownOptions = [
        { value: 'QA', label: 'QA' },
        { value: 'Staging', label: 'Staging' },
      ];
    } else if (PROD_ENABLED === 'true') {
      this.EnvDropdownOptions = [
        { value: 'Prod', label: 'Prod' },
      ];
    }
  }

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
        this.selectedSecondDropdownValue = '';
        localStorage.removeItem('vendorId');
        localStorage.removeItem('subVendorId');
        this.secondDropdownOptions = this.QaVendors;
        localStorage.setItem('ModeSelected',this.selectedFirstDropdownValue)
        break;
      case 'Staging':
        this.selectedSecondDropdownValue = '';
        localStorage.removeItem('vendorId');
        localStorage.removeItem('subVendorId');
        this.secondDropdownOptions = this.StagingVendors;
        localStorage.setItem('ModeSelected',this.selectedFirstDropdownValue)
        break;
      case 'Prod':
        this.selectedSecondDropdownValue = '';
        localStorage.removeItem('vendorId');
        localStorage.removeItem('subVendorId');
        this.secondDropdownOptions = this.QaVendors;
        localStorage.setItem('ModeSelected',this.selectedFirstDropdownValue)
        break;
    }
    this.updateThirdDropdownOptions();
    // this.updateFourthDropdownOptions();
  }

  updateThirdDropdownOptions() {
    switch (this.selectedFirstDropdownValue) {
      case 'QA':
        this.selectedThirdDropdownValue = '';
        this.thirdDropdownOptions = this.QaAirlines;
        break;
      case 'Staging':
        this.selectedThirdDropdownValue = '';
        this.thirdDropdownOptions = this.StagingAirlines;
        break;
      case 'Prod':
        this.selectedThirdDropdownValue = '';
        this.thirdDropdownOptions = this.QaAirlines;
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
    }else if(this.selectedFirstDropdownValue === 'Staging'){
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
    }else if(this.selectedFirstDropdownValue === 'Staging'){
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


  ngOnInit(): void {
    localStorage.removeItem('vendorId');
    localStorage.removeItem('subVendorId');
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
          via_route: l3data.via_route_value,
          transit_time: l3data.transit_time_value,
          service_type: l3data.service_type_value,
          frequency: l3data.frequency_value,
          cargo_type: l3data.cargo_type_value,
          commodities: l3data.commodities_value,
          start_date: l3data.start_date_value,
          expiry: l3data.expiry_value,
          remarks: l3data.remarks_value,
          inclusions: l3data.inclusions_value,
          air_freight: l3data.charge1_l3_name_value,
          air_freight_min: l3data.charge1_l3_min_value,
          air_freight_basis: l3data.charge1_l3_basis_value,
          air_freight_currency: l3data.charge1_l3_currency_value,
          air_freight_fee: l3data.charge2_l3_name_value,
          air_freight_fee_min: l3data.charge2_l3_min_value,
          air_freight_fee_basis: l3data.charge2_l3_basis_value,
          air_freight_fee_currency: l3data.charge2_l3_currency_value,
          fsc: l3data.charge3_l3_name_value,
          fsc_min: l3data.charge3_l3_min_value,
          fsc_basis: l3data.charge3_l3_basis_value,
          fsc_currency: l3data.charge3_l3_currency_value,
          aai_charges: l3data.charge4_l3_name_value,
          aai_charges_min: l3data.charge4_l3_min_value,
          aai_charges_basis: l3data.charge4_l3_basis_value,
          aai_charges_currency: l3data.charge4_l3_currency_value,
          landing_charges: l3data.charge5_l3_name_value,
          landing_charges_min: l3data.charge5_l3_min_value,
          landing_charges_basis: l3data.charge5_l3_basis_value,
          landing_charges_currency: l3data.charge5_l3_currency_value,
        },
      ],
      L2Data: [
        {
          origin_port: l2data.origin_port_value,
          service_type: l2data.service_type_value,
          cargo_type: l2data.cargo_type_value,
          commodities: l2data.commodities_value,
          start_date: l2data.start_date_value,
          expiry: l2data.expiry_value,
          remarks: l2data.remarks_value,
          inclusions: l2data.inclusions_value,
          documentation_fee: l2data.charge1_l2_name_value,
          documentation_fee_min: l2data.charge1_l2_min_value,
          documentation_fee_basis: l2data.charge1_l2_basis_value,
          documentation_fee_currency:l2data.charge1_l2_currency_value,
          agency_charges: l2data.charge2_l2_name_value,
          agency_charges_min: l2data.charge2_l2_min_value,
          agency_charges_basis: l2data.charge2_l2_basis_value,
          agency_charges_currency: l2data.charge2_l2_currency_value,
          loading_unloading_fee: l2data.charge3_l2_name_value,
          loading_unloading_fee_min: l2data.charge3_l2_min_value,
          loading_unloading_fee_basis: l2data.charge3_l2_basis_value,
          loading_unloading_fee_currency: l2data.charge3_l2_currency_value,
          origin_terminal_handling_charges: l2data.charge4_l2_name_value,
          origin_terminal_handling_charges_min: l2data.charge4_l2_min_value,
          origin_terminal_handling_charges_basis: l2data.charge4_l2_basis_value,
          origin_terminal_handling_charges_currency: l2data.charge4_l2_currency_value,
          custom_clearance_charges: l2data.charge5_l2_name_value,
          custom_clearance_charges_min: l2data.charge5_l2_min_value,
          custom_clearance_charges_basis: l2data.charge5_l2_basis_value,
          custom_clearance_charges_currency: l2data.charge5_l2_currency_value,
        },
      ],
      L4Data: [
        {
          destination_port: l4data.destination_port_value,
          service_type: l4data.service_type_value,
          cargo_type: l4data.cargo_type_value,
          commodities: l4data.commodities_value,
          start_date: l4data.start_date_value,
          expiry: l4data.expiry_value,
          remarks: l4data.remarks_value,
          inclusions: l4data.inclusions_value,
          documentation_fee: l4data.charge1_l4_name_value,
          documentation_fee_min:l4data.charge1_l4_min_value,
          documentation_fee_basis:l4data.charge1_l4_basis_value,
          documentation_fee_currency:l4data.charge1_l4_currency_value,
          agency_charges: l4data.charge2_l4_name_value,
          agency_charges_min: l4data.charge2_l4_min_value,
          agency_charges_basis: l4data.charge2_l4_basis_value,
          agency_charges_currency: l4data.charge2_l4_currency_value,
          loading_unloading_fee: l4data.charge3_l4_name_value,
          loading_unloading_fee_min: l4data.charge3_l4_min_value,
          loading_unloading_fee_basis: l4data.charge3_l4_basis_value,
          loading_unloading_fee_currency: l4data.charge3_l4_currency_value,
          destination_terminal_handling_charges: l4data.charge4_l4_name_value,
          destination_terminal_handling_charges_min: l4data.charge4_l4_min_value,
          destination_terminal_handling_charges_basis: l4data.charge4_l4_basis_value,
          destination_terminal_handling_charges_currency: l4data.charge4_l4_currency_value,
          inspection_fee: l4data.charge5_l4_name_value,
          inspection_fee_min: l4data.charge5_l4_min_value,
          inspection_fee_basis: l4data.charge5_l4_basis_value,
          inspection_fee_currency: l4data.charge5_l4_currency_value,
        },
      ],
      L2ChaData: [
        {
          origin_port: l2chadata.origin_port_value,
          start_date: l2chadata.start_date_value,
          expiry: l2chadata.expiry_value,
          remarks: l2chadata.remarks_value,
          inclusions: l2chadata.inclusions_value,
          custom_documentation_fee: l2chadata.charge1_l2cha_name_value,
          custom_documentation_fee_min:l2chadata.charge1_l2cha_min_value,
          custom_documentation_fee_basis:l2chadata.charge1_l2cha_basis_value,
          custom_documentation_fee_currency:l2chadata.charge1_l2cha_currency_value,
          custom_clearance_charges: l2chadata.charge2_l2cha_name_value,
          custom_clearance_charges_min: l2chadata.charge2_l2cha_min_value,
          custom_clearance_charges_basis: l2chadata.charge2_l2cha_basis_value,
          custom_clearance_charges_currency: l2chadata.charge2_l2cha_currency_value,
          loading_unloading_fee: l2chadata.charge3_l2cha_name_value,
          loading_unloading_fee_min: l2chadata.charge3_l2cha_min_value,
          loading_unloading_fee_basis: l2chadata.charge3_l2cha_basis_value,
          loading_unloading_fee_currency: l2chadata.charge3_l2cha_currency_value,
          custom_inspection_charges: l2chadata.charge4_l2cha_name_value,
          custom_inspection_charges_min: l2chadata.charge4_l2cha_min_value,
          custom_inspection_charges_basis: l2chadata.charge4_l2cha_basis_value,
          custom_inspection_charges_currency: l2chadata.charge4_l2cha_currency_value,
          misc: l2chadata.charge5_l2cha_name_value,
          misc_min: l2chadata.charge5_l2cha_min_value,
          misc_basis: l2chadata.charge5_l2cha_basis_value,
          misc_currency: l2chadata.charge5_l2cha_currency_value,
        },
      ],
      L4ChaData: [
        {
          destination_port: l4chadata.destination_port_value,
          start_date: l4chadata.start_date_value,
          expiry: l4chadata.expiry_value,
          remarks: l4chadata.remarks_value,
          inclusions: l4chadata.inclusions_value,
          custom_documentation_fee: l4chadata.charge1_l4cha_name_value,
          custom_documentation_fee_min:l4chadata.charge1_l4cha_min_value,
          custom_documentation_fee_basis:l4chadata.charge1_l4cha_basis_value,
          custom_documentation_fee_currency:l4chadata.charge1_l4cha_currency_value,
          custom_clearance_charges: l4chadata.charge2_l4cha_name_value,
          custom_clearance_charges_min: l4chadata.charge2_l4cha_min_value,
          custom_clearance_charges_basis: l4chadata.charge2_l4cha_basis_value,
          custom_clearance_charges_currency:l4chadata.charge2_l4cha_currency_value,
          loading_unloading_fee: l4chadata.charge3_l4cha_name_value,
          loading_unloading_fee_min: l4chadata.charge3_l4cha_min_value,
          loading_unloading_fee_basis: l4chadata.charge3_l4cha_basis_value,
          loading_unloading_fee_currency:l4chadata.charge3_l4cha_currency_value,
          custom_inspection_charges: l4chadata.charge4_l4cha_name_value,
          custom_inspection_charges_min: l4chadata.charge4_l4cha_min_value,
          custom_inspection_charges_basis: l4chadata.charge4_l4cha_basis_value,
          custom_inspection_charges_currency: l4chadata.charge4_l4cha_currency_value,
          misc: l4chadata.charge5_l4cha_name_value,
          misc_min: l4chadata.charge5_l4cha_min_value,
          misc_basis: l4chadata.charge5_l4cha_basis_value,
          misc_currency: l4chadata.charge5_l4cha_currency_value,
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
          origin_country_code: l1data.origin_country_code_value,
          destination_country_code: l1data.destination_country_code_value,
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
          documentation: l1data.charge3_l1_name_value,
          documentation_min: l1data.charge3_l1_min_value,
          documentation_basis: l1data.charge3_l1_basis_value,
          documentation_currency: l1data.charge3_l1_currency_value,
          misc: l1data.charge4_l1_name_value,
          misc_min: l1data.charge4_l1_min_value,
          misc_basis: l1data.charge4_l1_basis_value,
          misc_currency: l1data.charge4_l1_currency_value,
          toll: l1data.charge5_l1_name_value,
          toll_min: l1data.charge5_l1_min_value,
          toll_basis: l1data.charge5_l1_basis_value,
          toll_currency: l1data.charge5_l1_currency_value,
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
          origin_country_code: l1data.origin_country_code_value,
          destination_country_code: l1data.destination_country_code_value,
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
          security: l5data.charge4_l5_name_value,
          security_min: l5data.charge4_l5_min_value,
          security_basis: l5data.charge4_l5_basis_value,
          security_currency: l5data.charge4_l5_currency_value,
          misc: l5data.charge5_l5_name_value,
          misc_min: l5data.charge5_l5_min_value,
          misc_basis: l5data.charge5_l5_basis_value,
          misc_currency: l5data.charge5_l5_currency_value,
        },
      ],
    };

    const legSelected: any = JSON.parse(
      localStorage.getItem('airSelectedLegs') as string
    );

    const ls = legSelected.options;

    for (let i = 0; i < ls.length; i++) {
      if (ls[i].value) {
        this.airService.downloadFile(
          this.legsData[`${ls[i].name}Data`],
          `AIR-${ls[i].name}`,
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
