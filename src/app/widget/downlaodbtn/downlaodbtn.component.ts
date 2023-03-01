import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-downlaodbtn',
  templateUrl: './downlaodbtn.component.html',
  styleUrls: ['./downlaodbtn.component.css'],
})
export class DownlaodbtnComponent implements OnInit {
  firstDropdownOptions = [
    { value: 'QA', label: 'QA' },
    { value: 'Staging', label: 'Staging' },
  ];

  secondDropdownOptions: { value: string; label: string }[] = [];
  thirdDropdownOptions: { value: string; label: string }[] = [];

  selectedFirstDropdownValue = this.firstDropdownOptions[0].value;
  selectedSecondDropdownValue = '';
  selectedThirdDropdownValue = '';

  updateSecondDropdownOptions() {
    switch (this.selectedFirstDropdownValue) {
      case 'Staging':
        this.secondDropdownOptions = [
          { label: 'FWDA', value: 'FWDA-Staging' },
          { label: 'NGLSA', value: 'NGLSA-Staging' },
          { label: 'SKYNET', value: 'SKYNET-Staging' },
        ];
        break;
      case 'QA':
        this.secondDropdownOptions = [
          { label: 'FWQA', value: 'FWQA-QA' },
          { label: 'NGLQA', value: 'NGLQA-QA' },
          { label: 'SKYQA', value: 'SKYQA-QA' },
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
          { label: 'EMIRATES', value: 'EMIRATES' },
          { label: 'CMA CGM', value: 'CMA CGM' },
          { label: 'HAPAG', value: 'HAPAG' },
          { label: 'SAFMARINE', value: 'SAFMARINE' },
          { label: 'CUL', value: 'CUL' },
          { label: 'EMC', value: 'EMC' },
          { label: 'EVERGREEN', value: 'EVERGREEN' },
          { label: 'COSCO', value: 'COSCO' },
          { label: 'MAERSK', value: 'MAERSK' },
          { label: 'WAN HAI', value: 'WAN HAI' },
        ];
        break;
      case 'Staging':
        this.thirdDropdownOptions = [
          { label: 'EMIRATES', value: 'EMIRATES' },
          { label: 'CMA CGM', value: 'CMA CGM' },
          { label: 'HAPAG', value: 'HAPAG' },
          { label: 'SAFMARINE', value: 'SAFMARINE' },
          { label: 'CUL', value: 'CUL' },
          { label: 'EMC', value: 'EMC' },
          { label: 'EVERGREEN', value: 'EVERGREEN' },
          { label: 'COSCO', value: 'COSCO' },
          { label: 'MAERSK', value: 'MAERSK' },
          { label: 'WAN HAI', value: 'WAN HAI' },
        ];
        break;
    }
    this.selectedThirdDropdownValue = this.thirdDropdownOptions[0].value;
    console.log(this.selectedThirdDropdownValue);
  }

  selectLinear() {
    if (this.selectedFirstDropdownValue === 'QA') {
      this.thirdDropdownOptions.map((option) => {
        if (this.selectedThirdDropdownValue == option.value) {
          this.selectedThirdDropdownValue = option.value;
          console.log(this.selectedThirdDropdownValue);
        }
      });
    } else {
      this.thirdDropdownOptions.map((option) => {
        if (this.selectedThirdDropdownValue == option.value) {
          this.selectedThirdDropdownValue = option.value;
          console.log(this.selectedThirdDropdownValue);
        }
      });
    }
  }

  selectVendor() {
    if (this.selectedFirstDropdownValue === 'QA') {
      this.secondDropdownOptions.map((option) => {
        if (this.selectedSecondDropdownValue == option.value) {
          this.selectedSecondDropdownValue = option.value;
          console.log(this.selectedSecondDropdownValue);
        }
      });
    } else {
      this.secondDropdownOptions.map((option) => {
        if (this.selectedSecondDropdownValue == option.value) {
          this.selectedSecondDropdownValue = option.value;
          console.log(this.selectedSecondDropdownValue);
        }
      });
    }
  }

  constructor(private commonService: CommonService, private http: HttpClient) {}

