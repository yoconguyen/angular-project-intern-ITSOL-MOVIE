import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceactionService {
dataquocgia:any
  constructor() { }
  setquocgia(data:any){
  this.dataquocgia=data
  
  }
  getquocgia(){
  return  this.dataquocgia
  

  }
}
