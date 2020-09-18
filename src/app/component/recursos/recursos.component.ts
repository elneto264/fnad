import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../api.service';





@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  filterValues = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['tema', 'autor', 'ano', 'titulo', 'volumen', 'doi', 'fnad', 'enlace'];
  filterSelectObj = [];
  isLoadingResults = true;

  constructor( private api: ApiService) {

// Object to create Filter for
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

  ngOnInit(): void {
    // this.getRemoteData();
    // // Overrride default filter behaviour of Material Datatable
    // this.dataSource.filterPredicate = this.createFilter();
    this.api.getRecursos()
    .subscribe((res: any) => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  // Get Uniqu values from columns to build filter
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

// Get remote serve data using HTTP call
getRemoteData() {


  let remoteRecursosData = [
    {
      id: '',
      tema: '',
      autor: '',
      ano: '',
      titulo: '',
      nomRevista: '',
      editora: '',
      volumen: '',
      doi: '',
      fnad: '',
      enlace: ''
    },
    // {
    //   "id": 2,
    //   "tema": "Biogeografia",
    //   "autor": "Leanne Graham, Leanne Graham, Leanne Graham",
    //   "ano": "Bret",
    //   "titulo": "Sincere@april.biz",
    //   "nomRevista": "1-770-736-8031 x56442",
    //   "editora": "hildegard.org",
    //   "volumen": "Active",
    //   "doi": "10.1145/1067268.1067287",
    //   "fnad": "no",
    //   "enlace": "link"
    // },
  ];


  this.dataSource.data = remoteRecursosData;
  this.filterSelectObj.filter((o) => {
    o.options = this.getFilterObject(remoteRecursosData, o.columnProp);
    });
  }

// Called on Filter change
filterChange(filter, event) {
  //let filterValues = {};
  this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
  this.dataSource.filter = JSON.stringify(this.filterValues)
}

// Custom filter method fot Angular Material Datatable
createFilter() {
  let filterFunction = function (data: any, filter: string): boolean {
    let searchTerms = JSON.parse(filter);
    let isFilterSet = false;
    for (const col in searchTerms) {
      if (searchTerms[col].toString() !== '') {
        isFilterSet = true;
      } else {
        delete searchTerms[col];
      }
    }

    console.log(searchTerms);

    let nameSearch = () => {
      let found = false;
      if (isFilterSet) {
        for (const col in searchTerms) {
          searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
            if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
              found = true
            }
          });
        }
        return found
      } else {
        return true;
      }
    }
    return nameSearch()
  }
  return filterFunction;
}

// Reset table filters
  resetFilters() {
    this.filterValues = {};
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    });
    this.dataSource.filter = '';
  }



}