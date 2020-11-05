
import { Component, OnInit, Output,EventEmitter, ViewChild,AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DocsInfo } from 'src/docInfo';
import { URL } from 'url';
import { ListaComponent } from '../lista/lista.component';

// export interface PeriodicElement {
//   tema: string;
//   autor: string;
//   ano: any;
//   titulo: string;
//   volumen: string;
//   doi: any;
//   fnad: string;
//   enlace: any;
  
  
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {tema: 'Pendiente', autor: 'Francisco E. Moscoso Puello', ano: '2001', titulo: 'NAVARIJO', volumen:'Segunda edición', doi:'---', fnad:'No', enlace:'https://mega.nz/file/fAsihLxI#-vilrJyA60h7M2N5n7HrygKppZLVk2vnzV3EaQhmyfc'},
//   {tema: 'Energia', autor: 'Hydrogen', ano: 1.0079, titulo: 'H', volumen:'coco', doi:'patata', fnad:'si', enlace:'link'},
//   {tema: 'Aquicultura', autor: 'Hydrogen', ano: 1435379, titulo: 'H', volumen:'coco', doi:'patata', fnad:'si', enlace:'link'},
//   {tema: 'Pesca', autor: 'Hydrogen', ano: 1.0079, titulo: 'H', volumen:'coco', doi:'patata', fnad:'si', enlace:'link'},
//   {tema: 'Contaminacion', autor: 'Hydrogen', ano: 1.0079, titulo: 'H', volumen:'coco', doi:'patata', fnad:'si', enlace:'link'},
//   {tema: 'Zoologia', autor: 'Hydrogen', ano: 4122, titulo: 'H', volumen:'coco', doi:'patata', fnad:'si', enlace:'link'},
//   {tema: 'Botanica', autor: 'Hydrogen', ano: 1.0079, titulo: 'H', volumen:'coco', doi:'patata', fnad:'si', enlace:'link'},
// ];

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
})




export class RecursosComponent implements OnInit {

  dataSource = new MatTableDataSource();
  
  

  displayedColumns: string[] = ['tema', 'autor', 'ano', 'titulo','editora', 'volumen', 'doi', 'fnad', 'enlace'];
  filterValues = {};
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  lista: any[];
  loading: boolean = true;
  term: string;
  

  constructor( private ApiService: ApiService, private route: ActivatedRoute ) { 
      
    // this.ApiService.getDocumentos().subscribe((lista: any[]) => {
    //   this.lista = lista;
        
    // });
  

  // } 

  // constructor () { 

  // this.lista = [
  //   {
  //     "id": 1,
  //     "tema": "Biogeografia",
  //     "autor": "Leanne Graham, Leanne Graham, Leanne Graham",
  //     "ano": "Bret",
  //     "titulo": "Sincere@april.biz",
  //     "nomRevista": "1-770-736-8031 x56442",
  //     "editora": "hildegard.org",
  //     "volumen": "Active",
  //     "doi": "10.1145/1067268.1067287",
  //     "fnad": "no",
  //     "enlace": "link"
  //   },{
  //     "id": 2,
  //     "tema": "Biogeografia",
  //     "autor": "Leanne Graham, Leanne Graham, Leanne Graham",
  //     "ano": "Bret",
  //     "titulo": "Sincere@april.biz",
  //     "nomRevista": "1-770-736-8031 x56442",
  //     "editora": "hildegard.org",
  //     "volumen": "Active",
  //     "doi": "10.1145/1067268.1067287",
  //     "fnad": "no",
  //     "enlace": "link"
  //   },{
  //     "id": 2,
  //       "tema": "Ecologia",
  //       "autor": "Leanne Graham",
  //       "ano": "Bret",
  //       "titulo": "Sincere@april.biz",
  //       "nomRevista": "1-770-736-8031 x56442",
  //       "editora": "hildegard.org",
  //       "volumen": "Active",
  //       "doi": "4564sghfks",
  //       "fnad": "si",
  //       "enlace": "link"
  //   }
  // ]

  }

  ngOnInit(): void { 
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);
        
      }
      
    )
    this.getAllDocs();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  public getAllDocs() {
    let resp = this.ApiService.getDocumentos();
    resp.subscribe(report => this.dataSource.data = report as DocsInfo[]);
  }

  
}

