import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor( private WebReqService: WebRequestService) { }

  crearDocumentos(titulo: string){
    // aqui creamos el request para hacer la lista
    return this.WebReqService.post('list', { titulo });
  }


  getDocumentos(){
    return this.WebReqService.get('list');
  }
}
