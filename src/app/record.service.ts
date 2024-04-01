import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Record } from './record';
import { RECORD } from './mock-record';

@Injectable({ providedIn: 'root' })
export class RecordService {

    private baseUrl = 'http://127.0.0.1:8000/api'; 

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(
        private http: HttpClient) { }

        

    getRecords(): Observable<Record[]> {
        // const records = of(RECORD);
      
       
        return this.http.get<Record[]>(`${this.baseUrl}/index/record`);
    }

    // private baseUrl = 'http://127.0.0.1:8000/api'; 

    // httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
  
    // constructor(
    //   private http: HttpClient) { }
  
    // /** GET heroes from the server */
    // getRecords(): Observable<Record[]> {
    //     return this.http.get<Record[]>(`${this.baseUrl}/index/record`);
    //   }
  
    // /** GET hero by id. Will 404 if id not found */
    // getRecord(id: number): Observable<Record> {
    //   const url = `${this.baseUrl}/show/record/${id}`;
    //   return this.http.get<Record>(url);
    // }
  
    // /** DELETE: delete the hero from the server */
    // deleteRecord(id: number): Observable<Record> {
    //   const url = `${this.baseUrl}/index/record/${id}`;
  
    //   return this.http.delete<Record>(url, this.httpOptions);
    // }
  
    // /** PUT: update the hero on the server */
    // updateRecord(id: number): Observable<any> {
    //   return this.http.put(`${this.baseUrl}/update/record/${id}`, this.httpOptions);
    // }
}