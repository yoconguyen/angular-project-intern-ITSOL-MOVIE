import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ServicemoviService } from '../serviece/servicemovi.service';
import { getmovieaction } from '../store/action';
import { selectidedit } from '../store/selector';

@Component({
  selector: 'app-formadmin',
  templateUrl: './formadmin.component.html',
  styleUrls: ['./formadmin.component.css']
})
export class FormadminComponent implements OnInit {
  idedit:any
  formmovie = new FormGroup({
    name: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    nameen: new FormControl('', [Validators.required]),
    video: new FormControl('', [Validators.required]),
    quocgia: new FormControl('', [Validators.required]),
    theloai: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    phim: new FormControl('', [Validators.required]),
  });
  constructor(
private serviece:ServicemoviService,
    private store:Store<any>,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.store.select(selectidedit).subscribe((data:any)=>{
      this.idedit=data
    })
    this.loaddata()
  }
loaddata(){
 this.serviece.getapi().subscribe(
  (data:any)=>{
    let a=data.filter((data:any)=>{
      return data.id==this.idedit
    })
    if(a[0]){
      let movi={
        img:a[0].img,
        name:a[0].name,
        nameen:a[0].nameen,
        phim:a[0].phim,
        quocgia:a[0].quocgia,
        theloai:a[0].theloai,
        video:a[0].video,
        year:a[0].year
      }
      this.formmovie.setValue(movi)
    }
    
 
    
  }
 )
}
editmovie(){
 let data={
  img:this.formmovie.value.img,
  name:this.formmovie.value.name,
  nameen:this.formmovie.value.nameen,
  phim:this.formmovie.value.phim,
  quocgia:this.formmovie.value.quocgia,
  theloai:this.formmovie.value.theloai,
  video:this.formmovie.value.video,
  year:this.formmovie.value.year,
  }
  this.serviece.putmovie(this.idedit,data).subscribe()
  this.router.navigate(['/home/trangchu'])
  this.store.dispatch(getmovieaction());

}
}
