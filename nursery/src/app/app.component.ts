import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nursery';
  
  
  constructor(
    private productService:ProductService
  )
  {

  }
  cv=0
  showcartvalue()
  {

  this.cv=this.productService.cartvalue;

  }
  b_CV!:BehaviorSubject<number>
  ngOnInit(): void {
    this.productService.getCartValue().subscribe(val=>this.cv=val)
    this.b_CV=this.productService.b_cartValue$




  }







}
