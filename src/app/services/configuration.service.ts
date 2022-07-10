import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  public API_BASE_URL = "http://localhost:3000"

  public URLS = {
    NEWS : `${this.API_BASE_URL}/news`,
    USERS : `${this.API_BASE_URL}/users`,
    ADS: `${this.API_BASE_URL}/ads`,
    TOPNEWS: `${this.API_BASE_URL}/top-news`,
    PUBLIC_USERS: "https://jsonplaceholder.typicode.com/users"
  }


}
