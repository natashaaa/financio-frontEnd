import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Record } from './record';

@Injectable({ providedIn: 'root' })
export class RecordService {

    private baseUrl = 'http://127.0.0.1:8000/api'; 

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(private http: HttpClient) { }

    getRecords(): Observable<Record[]> {
        return this.http.get<Record[]>(`${this.baseUrl}/index/record`);
    }

    getRecord(id: number): Observable<Record> {
        const url = `${this.baseUrl}/show/record/${id}`;
        return this.http.get<Record>(url);
    }

    updateRecord(record: Record): Observable<any> {
        const url = `${this.baseUrl}/update/record/${record.id}`;
        return this.http.put(url, record, this.httpOptions);
    }

    deleteRecord(id: number): Observable<Record> {
        const url = `${this.baseUrl}/index/record/${id}`;
        return this.http.delete<Record>(url, this.httpOptions);
    }
}