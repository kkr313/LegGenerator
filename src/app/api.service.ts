import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcXAyakxoWXE4eXM4Q05EdGdjdklvSUZYR2xaa2RLRVFKRmxVcmZwV0RNIn0.eyJleHAiOjE2ODE2NzM4NzgsImlhdCI6MTY4MTU4NzQ3OCwiYXV0aF90aW1lIjoxNjgxNDIzNTA2LCJqdGkiOiI3OTlmMzU0NS1mYzE5LTQ0ZWMtYjM1Zi05MDc2YTBlMGRkMGYiLCJpc3MiOiJodHRwczovL2F1dGguZnJlaWdodGJyby5pbi9hdXRoL3JlYWxtcy9GcmVpZ2h0aWZ5LURhc2hib2FyZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzFhZGUyZC05YjFiLTQyNmMtOGMwNS0wMTJmNGRhYmQzNjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1kYXNoYm9hcmQiLCJub25jZSI6IjE3NzNhZDBiLTZiMjgtNGI2Zi04ZWU3LTY0ZmM3ODM3OWZhMiIsInNlc3Npb25fc3RhdGUiOiJlNjRiYjU1NC1hMzhlLTRmYWQtODY0Yy0yNTJiOWU0MmY4MDgiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlbGV0ZS1maWxlcyIsImNvbmZpZ3VyYXRpb24iLCJkb21haW4tY2FycmllcnMiLCJwb3J0cyIsImltcG9ydC1zaGlwcGVycy1sb2ciLCJzY2hlZHVsZS1hcGktc2V0dGluZ3MiLCJkZWZhdWx0LXJvbGVzLWZyZWlnaHRpZnktZGFzaGJvYXJkIiwib2ZmbGluZV9hY2Nlc3MiLCJkYXVfYXVkaXRfdHJhaWwiLCJkYXUiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRhdV90YXNrX2V4ZWN1dG9yIiwiZWRpdC1zaGlwbWVudHMiLCJzbGFiLWNoYXJnZXMiLCJ1cGxvYWQtZm9ybWF0cyIsImxvb2t1cCIsImZjbGxlZyIsImNvdW50cmllcyIsImFnZW50cyIsInppcGNvZGUiLCJhcGktc2VydmljZSIsImZpbGVzIiwic3ViLXZlbmRvciIsImRvbWFpbi1kYXRhIiwiYXBpLXJhdGVzIiwidmVuZG9yLWNoYXJnZWxpbmUiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiZTY0YmI1NTQtYTM4ZS00ZmFkLTg2NGMtMjUyYjllNDJmODA4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiS2FyYW4gS3VtYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJhbi5rdW1hckBmcmVpZ2h0aWZ5LmNvbSIsImdpdmVuX25hbWUiOiJLYXJhbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImthcmFuLmt1bWFyQGZyZWlnaHRpZnkuY29tIn0.GqnBdgiomzf6YCNC31Jm37YRkvJOcY0Gti9WOt2q1woOCfvdLgby3apd74OPQ4Rv_yBAUIJIoZF1GavQA9IvbcbRozgxRQumVnzLTX3c5_CnkpG4vTHBN0_A6ocjHQOi3rJCutNmX5K_5OPtQYjvDz3wIkJpplIU7fpHCCkAYt1GuiMN_dKRCwQ_5fHboIqteWwdA7J7FviCsHv83KpF5AzySCpxhEaw05i-mCF-dCjFk78XlzUfTmXQOCtHXSH5vQrVA3YGRsXLMF0rnNxjYduMZZGY2XwbqxWZH0m98Cz1rJ9JwCN4V7Oor6hEmtOLm40v5JrJZx9cvExELUjNVw' 
  private baseURL = 'https://qaadminapi.freightify.in/v1';

  constructor(private http: HttpClient) { }

  getValues(): { 
    token: string, 
    baseURL: string,
    // vendor: string, 
    // subVendor: string 
  } {
    return {
      token: this.token,
      baseURL: this.baseURL
      // vendor: this.vendor,
      // subVendor: this.subVendor
    };
  }

  getQaFilenames(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.baseURL+'/rateupload/inputfiles?vendorId=252', requestOptions);
  }

  getQaVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.baseURL+'/common/vendors', requestOptions);
  }

  getQaSubVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.baseURL+'/common/subvendors', requestOptions);
  }

  getQaAirlines(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.baseURL+'/common/airlines', requestOptions);
  }

}
