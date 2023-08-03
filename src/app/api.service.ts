import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
 
  private baseURL = 'https://qaadminapi.freightify.in/v1';

  private QA_Staging_Token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcXAyakxoWXE4eXM4Q05EdGdjdklvSUZYR2xaa2RLRVFKRmxVcmZwV0RNIn0.eyJleHAiOjE2OTExNTYxMjcsImlhdCI6MTY5MTA2OTcyNywiYXV0aF90aW1lIjoxNjkwNzM0MjA1LCJqdGkiOiI0ZjUxYzJjMy0yMjBhLTQzMTctOTc2Yy0zYWFkNjhmNGVlMmYiLCJpc3MiOiJodHRwczovL2F1dGguZnJlaWdodGJyby5pbi9hdXRoL3JlYWxtcy9GcmVpZ2h0aWZ5LURhc2hib2FyZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzFhZGUyZC05YjFiLTQyNmMtOGMwNS0wMTJmNGRhYmQzNjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1kYXNoYm9hcmQiLCJub25jZSI6IjEyODFhN2JkLTIzODAtNDYxZC04ZjI0LTM0NTI1YjQ2ZTY3YyIsInNlc3Npb25fc3RhdGUiOiIzMjg0ODkzNi1mYzc5LTQxZTAtOWE0OC0xYWMxYWZlN2ZlZDEiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlbGV0ZS1jb3VudHJpZXMiLCJ1cGRhdGUtY291bnRyaWVzIiwiZGVsZXRlLWRvbWFpbi1kYXRhIiwidXBkYXRlLXZlbmRvci1jaGFyZ2VsaW5lIiwiaW1wb3J0LXNoaXBwZXJzLWxvZyIsInVwZGF0ZS1zdWItdmVuZG9yIiwibm90aWZpY2F0aW9uIiwiZGF1X2F1ZGl0X3RyYWlsIiwiZGF1IiwiYWlybGluZXMiLCJub3RpZmljYXRpb24tdjIiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRhdV90YXNrX2V4ZWN1dG9yIiwiZGVsZXRlLWFnZW50cyIsImVkaXQtc2hpcG1lbnRzIiwidXBsb2FkLWZvcm1hdHMiLCJhdWRpdC10cmFpbHMiLCJ1cGRhdGUtYWlybGluZXMiLCJzcG90LWNvbmZpZyIsImRlbGV0ZS1ub3RpY2UiLCJkZWxldGUtc2NoZWR1bGUtYXBpLXNldHRpbmdzIiwiY291bnRyaWVzIiwidXBkYXRlLWFwaS1yYXRlcyIsInppcGNvZGUiLCJhcGktc2VydmljZSIsImluY290ZXJtIiwiZmlsZXMiLCJ1cGRhdGUtaW5jb3Rlcm0iLCJkZWxldGUtdmVuZG9yLWNoYXJnZWxpbmUiLCJ2ZW5kb3ItY2hhcmdlbGluZSIsImFwaS1yYXRlcyIsInNoaXBtZW50LXNjaGVkdWxlLWRhdGEiLCJ1cGRhdGUtbm90aWNlIiwic2hpcHBlci1yZXF1ZXN0LWxvZyIsImRlbGV0ZS1maWxlcyIsImNvbmZpZ3VyYXRpb24iLCJwb3J0cy1sb29rdXAiLCJkZWxldGUtZG9tYWluLWNhcnJpZXJzIiwiZG9tYWluLWNhcnJpZXJzIiwicG9ydHMiLCJkZWxldGUtcG9ydHMiLCJzY2hlZHVsZS1hcGktc2V0dGluZ3MiLCJkZWZhdWx0LXJvbGVzLWZyZWlnaHRpZnktZGFzaGJvYXJkIiwib2ZmbGluZV9hY2Nlc3MiLCJkb29ycy1sb29rdXAiLCJ1cGRhdGUtc2NoZWR1bGUtYXBpLXNldHRpbmdzIiwic2xhYi1jaGFyZ2VzIiwiZGVsZXRlLWluY290ZXJtIiwibm90aWNlIiwibG9va3VwIiwidXBkYXRlLWFnZW50cyIsImRlbGV0ZS1zdWItdmVuZG9yIiwiZmNsbGVnIiwidXBkYXRlLXBvcnRzIiwiYWdlbnRzIiwiZGVsZXRlLWFwaS1yYXRlcyIsInRlbXBsYXRlLWNoYXJnZS1tYXBwaW5nIiwiZGVsZXRlLWFpcmxpbmVzIiwidXBkYXRlLWRvbWFpbi1kYXRhIiwic3ViLXZlbmRvciIsImRvbWFpbi1kYXRhIiwiYm9va2luZy1yZXF1ZXN0LWxvZ3MiLCJzY2hlZHVsZS1wcm9jZXNzLWxvZ3MiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiMzI4NDg5MzYtZmM3OS00MWUwLTlhNDgtMWFjMWFmZTdmZWQxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiS2FyYW4gS3VtYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJhbi5rdW1hckBmcmVpZ2h0aWZ5LmNvbSIsImdpdmVuX25hbWUiOiJLYXJhbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImthcmFuLmt1bWFyQGZyZWlnaHRpZnkuY29tIn0.m64CWPXwdDZwrJB7Ooe62jtmJ98vvoIxycmtDTVKnYlQwQhLraQEm1S7jhriWJQ3UcFOB199PMjRNk3EoA2Ns6b-rc7GiHs45a-ACql3VHa5CNrVIiQ1rfqqe6qFngpgxkqOOtxmAeEA2rFlO_3CZIcxzCEPSIqsdvr31OBCys8cCKBE7WlV7M6ehlhYitryFxZgwojeXnYGej_lLTc0rYpcexCms2FVs4ZAmeLmASzvaUg8iJxwa4SQto9MlMYaJjNJxI9NSkygd965j2yGOR3pDYGboK8g28OGkXg0uHrmQUSPswUYTU3kQi3BRVgj7F_0Ts_FoNmqh4Oy-w5PYA';

  private Prod_Token = '';

  private qaUrl = 'https://qaadminapi.freightify.in/v1';
  private stagingUrl = 'https://stagingadminapi.freightify.in/v1';
  private prodUrl = 'https://adminapi.freightify.com/v1';
  private vendorPath = '/common/vendors';
  private subVendorPath = '/common/subvendors';
  private filenamePath = '/rateupload/inputfiles';
  private airlinePath = '/common/airlines';

  constructor(private http: HttpClient) { }

  getValues(): { 
    baseURL: string,

    QA_Staging_Token: string,
    Prod_Token: string,
    qaUrl: string,
    stagingUrl: string,
    prodUrl: string
  } {
    return {
      baseURL: this.baseURL,

      QA_Staging_Token: this.QA_Staging_Token,
      Prod_Token: this.Prod_Token,
      qaUrl: this.qaUrl,
      stagingUrl: this.stagingUrl,
      prodUrl: this.prodUrl
    };
  }

  getQaFilenames(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.qaUrl+this.filenamePath+'?vendorId=252', requestOptions);
  }

  UploadQaFile(data : any ): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    return this.http.post(this.qaUrl+'/rateupload/file',data, { headers });
  }

  UploadStagingFile(data : any ): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    return this.http.post(this.stagingUrl+'/rateupload/file',data, { headers });
  }

  UploadProdFile(data : any ): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.Prod_Token);
    return this.http.post(this.prodUrl+'/rateupload/file',data, { headers });
  }

  getQaVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set(
      'Authorization', this.QA_Staging_Token,
      );
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.qaUrl+this.vendorPath, requestOptions);
  }

  getQaSubVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.qaUrl+this.subVendorPath, requestOptions);
  }

  getQaAirlines(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.qaUrl+this.airlinePath, requestOptions);
  }

  getStagingFilenames(): Observable<string[]> {
    // const headers = new HttpHeaders()
    // .set('Authorization', this.QA_Staging_Token);
    const headers = new HttpHeaders()
    .set('Authorization', this.QA_Staging_Token)
    .set('Accept', '*/*')
    .set('Authority', 'stagingadminapi.freightify.in')
    .set('Origin', 'https://stagingapp.freightify.in')
    
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.stagingUrl+this.filenamePath+'?vendorId=108', requestOptions);
  }

  getStagingVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.stagingUrl+this.vendorPath, requestOptions);
  }

  getStagingSubVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.stagingUrl+this.subVendorPath, requestOptions);
  }

  getStagingAirlines(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.stagingUrl+this.airlinePath, requestOptions);
  }

  getProdFilenames(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.Prod_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.prodUrl+this.filenamePath+'?vendorId=106', requestOptions);
  }

  getProdVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.Prod_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.prodUrl+this.vendorPath, requestOptions);
  }

  getProdSubVendors(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.Prod_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.prodUrl+this.subVendorPath, requestOptions);
  }

  getProdAirlines(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', this.Prod_Token);
    const requestOptions = {
      headers: headers,
      responseType: 'text' as 'json'
    };
    return this.http.get<string[]>(this.prodUrl+this.airlinePath, requestOptions);
  }
}
