import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url = "localhot:8080";
  constructor(private httpClient: HttpClient) { }



}
