import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formadmin',
  templateUrl: './formadmin.component.html',
  styleUrls: ['./formadmin.component.css']
})
export class FormadminComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
