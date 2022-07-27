import { Component, OnInit } from '@angular/core';
import { ServicemoviService } from '../serviece/servicemovi.service';
import { State, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { state } from '@angular/animations';
import { AppState } from '../store/state';
import { selectname, selectstore } from '../store/selector';
import { getmovie, getmovieaction, getmoviesussec } from '../store/action';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  datamovie:any
  datafilter:any
  phimbo:any
  phimle:any
  phimmoi:any
apimovie:any
  constructor( private servicemovie:ServicemoviService,
    private store:Store<any>,
    private http:HttpClient,
    ) {
    

      
     }

  ngOnInit(): void {
  // let a=  this.servicemovie.getapi().subscribe((data:any)=>{
  //     this.datamovie=data
  //     return this.datamovie
  //   });

    this.getapi()
    this.filterdata()
    this.store.select(selectname).subscribe(data=>{this.apimovie=data})
    
  }
 getapi(){
   
    this.store.dispatch(getmovieaction());

  }

  filterdata(){
    this.servicemovie.getapi().subscribe((data:any)=>{
     let a= data.filter((data:any)=>{
        return data.phim=="bộ";
      })
      let b= data.filter((data:any)=>{
        return data.phim=="lẻ";
      })
      
     let c= data.sort((a:any,b:any)=>{
        return b.year-a.year
      })
     let d= c.slice(0,5)
    
     this.phimmoi=d
      this.phimbo=a
      this.phimle=b
          })
  }
}
