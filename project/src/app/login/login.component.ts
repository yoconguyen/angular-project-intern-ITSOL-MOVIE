import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ServieceService } from '../serviece/serviece.service';
import { typeadmin, typeloginid } from '../store/action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datafilterdangnhap: any
  checkdangki: any
  checkdangnhap: any
  data: any
  datafilterdangki: any
  change: any = 'dangnhap'
  hide = true;
  dataadmin:any
  fontStyleControl = new FormControl()
  formgrouplogin = new FormGroup({
    taikhoan: new FormControl('', [Validators.required, Validators.email]),
    matkhau: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  constructor(private serviece: ServieceService,
    private router:Router,
    private store:Store<any>
    ) { }

  ngOnInit(): void {
    this.getdata()
    this.serviece.getuseradmin().subscribe( (data:any)=>{
      this.dataadmin=data
    })
  }
  getdata() {
    this.serviece.getapi().subscribe((data: any) => {
      this.data = data
      this.datafilterdangki = data
      this.datafilterdangnhap = data
    })
  }


  getErrorMessage() {
    if (this.formgrouplogin.value.taikhoan.hasError('required')) {
      return 'Email is required';
    }

    return this.formgrouplogin.value.taikhoan.hasError('email') ? 'Email must be a valid email address' : '';
  }
  getErrorMessage2() {
    if (this.formgrouplogin.value.matkhau.hasError('required')) {
      return 'Password is required';
    }

    return this.formgrouplogin.value.matkhau.hasError('minLength') ? '6 ky tu' : '';
  }

  onSubmit() {

  }

  clickdangnhap(e: any) {

    this.change = ''
    this.change = this.fontStyleControl.value

  }
  clickdangki(e: any) {
    this.change = ''
    this.change = this.fontStyleControl.value



  }
  dangnhap() {
    let c= this.dataadmin.some((data:any)=>{
      return data.taikhoan == this.formgrouplogin.value.taikhoan && data.matkhau == this.formgrouplogin.value.matkhau
  })
    let a = this.datafilterdangnhap.some((data: any) => {
      return data.taikhoan == this.formgrouplogin.value.taikhoan && data.matkhau == this.formgrouplogin.value.matkhau
    })
    if (a == false && c==false) {
      this.checkdangnhap = "sai"
      setTimeout(() => { this.checkdangnhap = "" }, 3000)

    }

let b= this.datafilterdangnhap.filter((data:any)=>{
  return data.taikhoan == this.formgrouplogin.value.taikhoan && data.matkhau == this.formgrouplogin.value.matkhau
})


    if (a == true) {
      this.checkdangnhap = "dung"
      setTimeout(() => {
         this.checkdangnhap = "" 
        this.store.dispatch({
          type:typeloginid,
          payload:b[0].id
        })
        this.router.navigate(['/home/trangchu'])
      
        }, 2000)
      
    }

  
    

    let d= this.dataadmin.filter((data:any)=>{
      return data.taikhoan == this.formgrouplogin.value.taikhoan && data.matkhau == this.formgrouplogin.value.matkhau
    })
    if (c == true) {
      this.checkdangnhap = "dung"
      setTimeout(() => {
         this.checkdangnhap = "" 
        this.store.dispatch({
          type:typeadmin,
          payload:"admin"
        })
        this.router.navigate(['/home/trangchu'])
      
        }, 2000)
      
    }

}
  dangki() {

    let data = {
      taikhoan: this.formgrouplogin.value.taikhoan,
      matkhau: this.formgrouplogin.value.matkhau
    }
    let a = this.datafilterdangki.some((data: any) => {
      return data.taikhoan == this.formgrouplogin.value.taikhoan
    })

    if (a == true) {
      this.checkdangki = "khongthanhcong"
      setTimeout(() => {
        this.checkdangki = ""


      }, 3000)
    }
    else {
      this.checkdangki = "thanhcong"
      this.serviece.postuser(data).subscribe()
      setTimeout(() => { this.checkdangki = "" }, 3000)
    }

  }
}
