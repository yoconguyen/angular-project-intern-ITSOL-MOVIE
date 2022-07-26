import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicemoviService } from '../serviece/servicemovi.service';
import { ServiceactionService } from '../serviece/serviceaction.service';
import { Store } from '@ngrx/store';
import { filtermovienam, filtermoviequocgia, filtermoviequocgiaaction, filtermoviesearch, filtermovietheloai, filtermovietheloaiaction, getmovieaction } from '../store/action';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { selectadmin, selectlogin } from '../store/selector';
import { ServieceService } from '../serviece/serviece.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  search = new FormControl('');
datamovie:any
datafilter:any
taikhoan1:any
user:any
admin:any
a="hoang"

  constructor(private servicemovie:ServicemoviService,
    private serviceaction:ServiceactionService,
    private store: Store<any>,
    private router:Router,
    private service:ServieceService
    ) { }

  ngOnInit(): void {
    this.store.dispatch(getmovieaction());
    this.getid()
  }




  ngDoCheck(){


    this.user=localStorage.getItem('taikhoan')
    this.taikhoan1=JSON.parse(this.user)
   
  }

  helloimgclick(){
    let a=document.querySelector(".hello-img");
    a?.classList.toggle("none")
  }
  clickquocgia(e:any){
    this.store.dispatch({
      type: filtermoviequocgia,
      payload:e.target.innerText
    });
    this.router.navigate(['/home/search'])
    let a= document.querySelector('mat-sidenav-content')
    a?.scrollTo(0,0)


  }

clicktheloai(e:any){
  this.store.dispatch({
    type: filtermovietheloai,
    payload:e.target.innerText
  });
  this.router.navigate(['/home/search'])

  let a= document.querySelector('mat-sidenav-content')
  a?.scrollTo(0,0)
}
clicknam(e:any){
  this.store.dispatch({
    type: filtermovienam,
    payload:e.target.innerText
  });
  this.router.navigate(['/home/search'])
  let a= document.querySelector('mat-sidenav-content')
  a?.scrollTo(0,0)

}

clicksearch(){
  this.store.dispatch({
    type: filtermoviesearch,
    payload:this.search.value
  });
  this.router.navigate(['/home/search'])
  let a= document.querySelector('mat-sidenav-content')
  a?.scrollTo(0,0)
}
keyupsearch(e:any){
if(e.code=="Enter"){
  this.store.dispatch({
    type: filtermoviesearch,
    payload:this.search.value
  });
  this.router.navigate(['/home/search'])
}
}

getid(){
  
  this.store.select(selectlogin).subscribe(id=>{
    
   if(id!=null){
    this.service.getapi().subscribe((data:any)=>{
      let a= data.filter((data:any)=>{
        return data.id==id
      })
     
      localStorage.setItem('taikhoan',JSON.stringify(a[0]))
      // window.location.reload()

    })
  
   }
  })
  

    }
    
}


