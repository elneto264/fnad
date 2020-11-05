import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
  }

  // crearLista(titulo: string){ // va a cambiar
  //   this.ApiService.crearDocumentos(titulo).subscribe(( response: any)=> {
  //       console.log(response);
  //       // desde aqui se navega hacia el listado
  //   });
  // }


}
