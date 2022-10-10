import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit,OnChanges {

  constructor() { }
  
@Input()
starrating!:number
starWidth!:number

@Output()
value=new EventEmitter<number>()

  ngOnInit(): void {
  }


  ngOnChanges(): void {

    this.starWidth=this.starrating*18

  }

  emmitvalue()
  {
   
this.value.emit(12)

  }
}
