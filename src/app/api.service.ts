import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcXAyakxoWXE4eXM4Q05EdGdjdklvSUZYR2xaa2RLRVFKRmxVcmZwV0RNIn0.eyJleHAiOjE2ODE5MTI4MjgsImlhdCI6MTY4MTgyNjQyOCwiYXV0aF90aW1lIjoxNjgxODI1NTc0LCJqdGkiOiJhYmZhZDgyYS1mYmQyLTRkOTQtYjA3OS1mNTg2MDliNjVlMjIiLCJpc3MiOiJodHRwczovL2F1dGguZnJlaWdodGJyby5pbi9hdXRoL3JlYWxtcy9GcmVpZ2h0aWZ5LURhc2hib2FyZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzFhZGUyZC05YjFiLTQyNmMtOGMwNS0wMTJmNGRhYmQzNjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1kYXNoYm9hcmQiLCJub25jZSI6IjUzZDBiODFkLTYwMmMtNDgxYS04YThlLTA3ODYxZTk3ZWNjNiIsInNlc3Npb25fc3RhdGUiOiIzNGRlMTVkMC1iYmJhLTQxMjktOGQ2Ny0zYzJjZjkxNTI2ZjYiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlbGV0ZS1jb3VudHJpZXMiLCJkZWxldGUtZmlsZXMiLCJjb25maWd1cmF0aW9uIiwidXBkYXRlLXZlbmRvci1jaGFyZ2VsaW5lIiwiZG9tYWluLWNhcnJpZXJzIiwicG9ydHMiLCJpbXBvcnQtc2hpcHBlcnMtbG9nIiwic2NoZWR1bGUtYXBpLXNldHRpbmdzIiwiZGVmYXVsdC1yb2xlcy1mcmVpZ2h0aWZ5LWRhc2hib2FyZCIsIm9mZmxpbmVfYWNjZXNzIiwiZG9vcnMtbG9va3VwIiwiZGF1X2F1ZGl0X3RyYWlsIiwiZGF1IiwiYWlybGluZXMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRhdV90YXNrX2V4ZWN1dG9yIiwiZWRpdC1zaGlwbWVudHMiLCJzbGFiLWNoYXJnZXMiLCJ1cGxvYWQtZm9ybWF0cyIsImxvb2t1cCIsImZjbGxlZyIsImNvdW50cmllcyIsImFnZW50cyIsInppcGNvZGUiLCJhcGktc2VydmljZSIsImRlbGV0ZS1haXJsaW5lcyIsImZpbGVzIiwic3ViLXZlbmRvciIsImRvbWFpbi1kYXRhIiwiZGVsZXRlLXZlbmRvci1jaGFyZ2VsaW5lIiwiYXBpLXJhdGVzIiwidmVuZG9yLWNoYXJnZWxpbmUiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiMzRkZTE1ZDAtYmJiYS00MTI5LThkNjctM2MyY2Y5MTUyNmY2IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiS2FyYW4gS3VtYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJhbi5rdW1hckBmcmVpZ2h0aWZ5LmNvbSIsImdpdmVuX25hbWUiOiJLYXJhbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImthcmFuLmt1bWFyQGZyZWlnaHRpZnkuY29tIn0.O83FlAHMecfsLbs6zbHTmmFcWre6t1d-73CGl9_-XC2thMh7H3pWBcZBt6_Q1AXXNlEjM5aBbc0u29jkr8YA5KOpX-63ru3Vifl9RpfTJ-gIh8JcR_g6Iky9SSp4HtPnpJQFBFEVbVD4HEqjVTB8PBO1AhkVU8mfxM_QPMHe280JUlvnxYm2uuh9BRDVAD1k2_A_bwEV5UwjluB5yY92vTWGC4wT10boa8hS1EFY3E_xssQPpmlm4gA7fDb17YMPvk0ljwbiI-z0Up2bZi6Fwe2gyuayssEfeJZ29bJ-bOOfrA1pyvYM9IqFK_tONseJrA5pUj2QtyW0TK2VyoO9JA' 
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
