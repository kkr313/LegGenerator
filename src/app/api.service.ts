import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcXAyakxoWXE4eXM4Q05EdGdjdklvSUZYR2xaa2RLRVFKRmxVcmZwV0RNIn0.eyJleHAiOjE2ODE3NDU5MjcsImlhdCI6MTY4MTY1OTUyNywiYXV0aF90aW1lIjoxNjgxNDIzNTA2LCJqdGkiOiI1YjFmODNmZi04YTk2LTRjMDYtYmY0OS04OGQ3ZDRhMjBjYzEiLCJpc3MiOiJodHRwczovL2F1dGguZnJlaWdodGJyby5pbi9hdXRoL3JlYWxtcy9GcmVpZ2h0aWZ5LURhc2hib2FyZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzFhZGUyZC05YjFiLTQyNmMtOGMwNS0wMTJmNGRhYmQzNjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1kYXNoYm9hcmQiLCJub25jZSI6Ijg1YzM5Y2ZiLWI5M2YtNDQzNy1iMzAxLWRlYzkyNzgwZTk4NyIsInNlc3Npb25fc3RhdGUiOiJlNjRiYjU1NC1hMzhlLTRmYWQtODY0Yy0yNTJiOWU0MmY4MDgiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlbGV0ZS1maWxlcyIsImNvbmZpZ3VyYXRpb24iLCJkb21haW4tY2FycmllcnMiLCJwb3J0cyIsImltcG9ydC1zaGlwcGVycy1sb2ciLCJzY2hlZHVsZS1hcGktc2V0dGluZ3MiLCJkZWZhdWx0LXJvbGVzLWZyZWlnaHRpZnktZGFzaGJvYXJkIiwib2ZmbGluZV9hY2Nlc3MiLCJkYXVfYXVkaXRfdHJhaWwiLCJkYXUiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRhdV90YXNrX2V4ZWN1dG9yIiwiZWRpdC1zaGlwbWVudHMiLCJzbGFiLWNoYXJnZXMiLCJ1cGxvYWQtZm9ybWF0cyIsImxvb2t1cCIsImZjbGxlZyIsImNvdW50cmllcyIsImFnZW50cyIsInppcGNvZGUiLCJhcGktc2VydmljZSIsImZpbGVzIiwic3ViLXZlbmRvciIsImRvbWFpbi1kYXRhIiwiYXBpLXJhdGVzIiwidmVuZG9yLWNoYXJnZWxpbmUiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiZTY0YmI1NTQtYTM4ZS00ZmFkLTg2NGMtMjUyYjllNDJmODA4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiS2FyYW4gS3VtYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJhbi5rdW1hckBmcmVpZ2h0aWZ5LmNvbSIsImdpdmVuX25hbWUiOiJLYXJhbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImthcmFuLmt1bWFyQGZyZWlnaHRpZnkuY29tIn0.b4cmJwzjptawB9F3oUPUd0mNEwSWlZONlBA7jYGErXDiU6KwbEzZNwSD8NikAmJP68e98vvtvpKAxSQO9EwVrtybd0_nUvCAsqQQXCMAu8DFcsNeNp-AOORydfagPORQOatU-GQw6wSDUoUFx1Ri0Pd5jYCyQ5jKUnok9QSGkJfyAl1HHsqGNzi503Q0dGUUKUSsfJ_VbcdgL0hHqN7t7qAJpmR_4-tFQv4OjGoEQvFhLaPOaM-jV0aLI_oVHS3YyKQUiR0SIrdfmznnKIc7jS8iU5hbiSY4qyr1ukZjD20VPa8Gtai0RfMA3AJdEkhTxlDuqHvxjKDHY7NITTqfGg' 
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
