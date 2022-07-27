import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServieceService } from '../serviece/serviece.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datafilterdangnhap: any
  checkdangki: any
  checkdangnhap:any
  data: any
  datafilterdangki: any
  change: any = 'dangnhap'
  hide = true;
  fontStyleControl = new FormControl()
  formgrouplogin = new FormGroup({
    taikhoan: new FormControl('', [Validators.required, Validators.email]),
    matkhau: new FormControl('', [Validators.required]),
  })
  constructor(private serviece: ServieceService) { }

  ngOnInit(): void {
    this.getdata()
  }
  getdata() {
    this.serviece.getapi().subscribe((data: any) => {
      this.data = data
      this.datafilterdangki = data
      this.datafilterdangnhap=data
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

    return this.formgrouplogin.value.matkhau.hasError('email') ? 'Email must be a valid email address' : '';
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
    let a = this.datafilterdangnhap.some((data: any) => {
      return data.taikhoan==this.formgrouplogin.value.taikhoan && data.matkhau==this.formgrouplogin.value.matkhau
    })
    if(a==false){
this.checkdangnhap="sai"
setTimeout(() => { this.checkdangnhap = "" }, 3000)

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
      setTimeout(() => { this.checkdangki = "" }, 3000)
    }
    else {
      this.checkdangki = "thanhcong"
      this.serviece.postuser(data).subscribe()
      setTimeout(() => { this.checkdangki = "" }, 3000)
    }

  }
}
