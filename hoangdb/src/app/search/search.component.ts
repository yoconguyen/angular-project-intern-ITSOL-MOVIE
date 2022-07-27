import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceactionService } from '../serviece/serviceaction.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 dataView : any;
 
// filter:Observable<any>
  constructor(private serviceaction:ServiceactionService,
    private store:Store<any>
    ) { 
    //  this.filter=this.store.select(state=>state.filter)
    }

  ngOnInit(): void {
  this.store.subscribe(data=>console.log(data))


    }
  

  

}
