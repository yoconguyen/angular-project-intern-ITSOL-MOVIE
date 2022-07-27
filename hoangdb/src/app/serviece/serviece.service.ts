import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServieceService {
private API="http://localhost:3000/user"
httpoption={headers :new HttpHeaders({"Content-Type": "application/json"})}
  constructor(private http:HttpClient,
    ) { }
    
  getapi():Observable<any>{
    return this.http.get("http://localhost:3000/movie")  
  }

postuser(data:any):Observable<any>{
  return this.http.post(this.API,data,this.httpoption)
}

}
