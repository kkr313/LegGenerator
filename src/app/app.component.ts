import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './keycloak.service';
import { ApiService } from './api.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = true;

  constructor(private apiService : ApiService, private keycloakService: KeycloakService ){}


  title = 'Legs Generator';
  viewMode = 'tab1';
  Mode = 'fclMode';
  isActive: any;

  onTabChange(){
    this.Mode = 'fclMode';
  }

  QaVendors: any[] = [];
  QaSubVendors: any[] = [];
  QaFileName: any[] = [];
  QaAirlines: any[] = [];
  StagingVendors: any[] = [];
  StagingSubVendors: any[] = [];
  StagingFileName: any[] = [];
  StagingAirlines: any[] = [];
  ProdVendors: any[] = [];
  ProdSubVendors: any[] = [];
  ProdFileName: any[] = [];
  ProdAirlines: any[] = [];


  qaApiCall(){
    this.apiService.getQaVendors().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        localStorage.setItem("QaVendors", JSON.stringify(response.data))
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );

    this.apiService.getQaSubVendors().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        localStorage.setItem("QaSubVendors", JSON.stringify(response.data))
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );

    this.apiService.getQaAirlines().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        localStorage.setItem("QaAirlines", JSON.stringify(response.data))
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );
  }

  stageApiCall(){
    this.apiService.getStagingVendors().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        localStorage.setItem("StagingVendors", JSON.stringify(response.data))
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );

    this.apiService.getStagingSubVendors().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        localStorage.setItem("StagingSubVendors", JSON.stringify(response.data))
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );

    this.apiService.getStagingAirlines().subscribe(
      (response: any) => {
        response = JSON.parse(response);
        localStorage.setItem("StagingAirlines", JSON.stringify(response.data))
      },
      (error: any) => {
        console.log('Error fetching dropdown options:', error);
      }
    );
  }

  ngOnInit() {

    this.keycloakService.init().then((auth) => {
      if (auth) {
        this.loading = false;
        const accessToken = this.keycloakService.getAccessToken();
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken); // Save access token to localStorage
          this.apiService.storeToken(accessToken);
        }
          this.qaApiCall();
          this.stageApiCall();
      }
    }).catch((error: any) => {
      this.loading = false;
      console.log('Error in initialization', error);
    });

    localStorage.setItem('QA_STAG_ENABLED', 'true');
    localStorage.setItem('PROD_ENABLED', 'false');

    // localStorage.setItem('QA_STAG_ENABLED', 'false');
    // localStorage.setItem('PROD_ENABLED', 'true');


    
    // // Prod API Calls :- 

    // this.apiService.getProdFilenames().subscribe(
    //   (response: any) => {
    //     response = JSON.parse(response);
    //     localStorage.setItem("ProdFileName", JSON.stringify(response.data))
    //   },
    //   (error: any) => {
    //     console.log('Error fetching dropdown options:', error);
    //   }
    // );

    // this.apiService.getProdVendors().subscribe(
    //   (response: any) => {
    //     response = JSON.parse(response);
    //     localStorage.setItem("ProdVendors", JSON.stringify(response.data))
    //   },
    //   (error: any) => {
    //     console.log('Error fetching dropdown options:', error);
    //   }
    // );

    // this.apiService.getProdSubVendors().subscribe(
    //   (response: any) => {
    //     response = JSON.parse(response);
    //     localStorage.setItem("ProdSubVendors", JSON.stringify(response.data))
    //   },
    //   (error: any) => {
    //     console.log('Error fetching dropdown options:', error);
    //   }
    // );

    // this.apiService.getProdAirlines().subscribe(
    //   (response: any) => {
    //     response = JSON.parse(response);
    //     localStorage.setItem("ProdAirlines", JSON.stringify(response.data))
    //   },
    //   (error: any) => {
    //     console.log('Error fetching dropdown options:', error);
    //   }
    // );
  }
  login(): void {
    this.keycloakService.init();
  }

  logout(): void {
    this.keycloakService.logout();
    // setTimeout(() => {
    //   window.location.href = 'https://auth.freightify.com/auth/realms/freightify_intranet/protocol/openid-connect/auth?client_id=admin-portal&redirect_uri=https%3A%2F%2Fapp.freightify.com%2Frate-upload&state=5bf257f8-6e66-47be-ad3a-06e0d1cabca1&response_mode=fragment&response_type=code&scope=openid&nonce=6ac67adf-e615-47a7-8098-b037fa0241e2'
    // }, 20);
  }

  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  
}
