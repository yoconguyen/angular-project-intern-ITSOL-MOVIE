import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
@Input() name:any
  constructor() { }

  ngOnInit(): void {
  }

}
