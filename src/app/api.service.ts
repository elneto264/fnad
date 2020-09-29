import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   endpoint: string = 'mongodb+srv://infofnad:biologia@fnad.ea9vu.mongodb.net/fnad?retryWrites=true&w=majority';
//   headers = new HttpHeaders().set('Content-Type', 'application/json');

//   constructor( private http: HttpClient ) { }

//   private log(message: string) {
//     console.log(message);
//   }
//   GetDocumentos(id): Observable<any> {
//     let API_URL = `${this.endpoint}/recursos/${id}`;
//     return this.http.get(API_URL, { headers: this.headers })
//       .pipe(
//         map((res: Response) => {
//           return res || {}
//         }),
//       )
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       this.log(`${operation} failed: ${error.message}`);
  
//       return of(result as T);
//     };
//   }

//   GetDocumento(id): Observable<any> {
//     let API_URL = `${this.endpoint}/read-student/${id}`;
//     return this.http.get(API_URL, { headers: this.headers })
//       .pipe(
//         map((res: Response) => {
//           return res || {}
//         }),
//       )
//     }
// }



//-------------------------------------

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  // Get all students
  GetDocumentos() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get student
  GetDocumento(id): Observable<any> {
    let API_URL = `${this.endpoint}/recursos/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }


  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
