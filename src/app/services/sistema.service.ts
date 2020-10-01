import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  api_anime_url: string = environment.backend.sistema;
  constructor(private http:HttpClient) { }
  headers : HttpHeaders= new HttpHeaders({
    "Content-type":"application/json",
    "Cache-Control":"no-cache",
    "Access-Control-Allow-Origin": "*",
    //"Accept-Encoding": "gzip"
    //Authorization: this.authService.getToken()
  });
  getTest(){
    return this.http.get(`${this.api_anime_url}user`,{headers:this.headers});
  }
}
