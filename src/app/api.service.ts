import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Recursos } from './recursos';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'mongodb+srv://<user>:<pass>@fnad.ea9vu.mongodb.net/fnad?retryWrites=true&w=majority';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  private log(message: string) {
    console.log(message);
  }
  getRecursos(): Observable<Recursos[]> {
    return this.http.get<Recursos[]>(`${apiUrl}`)
      .pipe(
        tap( recursos => console.log('fetched Recursos')),
        catchError(this.handleError('getRecursos', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}
