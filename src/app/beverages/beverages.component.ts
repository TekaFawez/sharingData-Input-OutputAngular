import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {


  @Input() beverges="tea";
  @Output() NewBrevrgeEvent = new EventEmitter<string> ;
  // transform data from child  to parent
  constructor() { }

  ngOnInit(): void {
   
  }
  addNewBreverge(value : string){
    this.NewBrevrgeEvent.emit(value)
      
  }

}