  ngOnInit(): void {
    // this.selectedEnvValue = this.env[0].value;
    // this.selectedVendorValue = this.vendor[0].value;
    // this.selectedLinearValue = this.linear[0].value;
    this.selectedFirstDropdownValue = this.firstDropdownOptions[0].value;
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
          bunker_adjustment_charge_baf_currency:
            l3data.charge2_l3_currency_value,
          carrier_security_surcharge: l3data.charge3_l3_name_value,
          carrier_security_surcharge_basis: l3data.charge3_l3_basis_value,
          carrier_security_surcharge_currency: l3data.charge3_l3_currency_value,
          low_sulphur_surcharge: l3data.charge4_l3_name_value,
          low_sulphur_surcharge_basis: l3data.charge4_l3_basis_value,
          low_sulphur_surcharge_currency: l3data.charge4_l3_currency_value,
          peak_season_surcharge: l3data.charge5_l3_name_value,
          peak_season_surcharge_basis: l3data.charge5_l3_basis_value,
          peak_season_surcharge_currency: l3data.charge5_l3_currency_value,
        },
      ],
      L2Data: [
        {
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
          origin_terminal_handling_charge_othc_basis:l2data.charge1_l2_basis_value,
          origin_terminal_handling_charge_othc_currency:l2data.charge1_l2_currency_value,
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
        },
      ],
      L4Data: [
        {
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
          destination_terminal_handling_charges_basis:l4data.charge1_l4_basis_value,
          destination_terminal_handling_charges_currency:l4data.charge1_l4_currency_value,
          documentation_fee_destination: l4data.charge2_l4_name_value,
          documentation_fee_destination_basis: l4data.charge2_l4_basis_value,
          documentation_fee_destination_currency:l4data.charge2_l4_currency_value,
          customs_examination: l4data.charge3_l4_name_value,
          customs_examination_basis: l4data.charge3_l4_basis_value,
          customs_examination_currency: l4data.charge3_l4_currency_value,
          surplus_and_demand_compensation: l4data.charge4_l4_name_value,
          surplus_and_demand_compensation_basis: l4data.charge4_l4_basis_value,
          surplus_and_demand_compensation_currency:l4data.charge4_l4_currency_value,
          import_service: l4data.charge5_l4_name_value,
          import_service_basis: l4data.charge5_l4_basis_value,
          import_service_currency: l4data.charge5_l4_currency_value,
        },
      ],
      L2ChaData: [
        {
          origin_port: l2chadata.origin_port_value,
          via_port: l2chadata.via_port_value,
          cfs_stuffing: l2chadata.cfs_stuffing_value,
          other_charges: l2chadata.other_charges_value,
          if_applicable_charges: l2chadata.if_applicable_charges_value,
          start_date: l2chadata.start_date_value,
          expiry: l2chadata.expiry_value,
          remarks: l2chadata.remarks_value,
          inclusions: l2chadata.inclusions_value,
          load_type: l2chadata.load_type_value,
          export_customs_formalities_per_container:l2chadata.charge1_l2cha_name_value,
          export_customs_formalities_per_container_basis:l2chadata.charge1_l2cha_basis_value,
          export_customs_formalities_per_container_currency:l2chadata.charge1_l2cha_currency_value,
          additional_customs_entry_fee: l2chadata.charge2_l2cha_name_value,
          additional_customs_entry_fee_basis:l2chadata.charge2_l2cha_basis_value,
          additional_customs_entry_fee_currency:l2chadata.charge2_l2cha_currency_value,
          customs_documentation_fee_at_origin:l2chadata.charge3_l2cha_name_value,
          customs_documentation_fee_at_origin_basis:l2chadata.charge3_l2cha_basis_value,
          customs_documentation_fee_at_origin_currency:l2chadata.charge3_l2cha_currency_value,
          export_customs_brokerage: l2chadata.charge4_l2cha_name_value,
          export_customs_brokerage_basis: l2chadata.charge4_l2cha_basis_value,
          export_customs_brokerage_currency:l2chadata.charge4_l2cha_currency_value,
          vgm_transmission: l2chadata.charge5_l2cha_name_value,
          vgm_transmission_basis: l2chadata.charge5_l2cha_basis_value,
          vgm_transmission_currency: l2chadata.charge5_l2cha_currency_value,
        },
      ],
      L4ChaData: [
        {
          destination_port: l4chadata.destination_port_value,
          via_port: l4chadata.via_port_value,
          cfs_stuffing: l4chadata.cfs_stuffing_value,
          other_charges: l4chadata.other_charges_value,
          if_applicable_charges: l4chadata.if_applicable_charges_value,
          start_date: l4chadata.start_date_value,
          expiry: l4chadata.expiry_value,
          remarks: l4chadata.remarks_value,
          inclusions: l4chadata.inclusions_value,
          load_type: l4chadata.load_type_value,
          loading_unloading: l4chadata.charge1_l4cha_name_value,
          loading_unloading_basis: l4chadata.charge1_l4cha_basis_value,
          loading_unloading_currency: l4chadata.charge1_l4cha_currency_value,
          customs_clearance_per_bl: l4chadata.charge2_l4cha_name_value,
          customs_clearance_per_bl_basis: l4chadata.charge2_l4cha_basis_value,
          customs_clearance_per_bl_currency:l4chadata.charge2_l4cha_currency_value,
          additional_customs_entry_fee: l4chadata.charge3_l4cha_name_value,
          additional_customs_entry_fee_basis:l4chadata.charge3_l4cha_basis_value,
          additional_customs_entry_fee_currency:l4chadata.charge3_l4cha_currency_value,
          customs_documentation_fee_at_destination:l4chadata.charge4_l4cha_name_value,
          customs_documentation_fee_at_destination_basis:l4chadata.charge4_l4cha_basis_value,
          customs_documentation_fee_at_destination_currency:l4chadata.charge4_l4cha_currency_value,
          import_customs_brokerage: l4chadata.charge5_l4cha_name_value,
          import_customs_brokerage_basis: l4chadata.charge5_l4cha_basis_value,
          import_customs_brokerage_currency:l4chadata.charge5_l4cha_currency_value,
        },
      ],
      L1Data: [
        {
          origin: l1data.origin_value,
          destination: '',
          origin_portcode: '',
          destination_portcode: l1data.destination_portcode_value,
          empty_container_pickup: l1data.empty_container_pickup_value,
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
          return_mt_to_terminal: l1data.charge1_l1_name_value,
          return_mt_to_terminal_min: l1data.charge1_l1_min_value,
          return_mt_to_terminal_basis: l1data.charge1_l1_basis_value,
          return_mt_to_terminal_currency: l1data.charge1_l1_currency_value,
          hazardous_goods_surcharge: l1data.charge2_l1_name_value,
          hazardous_goods_surcharge_min: l1data.charge2_l1_min_value,
          hazardous_goods_surcharge_basis: l1data.charge2_l1_basis_value,
          hazardous_goods_surcharge_currency: l1data.charge2_l1_currency_value,
          pickup_charge: l1data.charge3_l1_name_value,
          pickup_charge_min: l1data.charge3_l1_min_value,
          pickup_charge_basis: l1data.charge3_l1_basis_value,
          pickup_charge_currency: l1data.charge3_l1_currency_value,
          adc: l1data.charge4_l1_name_value,
          adc_min: l1data.charge4_l1_min_value,
          adc_basis: l1data.charge4_l1_basis_value,
          adc_currency: l1data.charge4_l1_currency_value,
          overweight_surcharge: l1data.charge5_l1_name_value,
          overweight_surcharge_min: l1data.charge5_l1_min_value,
          overweight_surcharge_basis: l1data.charge5_l1_basis_value,
          overweight_surcharge_currency: l1data.charge5_l1_currency_value,
        },
      ],
      L5Data: [
        {
          origin: '',
          destination: l5data.destination_value,
          origin_portcode: l5data.origin_portcode_value,
          destination_portcode: '',
          empty_container_drop: l5data.empty_container_drop_value,
          origin_pincode: l5data.origin_pincode_value,
          destination_pincode: l5data.destination_pincode_value,
          origin_country_code: l5data.origin_country_code_value,
          destination_country_code: l5data.destination_country_code_value,
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
          load_type: l5data.load_type_value,
          return_mt_to_terminal: l5data.charge1_l5_name_value,
          return_mt_to_terminal_min: l5data.charge1_l5_min_value,
          return_mt_to_terminal_basis: l5data.charge1_l5_basis_value,
          return_mt_to_terminal_currency: l5data.charge1_l5_currency_value,
          priority_surcharge: l5data.charge2_l5_name_value,
          priority_surcharge_min: l5data.charge2_l5_min_value,
          priority_surcharge_basis: l5data.charge2_l5_basis_value,
          priority_surcharge_currency: l5data.charge2_l5_currency_value,
          tarps: l5data.charge3_l5_name_value,
          tarps_min: l5data.charge3_l5_min_value,
          tarps_basis: l5data.charge3_l5_basis_value,
          tarps_currency: l5data.charge3_l5_currency_value,
          cartage_to_weighbridge: l5data.charge4_l5_name_value,
          cartage_to_weighbridge_min: l5data.charge4_l5_min_value,
          cartage_to_weighbridge_basis: l5data.charge4_l5_basis_value,
          cartage_to_weighbridge_currency: l5data.charge4_l5_currency_value,
          delivery_fee: l5data.charge5_l5_name_value,
          delivery_fee_min: l5data.charge5_l5_min_value,
          delivery_fee_basis: l5data.charge5_l5_basis_value,
          delivery_fee_currency: l5data.charge5_l5_currency_value,
        },
      ],
    };

    const legSelected: any = JSON.parse(
      localStorage.getItem('selectedLegs') as string
    );

    const ls = legSelected.options;

    for (let i = 0; i < ls.length; i++) {
      if (ls[i].value) {
        // const obj1:{[key:string]:any}={}
        // const getfile=JSON.parse(localStorage.getItem(`${ls[i].name}dataSource`) as string);
        this.commonService.downloadFile(
          this.legsData[`${ls[i].name}Data`],
          `FCL-${ls[i].name}`,
          `${ls[i].name}Header`
        );
      }
    }
    //  this.commonService.downloadFile(this.l3Data, 'FCL_L3');
  }

  directUpload() {
    // this.downloaData();
  }
}
