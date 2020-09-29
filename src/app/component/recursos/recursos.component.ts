import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService} from 'src/app/shared/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { Documento } from './../../shared/documento';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   ],
   providers: [ApiService]
})


@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
})


export class RecursosComponent implements OnInit {
  Documento= [];
  DocumentoData : any = [];
  dataSource: MatTableDataSource<Documento>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['tema', 'autor', 'ano', 'titulo', 'volumen', 'doi', 'fnad', 'enlace'];
  filterSelectObj = [];
  filterValues = {};

  constructor(private documentoApi: ApiService) {
    // this.documentoApi.GetDocumentos().subscribe(data => {
    //   this.DocumentoData = data;
    //   this.dataSource = new MatTableDataSource<Documento>(this.DocumentoData );
    //   setTimeout(() => {
    //     this.dataSource.paginator = this.paginator;
    //   }, 0);
    // })
    
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
    const documentosObservable = this.documentoApi.GetDocumentos();
    documentosObservable.subscribe((documentoData: []) => {
        this.Documento = documentoData;
        console.log(this.Documento);
    });
}

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

resetFilters() {
this.filterValues = {};
this.filterSelectObj.forEach((value, key) => {
 value.modelValue = undefined;
   });
    this.dataSource.filter = '';
  }

}