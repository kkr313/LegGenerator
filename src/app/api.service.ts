import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcXAyakxoWXE4eXM4Q05EdGdjdklvSUZYR2xaa2RLRVFKRmxVcmZwV0RNIn0.eyJleHAiOjE2ODE4MTk4MDAsImlhdCI6MTY4MTczMzQwMCwiYXV0aF90aW1lIjoxNjgxNzMxOTMxLCJqdGkiOiI3ZjhhZWM2Zi05MjgyLTRhNzctODljMC02Yjc4MWM0YTJlMTgiLCJpc3MiOiJodHRwczovL2F1dGguZnJlaWdodGJyby5pbi9hdXRoL3JlYWxtcy9GcmVpZ2h0aWZ5LURhc2hib2FyZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzFhZGUyZC05YjFiLTQyNmMtOGMwNS0wMTJmNGRhYmQzNjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1kYXNoYm9hcmQiLCJub25jZSI6IjE1YjRiMTY0LTU5ZWMtNDM0ZC1iNTkwLTg1ZWU5YWQ5MTQ4YyIsInNlc3Npb25fc3RhdGUiOiI2YTExYjk2NC1jMGI2LTQwNjktYTQzNy1jODJlZjE3ZmVmY2UiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlbGV0ZS1maWxlcyIsImNvbmZpZ3VyYXRpb24iLCJkb21haW4tY2FycmllcnMiLCJwb3J0cyIsImltcG9ydC1zaGlwcGVycy1sb2ciLCJzY2hlZHVsZS1hcGktc2V0dGluZ3MiLCJkZWZhdWx0LXJvbGVzLWZyZWlnaHRpZnktZGFzaGJvYXJkIiwib2ZmbGluZV9hY2Nlc3MiLCJkYXVfYXVkaXRfdHJhaWwiLCJkYXUiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRhdV90YXNrX2V4ZWN1dG9yIiwiZWRpdC1zaGlwbWVudHMiLCJzbGFiLWNoYXJnZXMiLCJ1cGxvYWQtZm9ybWF0cyIsImxvb2t1cCIsImZjbGxlZyIsImNvdW50cmllcyIsImFnZW50cyIsInppcGNvZGUiLCJhcGktc2VydmljZSIsImZpbGVzIiwic3ViLXZlbmRvciIsImRvbWFpbi1kYXRhIiwiYXBpLXJhdGVzIiwidmVuZG9yLWNoYXJnZWxpbmUiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiNmExMWI5NjQtYzBiNi00MDY5LWE0MzctYzgyZWYxN2ZlZmNlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiS2FyYW4gS3VtYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJhbi5rdW1hckBmcmVpZ2h0aWZ5LmNvbSIsImdpdmVuX25hbWUiOiJLYXJhbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImthcmFuLmt1bWFyQGZyZWlnaHRpZnkuY29tIn0.vQhr0yjTJpnkxx9jqFFxVLJOZP30W__Dlf2mJi7AqIXRQ8Z73Ikdwz3_0TNGFYUxYvgxBHC7HHFhG69wb70o4Q5JdPuEtB7MJO5nxs0aLSWb3AhAGJEL8er66kt8Kn2gZGyF2jy49c228IqRq_VfmpHv1naRnXAsHhTWmkz2xsrC-TMnhYy_mywDdnA1NZN95-9eyBKIyR4tlUvVvE7fl9oEWm3xihY2RKiEK-a4ULK6A6rj30IgwfXknoBmk7fnK9iSR3lTC53-BsYkAO2SIJETcAQ_7BzMih148x5oSrMNKukiM1CgFmkCNDTBWyLWNOitn_KBnuU6L8vNyL6_fQ' 
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
