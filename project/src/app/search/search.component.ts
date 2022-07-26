import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceactionService } from '../serviece/serviceaction.service';
import { Store } from '@ngrx/store';
import { selectapi, selectfilternam, selectfilterquocgia, selectfiltersearch, selectfiltertheloai } from '../store/selector';
import { typemovieclick } from '../store/action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnChanges {
  dataView: any;
  datasearch: any
  namesearch: any
p:number=1
  // filter:Observable<any>
  constructor(private serviceaction: ServiceactionService,
    private store: Store<any>,
    private router:Router
  ) {
    //  this.filter=this.store.select(state=>state.filter)
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
ngDoCheck(): void {
  let a:any=localStorage.getItem('search')
  let b:any=localStorage.getItem('searchname')

  this.datasearch=JSON.parse(a)
this.namesearch=b
  
}
  ngOnInit(): void {
    this.viewquocgia()
    this.viewtheloai()
    this.viewnam()
    this.viewsearch()
    
  }

  viewquocgia() {
    this.store.select(selectfilterquocgia).subscribe(quocgia => {
if(quocgia!=null){
   localStorage.setItem('searchname',quocgia)
 

      this.store.select(selectapi).subscribe(data => {

        if (data != null) {
          let a = data.filter((data: any) => data.quocgia == quocgia)
          localStorage.setItem('search',JSON.stringify(a))

        }

      })
    }
    })
  }
  viewtheloai() {

    this.store.select(selectfiltertheloai).subscribe(theloai => {

      if (theloai != null) {
        localStorage.setItem('searchname',theloai)


        this.store.select(selectapi).subscribe(data => {

          if (data != null) {
            let b = data.filter((data: any) => data.theloai == theloai)
            localStorage.setItem('search',JSON.stringify(b))

          }

        })
      }
    })

  }
  viewnam() {
    this.store.select(selectfilternam).subscribe(nam => {
     

      if (nam != null) {
        localStorage.setItem('searchname',nam)

        this.store.select(selectapi).subscribe(data => {
          if (data != null) {
            let b = data.filter((data: any) => data.year == nam)
            localStorage.setItem('search',JSON.stringify(b))

          }

        })
      }
    })
  }


  viewsearch() {
    this.store.select(selectfiltersearch).subscribe(search => {

      if (search != null) {

        localStorage.setItem('searchname',search)


        this.store.select(selectapi).subscribe(data => {
          if (data != null) {
            let c = data.filter((data: any) => data.name.toUpperCase().normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(search.toUpperCase().normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd').replace(/Đ/g, 'D')))
                localStorage.setItem('search',JSON.stringify(c))

          }

        })
      }
    })
  }

  clickphim(id:any){
    this.store.dispatch({
      type: typemovieclick,
      payload:id
    });
    this.router.navigate(['/home/viewmovie'])
  }
}
