import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/api.service';





@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
})


export class RecursosComponent implements OnInit {

  // dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['tema', 'autor', 'ano', 'titulo', 'volumen', 'doi', 'fnad', 'enlace'];
  filterSelectObj = [];
  filterValues = {};

  lista: any[];
  constructor( private ApiService: ApiService, private route: ActivatedRoute) {
    
    this.filterSelectObj = [
      {
      name: 'TEMA',
      columnProp: 'tema',
      options: []
      }, {
        name: 'AUTOR',
        columnProp: 'autor',
        options: []
      }, {
        name: 'AÑO',
        columnProp: 'ano',
        options: []
      }, {
        name: 'TITÚLO',
        columnProp: 'titulo',
        options: []
      }, {
        name: 'DOI',
        columnProp: 'doi',
        options: []
      },  {
        name: 'FNAD',
        columnProp: 'fnad',
        options: []
      }
    ];

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

  

  // crearListaDocumentos(){
  //   this.ApiService.crearDocumentos('prueba a ver').subscribe(( response: any)=> {
  //       console.log(response);
  //   })
  // }




  getFilterObject(fullObj, key) {
    let uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

// resetFilters() {
// this.filterValues = {};
// this.filterSelectObj.forEach((value, key) => {
//  value.modelValue = undefined;
//    });
//     this.dataSource.filter = '';
//   }

}