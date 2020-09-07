import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor() {

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
    this.getRemoteData();
    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }

  // Get Uniqu values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
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

  const remoteRecursosData = [
    {
      "id": 1,
      "tema": "Ecologia",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "fnad": "si",
      "enlace": "link"
    },
    {
      "id": 2,
      "tema": "Biogeografia",
      "autor": "Leanne Graham, Leanne Graham, Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "10.1145/1067268.1067287",
      "fnad": "no",
      "enlace": "link"
    },
    {
      "id": 3,
      "tema": "Botanica",
      "autor": "Leanne Graham",
      "ano": "XXXX",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "fnad": "si",
      "enlace": "link"
    },
    {
      "id": 4,
      "tema": "Zoologia",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "10.1145/1067268.1067287",
      "enlace": "link"
    },
    {
      "id": 5,
      "tema": "Contaminacion",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Actualización de la clasificación de la vegetación, según la clasificación de Häger y Zanoni, su distribución espacial y mapa de la vegetación de la República Dominicana",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "enlace": "link"
    },
    {
      "id": 6,
      "tema": "Pesca",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "enlace": "link"
    },
    {
      "id": 7,
      "tema": "Aquicultura",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "enlace": "link"
    },
    {
      "id": 8,
      "tema": "Energia",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "enlace": "link"
    },
    {
      "id": 9,
      "tema": "Tecnologia",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "enlace": "link"
    },
    {
      "id": 10,
      "tema": "Geografia",
      "autor": "Leanne Graham",
      "ano": "Bret",
      "titulo": "Sincere@april.biz",
      "nomRevista": "1-770-736-8031 x56442",
      "editora": "hildegard.org",
      "volumen": "Active",
      "doi": "4564sghfks",
      "enlace": "link"
    }
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