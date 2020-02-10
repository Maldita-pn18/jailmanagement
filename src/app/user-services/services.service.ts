import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { prisoner } from '../data-models/prisoner'
import { Observable } from 'rxjs';
import { visitor } from '../data-models/visitor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // public url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getPrisoners(): Observable<any> {
    var url = 'http://localhost:4200/retrieve_prisoner';
    return this.http.get<prisoner>(`${url}`, httpOptions);
  }

  addPrisoner(prisoner: prisoner): Observable<any> {
    var url = 'http://localhost:4200:4000/add_prisoner';
    return this.http.post<prisoner>(`${url}`, prisoner, httpOptions);
  }

  addVisitors(visitor: visitor) {
    var url = 'http://localhost:4200:4000/add_visitor';
    return this.http.post(`${url}`, visitor, httpOptions);
  }

  getVisitor(): Observable<any> {
    var url = 'http://localhost:4200:4000/retrieve_visitor';
    return this.http.get<visitor>(`${url}`, httpOptions);
  }
  // updatePrisoner(id: any): Observable<any> {
  //   return this.http.put<any>(`${this.url}/${id}`, httpOptions)
  // }



}
