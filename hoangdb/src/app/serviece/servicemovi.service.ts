import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicemoviService {
  countries:any[] = [];
  private API = 'http://localhost:3000/movie'; 
  constructor(private http: HttpClient,
    
    ) { }
    getapi():Observable<any>{
      return this.http.get(this.API)
    }
}
