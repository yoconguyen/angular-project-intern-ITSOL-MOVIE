import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicemoviService {
  countries:any[] = [];
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  }
  private API = 'http://localhost:3000/movie'; 
  constructor(
    private http: HttpClient,
    
    ) { }
    getapi():Observable<any>{
      return this.http.get(this.API)
    }
    getapiphimmoi():Observable<any>{
      return this.http.get(this.API)
   
    }
    putmovie(id:any,data:any):Observable<any>{
      return this.http.put(this.API+"/"+id,data,this.httpOptions)
    }
}
