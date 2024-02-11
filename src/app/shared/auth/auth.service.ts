import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { routes } from '../routes/routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl: string = 'http://192.236.146.134:9000/'
  constructor(private httpClient: HttpClient) {}

  public login(loginObj: any) {
    return this.httpClient.post<any>(`${this.baseUrl}api/Account/Login`, loginObj);
  }

  public storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public isLoggedIn() {
    return localStorage.getItem('token') != 'null';
  }
}
