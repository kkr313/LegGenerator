import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
 
  private baseURL = 'https://qaadminapi.freightify.in/v';

  private QA_Staging_Token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcXAyakxoWXE4eXM4Q05EdGdjdklvSUZYR2xaa2RLRVFKRmxVcmZwV0RNIn0.eyJleHAiOjE2ODY5OTMwMjAsImlhdCI6MTY4NjkwNjYyMCwiYXV0aF90aW1lIjoxNjg2ODA4Nzc3LCJqdGkiOiI4ODQ2OThkYS1kNzI4LTRmYWEtYmQzMS1kMTAyYjUwZmIwM2QiLCJpc3MiOiJodHRwczovL2F1dGguZnJlaWdodGJyby5pbi9hdXRoL3JlYWxtcy9GcmVpZ2h0aWZ5LURhc2hib2FyZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzFhZGUyZC05YjFiLTQyNmMtOGMwNS0wMTJmNGRhYmQzNjkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1kYXNoYm9hcmQiLCJub25jZSI6ImViOTcxY2MzLTAzZWItNDg2Ny04YjYzLTVlOGU5OTQxNmYwOSIsInNlc3Npb25fc3RhdGUiOiI5MjdiNjU0Yi0xNjk5LTRiYWYtODQwMC05N2ZlYTJhMDBjY2IiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlbGV0ZS1jb3VudHJpZXMiLCJkZWxldGUtZmlsZXMiLCJjb25maWd1cmF0aW9uIiwidXBkYXRlLXZlbmRvci1jaGFyZ2VsaW5lIiwiZG9tYWluLWNhcnJpZXJzIiwicG9ydHMiLCJpbXBvcnQtc2hpcHBlcnMtbG9nIiwic2NoZWR1bGUtYXBpLXNldHRpbmdzIiwiZGVmYXVsdC1yb2xlcy1mcmVpZ2h0aWZ5LWRhc2hib2FyZCIsIm9mZmxpbmVfYWNjZXNzIiwiZG9vcnMtbG9va3VwIiwiZGF1X2F1ZGl0X3RyYWlsIiwiZGF1IiwiYWlybGluZXMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRhdV90YXNrX2V4ZWN1dG9yIiwiZWRpdC1zaGlwbWVudHMiLCJzbGFiLWNoYXJnZXMiLCJ1cGxvYWQtZm9ybWF0cyIsImxvb2t1cCIsImZjbGxlZyIsImNvdW50cmllcyIsImFnZW50cyIsInppcGNvZGUiLCJhcGktc2VydmljZSIsImRlbGV0ZS1haXJsaW5lcyIsImZpbGVzIiwic3ViLXZlbmRvciIsImRvbWFpbi1kYXRhIiwiZGVsZXRlLXZlbmRvci1jaGFyZ2VsaW5lIiwiYXBpLXJhdGVzIiwidmVuZG9yLWNoYXJnZWxpbmUiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiOTI3YjY1NGItMTY5OS00YmFmLTg0MDAtOTdmZWEyYTAwY2NiIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiS2FyYW4gS3VtYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJhbi5rdW1hckBmcmVpZ2h0aWZ5LmNvbSIsImdpdmVuX25hbWUiOiJLYXJhbiIsImZhbWlseV9uYW1lIjoiS3VtYXIiLCJlbWFpbCI6ImthcmFuLmt1bWFyQGZyZWlnaHRpZnkuY29tIn0.kLVocw5MI3Xcw3IniKOwaHKERaqrdCtT-BCrNYPkwfQcYJlvTzZb5WLB9HWCzZTkAGpT11094vqp0E-Zbxj_MGQ4SXqkzstyQVQwmZlSf_nncSroK3iFJk2IHSJd9vyE44WzQ3OByrRkro07Kb7ECAzh3EluWqbSbANo8na9r_XYyxUOoDah3e9fZSFIXchJufMgRrUZ_Bw92lkoNW27PO9dUuxQAzHz07njCBjiwDVFWYrwu5V1YRwgladBTPTkCH9kYVjvncJDCIiZxRoP0H5RynKQzzbE3QI6pBo4sVAH9og5OgYoKzW56c2qg33Y6HQgqvjqZ9nydl0SLea97w';

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
    const headers = new HttpHeaders().set('Authorization', this.QA_Staging_Token);
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
