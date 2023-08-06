import { Injectable } from '@angular/core';
import { keycloakConfig } from '../assets/keycloak-config';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
    private keycloak!: Keycloak.KeycloakInstance;

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.keycloak = new Keycloak(keycloakConfig);
      this.keycloak.init({ onLoad: 'login-required' }).then((auth) => {
        resolve(auth);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  getAccessToken(): string | null {
    return this.keycloak.token!;
  }
  isLoggedIn(): boolean {
    return this.keycloak! && this.keycloak.authenticated!;
  }

  logout(): void {
    if (this.keycloak) {
      this.keycloak.logout();
    }
  }
}

