import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {


  readonly ROOT_URI;

  constructor(private http: HttpClient) {
    // this.ROOT_URI = 'https://fnadapi.herokuapp.com/list';

    
  }

  public get(uri: string){
    return this.http.get("https://fnadapi.herokuapp.com/list");
  }

 /* get(uri: string){
    return this.http.get(`${this.ROOT_URI}/${uri}`);
  } 

  post(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URI}/${uri}`, payload);
  }

  patch(uri: string, payload: Object){
    return this.http.patch(`${this.ROOT_URI}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URI}/${uri}`);
  } */

}
