import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ServieceService {
  private API3="http://localhost:3000/useradmin"
private API2="http://localhost:3000/commentreply"

private API1="http://localhost:3000/comment"

private API="http://localhost:3000/user"
httpoption={headers :new HttpHeaders({"Content-Type": "application/json"})}
  constructor(private http:HttpClient,
    ) { }
    
  getapi():Observable<any>{
    return this.http.get(this.API)  
  }

  getapicomment():Observable<any>{
return this.http.get(this.API1)
  }
postuser(data:any):Observable<any>{
  return this.http.post(this.API,data,this.httpoption)
}

postcomment(data:any):Observable<any>{
  return this.http.post(this.API1,data,this.httpoption)
}
deletecomment(id:any):Observable<any>{
  return this.http.delete(this.API1+'/'+id)
}
getcommentreply():Observable<any>{
 return this.http.get(this.API2)
}
postcommentreply(data:any):Observable<any>{
  return this.http.post(this.API2,data,this.httpoption)
}
deletecommentreply(id:any):Observable<any>{
  return this.http.delete(this.API2+'/'+id)
}
getuseradmin():Observable<any>{
  return this.http.get(this.API3)

}

}
