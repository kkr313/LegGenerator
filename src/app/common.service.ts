import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import FclData from 'src/assets/data/legsheader.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {}

  FileData: any = {
    origin_port: FclData.FCL[0].L3.col1.key,
    origin_port_value: FclData.FCL[0].L3.col1.value,
    destination_port: FclData.FCL[0].L3.col2.key,
    destination_port_value: FclData.FCL[0].L3.col2.value,
    via_pol: FclData.FCL[0].L3.col3.key,
    via_pol_value: FclData.FCL[0].L3.col3.value,
    via_pod: FclData.FCL[0].L3.col4.key,
    via_pod_value: FclData.FCL[0].L3.col4.value,
    via_port: FclData.FCL[0].L3.col5.key,
    via_port_value: FclData.FCL[0].L3.col5.value,
    contract_number: FclData.FCL[0].L3.col6.key,
    contract_number_value: FclData.FCL[0].L3.col6.value,
    transit_time: FclData.FCL[0].L3.col7.key,
    transit_time_value: FclData.FCL[0].L3.col7.value,
    service_type: FclData.FCL[0].L3.col8.key,
    service_type_value: FclData.FCL[0].L3.col8.value,
    sailing_date: FclData.FCL[0].L3.col9.key,
    sailing_date_value: FclData.FCL[0].L3.col9.value,
    cargo_type: FclData.FCL[0].L3.col10.key,
    cargo_type_value: FclData.FCL[0].L3.col10.value,
    commodities: FclData.FCL[0].L3.col11.key,
    commodities_value: FclData.FCL[0].L3.col11.value,
    other_charges: FclData.FCL[0].L3.col12.key,
    other_charges_value: FclData.FCL[0].L3.col12.value,
    if_applicable_charges: FclData.FCL[0].L3.col13.key,
    if_applicable_charges_value: FclData.FCL[0].L3.col13.value,
    start_date: FclData.FCL[0].L3.col14.key,
    start_date_value: FclData.FCL[0].L3.col14.value,
    expiry: FclData.FCL[0].L3.col15.key,
    expiry_value: FclData.FCL[0].L3.col15.value,
    remarks: FclData.FCL[0].L3.col16.key,
    remarks_value: FclData.FCL[0].L3.col16.value,
    inclusions: FclData.FCL[0].L3.col17.key,
    inclusions_value: FclData.FCL[0].L3.col17.value,
    load_type: FclData.FCL[0].L3.col18.key,
    load_type_value: FclData.FCL[0].L3.col18.value,
    charge1_name: FclData.FCL[0].L3.charges1.charge_name_key,
    charge1_name_value: FclData.FCL[0].L3.charges1.charge_name_value,
    charge1_basis: FclData.FCL[0].L3.charges1.charge_basis_key,
    charge1_basis_value: FclData.FCL[0].L3.charges1.charge_basis_value,
    charge1_currency: FclData.FCL[0].L3.charges1.charge_currency_key,
    charge1_currency_value: FclData.FCL[0].L3.charges1.charge_currency_value,
    charge2_name: FclData.FCL[0].L3.charges2.charge_name_key,
    charge2_name_value: FclData.FCL[0].L3.charges2.charge_name_value,
    charge2_basis: FclData.FCL[0].L3.charges2.charge_basis_key,
    charge2_basis_value: FclData.FCL[0].L3.charges2.charge_basis_value,
    charge2_currency: FclData.FCL[0].L3.charges2.charge_currency_key,
    charge2_currency_value: FclData.FCL[0].L3.charges2.charge_currency_value,
    charge3_name: FclData.FCL[0].L3.charges3.charge_name_key,
    charge3_name_value: FclData.FCL[0].L3.charges3.charge_name_value,
    charge3_basis: FclData.FCL[0].L3.charges3.charge_basis_key,
    charge3_basis_value: FclData.FCL[0].L3.charges3.charge_basis_value,
    charge3_currency: FclData.FCL[0].L3.charges3.charge_currency_key,
    charge3_currency_value: FclData.FCL[0].L3.charges3.charge_currency_value,
    charge4_name: FclData.FCL[0].L3.charges4.charge_name_key,
    charge4_name_value: FclData.FCL[0].L3.charges4.charge_name_value,
    charge4_basis: FclData.FCL[0].L3.charges4.charge_basis_key,
    charge4_basis_value: FclData.FCL[0].L3.charges4.charge_basis_value,
    charge4_currency: FclData.FCL[0].L3.charges4.charge_currency_key,
    charge4_currency_value: FclData.FCL[0].L3.charges4.charge_currency_value,
    charge5_name: FclData.FCL[0].L3.charges5.charge_name_key,
    charge5_name_value: FclData.FCL[0].L3.charges5.charge_name_value,
    charge5_basis: FclData.FCL[0].L3.charges5.charge_basis_key,
    charge5_basis_value: FclData.FCL[0].L3.charges5.charge_basis_value,
    charge5_currency: FclData.FCL[0].L3.charges5.charge_currency_key,
    charge5_currency_value: FclData.FCL[0].L3.charges5.charge_currency_value,
  }

  updateValue = new BehaviorSubject(this.FileData);
  
  // headerData: any[] = Object.keys(this.FileData).filter((_, i) => i % 2 === 0);

  downloadFile(data: any, filename = 'data') {
    let csvData = this.ConvertToCSV(data, [
      this.FileData.origin_port,
      this.FileData.destination_port,
      this.FileData.via_pol,
      this.FileData.via_pod,
      this.FileData.via_port,
      this.FileData.contract_number,
      this.FileData.transit_time,
      this.FileData.service_type,
      this.FileData.sailing_date,
      this.FileData.cargo_type,
      this.FileData.commodities,
      this.FileData.other_charges,
      this.FileData.if_applicable_charges,
      this.FileData.start_date,
      this.FileData.expiry,
      this.FileData.remarks,
      this.FileData.inclusions,
      this.FileData.load_type,
      this.FileData.charge1_name,
      this.FileData.charge1_basis,
      this.FileData.charge1_currency,
      this.FileData.charge2_name,
      this.FileData.charge2_basis,
      this.FileData.charge2_currency,
      this.FileData.charge3_name,
      this.FileData.charge3_basis,
      this.FileData.charge3_currency,
      this.FileData.charge4_name,
      this.FileData.charge4_basis,
      this.FileData.charge4_currency,
      this.FileData.charge5_name,
      this.FileData.charge5_basis,
      this.FileData.charge5_currency,

    ]);

    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
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
    // localStorage.removeItem('dataSource');
    // this.directUpload(blob)
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

  directUpload(file: Blob){    
    const myHeaders = new HttpHeaders();
    myHeaders.append("apikey", "dyusakewjrf3712937461@44$bfdfbGD");
    // myHeaders.append("Cookie", "laravel_session=eyJpdiI6IkhyZlpHaUNpNWRUdGdTb1JBd3MyN1E9PSIsInZhbHVlIjoiNVU2TUxqa3VSOXRFRFdnelFCTU5YajN5eVlIejFsY0JYbnlyektMUWxseVI0YXpJSStQblJsM1hTeVZoV1pnT3lmMnBNRzNMZnJSTm5KQ2dHNjhhYlE9PSIsIm1hYyI6IjRlZjdjODY4NDY2OGEyMzI2OGQyY2RiMWMwZWY5Mjk4MjNiYzg2MGFjZTlhYThiOTM3ZDdlN2M4ZWYwYjYyMzQifQ%3D%3D; laravel_session=eyJpdiI6IlBzdFMzXC9JXC8yMlRaODVqRmNsd3RGQT09IiwidmFsdWUiOiJIZUZJSFRVRjc5ZW5QSTRjY3E1MU5Lc3BjOEFPaFNTMlQ4V0FDK21rUGE3N3pvY1FhQ3NTSkpRUjFcLzNTc3VPamdkZmRDUFJyMmdpSlkwOExZNk9nMXc9PSIsIm1hYyI6IjM1YWVkYWIwY2QwMDRkZDE3NzU3NTI5YWVkYzNjYjUwNWQwMWRkYTUzZjY2N2I0OWNlMTVhY2E0NWM1NmMyZTQifQ%3D%3D");
    const formData = new FormData();
    formData.append("vendor", "vendr-290668099ee5");
    formData.append("subvendor", "sv-17a3304d88fl");
    formData.append("date", "2023-09-22");
    formData.append('file', file , 'KaranTestingFile_FCL_L3.csv');
    formData.append("leg", "l3");
    formData.append("inputFileName", "fcl");
    formData.append("new", "true");
    formData.append("ticketNumber", "13245");
    formData.append("createdBy", "Karhick N");
    formData.append("sv_combination", "1,2");

    const requestOptions = {
      headers: myHeaders,
      // body: formData,
      redirect: 'follow'
    };

    this.http.post("https://staging.freightbro.com/api/file/fcl", formData, requestOptions).subscribe((res: any) => {
      console.log(res.body);
      console.log(res.error);
    });
  }
}

