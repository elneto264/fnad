
import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ListaComponent } from '../lista/lista.component';



@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
})



export class RecursosComponent implements OnInit {

  // dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['tema', 'autor', 'ano', 'titulo', 'volumen', 'doi', 'fnad', 'enlace'];
  filterValues = {};

  lista: any[];
  loading: boolean = true;
  term: string;
 

  constructor( private ApiService: ApiService, private route: ActivatedRoute ) {
      

  } 

  
  
  ngOnInit() { 
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);
        
      }
    )

    this.ApiService.getDocumentos().subscribe((lista: any[]) => {
      this.lista = lista;
      
    });

  }


  
}

