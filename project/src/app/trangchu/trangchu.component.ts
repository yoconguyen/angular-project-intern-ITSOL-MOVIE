import { AfterContentInit, Component, Directive, DoCheck, ElementRef, OnInit } from '@angular/core';
import { ServicemoviService } from '../serviece/servicemovi.service';
import { State, Store } from '@ngrx/store';
import { filter, from, interval, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { state } from '@angular/animations';
import { AppState } from '../store/state';
import { selectadmin, selectapi, selectlogin, selectstore } from '../store/selector';
import { getmovie, getmovieaction, getmoviesussec, typemovieclick, typesendidedit } from '../store/action';
import { Router,ActivatedRoute } from '@angular/router';
import { ServieceService } from '../serviece/serviece.service';
// @Directive({ selector: 'img' })
// export class LazyImgDirective {
//   constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
//     const supports = 'loading' in HTMLImageElement.prototype;

//     if (supports) {
//       nativeElement.setAttribute('loading', 'lazy');
//     } else {
//       // fallback to IntersectionObserver
//     }
//   }
// }

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  value1=""
  datamovie:any
  datafilter:any
  phimbo:Observable<any>=  this.servicemovie.getapiphimmoi().pipe(
    map(data=>data.filter((data:any)=>data.phim=="bộ")))
  phimle:Observable<any>= this.servicemovie.getapiphimmoi().pipe(
    map(data=>data.filter((data:any)=>data.phim=="lẻ")))
  phimmoi:Observable<any>=  this.servicemovie.getapiphimmoi().pipe(
    map(data=>data.slice(0,5))
  )
apimovie:any
taikhoan:any
id:any
admin:any
date$:Observable<any>=of(Date())
a:string=""
apiobserverble$:Observable<any>= this.store.select(selectapi)
// iddata:any=this.activate.snapshot.paramMap.get('id')
  constructor( private servicemovie:ServicemoviService,
    private store:Store<any>,
    private http:HttpClient,
    private router:Router,
    private activate:ActivatedRoute,
    private service:ServieceService,
    
    ) {
    

      
     }

  ngOnInit(): void {
    this.lazyload()
    interval(1000).subscribe(data=>{this.a=Date()})

    this.store.select(selectapi).subscribe(data=>{
      this.apimovie=data
    })
      this.store.select(selectadmin).subscribe(data=>{
        this.admin=data})
        this.servicemovie.getapiphimmoi().pipe(
          map(data=>data.slice(0,5))
        ).subscribe()
  }


  lazyload(){
    let lazyImages = document.querySelectorAll('.phim-moi-menu');
  
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
   console.log(entries)
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
         console.log(entry);
         
        }
      });
   
    });
    lazyImages.forEach((a) => {
      lazyImageObserver.observe(a);
    });
  }
  



keyup(){
console.log(this.value1)
}

  clickphim(id:any){
    this.store.dispatch({
      type: typemovieclick,
      payload:id
    });
    this.router.navigate(['/home/viewmovie'])
  }
  editmovie(id:any){
    this.store.dispatch({
      type: typesendidedit,
      payload:id
    });
    this.router.navigate(['/home/formadmin'])
  }
}
function form(arg0: string) {
  throw new Error('Function not implemented.');
}

