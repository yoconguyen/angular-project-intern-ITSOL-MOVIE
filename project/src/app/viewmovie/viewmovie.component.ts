import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { __await } from 'tslib';
import { ServiceactionService } from '../serviece/serviceaction.service';
import { ServieceService } from '../serviece/serviece.service';
import { selectapi, selectmovieclick } from '../store/selector';
@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {
  comment = new FormControl('',[Validators.required]);
  
  phim:any
  aphim:any
  acomment:any
  ataikhoan:any
  viewcomment:any
  taikhoan:any
  hide:any
  idreply:any
  areply:any
  reply:any
  constructor(
    private store:Store<any>,
    private router:ServieceService
  ) { }

  ngOnInit(): void {
    this.view()
    this.xulicomment()
    this.viewcommentreply()
  }
  ngDoCheck(): void {
    this.localstore()
    }
view(){
this.store.select(selectmovieclick).subscribe(id=>{
  if(id!=null)
  {
    this.store.select(selectapi).subscribe(data=>{
      if(data!=null){
        let a=data.filter((data:any)=>data.id==id)
        if(a!=null){
          localStorage.setItem('name',JSON.stringify(a[0]) )
        }
    
      }
    })
  }
})
}

 xulicomment(){
this.router.getapicomment().subscribe(data=>{
  let a=data.filter((data:any)=>{
    return this.phim.id==data.iphim
  })
 localStorage.setItem('comment',JSON.stringify(a))

})
}
localstore(){
  this.aphim=localStorage.getItem('name')
  this.phim=JSON.parse(this.aphim)
 this.acomment=localStorage.getItem('comment')
this.viewcomment=JSON.parse(this.acomment)
this.ataikhoan=localStorage.getItem('taikhoan')
this.taikhoan=JSON.parse(this.ataikhoan)
this.areply=localStorage.getItem('commentreply')
this.reply=JSON.parse(this.areply)
}

 async postcomment(){
  
 let data={
  name:this.taikhoan.taikhoan,
  iphim:this.phim.id,
  content:this.comment.value,
  input:""
 }
await  this.router.postcomment(data).subscribe();
await this.xulicomment()
await this.xulicomment()
this.comment.reset()
}
deletecomment(id:any){
  this.router.deletecomment(id).subscribe()
 let filter= this.reply.filter((data:any)=>{
    return data.replyId==id
  })
 let map= filter.map((data:any)=>{
    return data.id
  })
  for (let index = 0; index < map.length; index++) {
    const element = map[index];
    this.router.deletecommentreply(element).subscribe()
  }
  this.xulicomment()
 this.xulicomment()
}
clickreply(id:any){
  this.hide=!this.hide
  this.idreply=id
  
}
aa:any
viewcommentreply(){
this.router.getcommentreply().subscribe((data:any)=>{
  this.aa=[]
  data.forEach((item:any) => {
    this.viewcomment.forEach((element:any) => {
      // console.log(element);
      if(element.id == item.replyId){
    
        this.aa.push(item)
      }
     });
  })
 localStorage.setItem('commentreply',JSON.stringify(this.aa))

 
})
}
postreply(value:any){

  
let data={
  replyId:this.idreply,
  content:value,
  taikhoan:this.taikhoan.taikhoan
}
this.router.postcommentreply(data).subscribe()
this.viewcommentreply()
this.viewcommentreply()

}
deletecommentreply(id:any){
this.router.deletecommentreply(id).subscribe()
this.viewcommentreply()
this.viewcommentreply()

}
}