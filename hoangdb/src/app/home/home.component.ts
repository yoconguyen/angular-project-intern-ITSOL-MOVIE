import { Component, OnInit } from '@angular/core';
import { ServicemoviService } from '../serviece/servicemovi.service';
import { ServiceactionService } from '../serviece/serviceaction.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
datamovie:any
datafilter:any
  constructor(private servicemovie:ServicemoviService,
    private serviceaction:ServiceactionService,
    private store: Store<any>
    ) { }

  ngOnInit(): void {

  }

  helloimgclick(){
    let a=document.querySelector(".hello-img");
    a?.classList.toggle("none")
  }
  clickquocgia(e:any){
    this.serviceaction.setquocgia(e.target.innerText)
    this.store.dispatch({
      type: 'FILTER_MOVIE',
      payload:e.target.innerText
    });
  }
}
