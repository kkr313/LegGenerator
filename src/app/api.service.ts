import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcXAyakxoWXE4eXM4Q05EdGdjdklvSUZYR2xaa2RLRVFKRmxVcmZwV0RNIn0.eyJleHAiOjE2ODE5Njk1MjQsImlhdCI6MTY4MTg4MzEyNCwiYXV0aF90aW1lIjoxNjgxODI1NTc0LCJqdGkiOiI4MzBjZmU4Zi04MDRlLTQwYzEtYTRiMy1iMjFiNDMzNTRlYmYiLCJpc3MiOiJodHRwczovL2F1dGguZnJlaWdodGJyby5pbi9hdXRoL3JlYWxtcy9GcmVpZ2h0aWZ5LURhc2hib2FyZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzFhZGUyZC05YjFiLTQyNmMtOGMwNS0wMTJmNGRhYmQzNjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1kYXNoYm9hcmQiLCJub25jZSI6ImIyZDAwZGUyLTQ1MTItNDMxNS1hNWRjLTBiNGQ3M2YyMDY2YiIsInNlc3Npb25fc3RhdGUiOiIzNGRlMTVkMC1iYmJhLTQxMjktOGQ2Ny0zYzJjZjkxNTI2ZjYiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlbGV0ZS1jb3VudHJpZXMiLCJkZWxldGUtZmlsZXMiLCJjb25maWd1cmF0aW9uIiwidXBkYXRlLXZlbmRvci1jaGFyZ2VsaW5lIiwiZG9tYWluLWNhcnJpZXJzIiwicG9ydHMiLCJpbXBvcnQtc2hpcHBlcnMtbG9nIiwic2NoZWR1bGUtYXBpLXNldHRpbmdzIiwiZGVmYXVsdC1yb2xlcy1mcmVpZ2h0aWZ5LWRhc2hib2FyZCIsIm9mZmxpbmVfYWNjZXNzIiwiZG9vcnMtbG9va3VwIiwiZGF1X2F1ZGl0X3RyYWlsIiwiZGF1IiwiYWlybGluZXMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRhdV90YXNrX2V4ZWN1dG9yIiwiZWRpdC1zaGlwbWVudHMiLCJzbGFiLWNoYXJnZXMiLCJ1cGxvYWQtZm9ybWF0cyIsImxvb2t1cCIsImZjbGxlZyIsImNvdW50cmllcyIsImFnZW50cyIsInppcGNvZGUiLCJhcGktc2VydmljZSIsImRlbGV0ZS1haXJsaW5lcyIsImZpbGVzIiwic3ViLXZlbmRvciIsImRvbWFpbi1kYXRhIiwiZGVsZXRlLXZlbmRvci1jaGFyZ2VsaW5lIiwiYXBpLXJhdGVzIiwidmVuZG9yLWNoYXJnZWxpbmUiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiMzRkZTE1ZDAtYmJiYS00MTI5LThkNjctM2MyY2Y5MTUyNmY2IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiS2FyYW4gS3VtYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJhbi5rdW1hckBmcmVpZ2h0aWZ5LmNvbSIsImdpdmVuX25hbWUiOiJLYXJhbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImthcmFuLmt1bWFyQGZyZWlnaHRpZnkuY29tIn0.LcBlnEXP_BcFiFS09d_fbGj7jlYwKXBOxasLKLlnp4xog_5kEfSN_fgqiccl6vX9ffq1MjSKODE5v65tftTFzU5jR-qS6Jp0uMompzXK0ilxCsmukvmnR6r4MqfgJn_LQkiYYiQ8Gsj36uQNErF3LiWBjY54zegywLgZgtYuha2RZdFTmCRkRfXm6q27j-6LIAdMk1ga-Le9Owmbz7W3X4cIWgpmdsV5Qnj9mnXSI4PWX4KazdQuB3XXbl2HVMkz7g4FAYt9WQKZTzM62zCFHpjdwLX2AfNBUHKdroVvKlSdSkS2oHNearEePuuu825Exmu7OuYFz-7tlyOyHeWy3w' 
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
