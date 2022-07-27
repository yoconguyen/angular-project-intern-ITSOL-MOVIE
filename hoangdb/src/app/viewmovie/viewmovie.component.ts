import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceactionService } from '../serviece/serviceaction.service';
@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {
  comment = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    
  }

}
