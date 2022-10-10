import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService:ProductService,
 

    

  ) { }

  ngOnInit(): void {

    
//this.productService.getCartValue().subscribe()

//this.products=this.productService.getproducts()

this.productService.getproducts().subscribe(
  data=>{this.products=data;}
)







  }
  
  //style bind for card
  cardstyle={
    "border":"2px solid",
    "border-radius":"5px"


  }
  products:Products[]=[]
  
  //pagination logic
  start_index=0
  end_index=4
  item_per_page=4
  page_number=1
  nextPage(page_number:number)
  {
    this.start_index  = (page_number-1)*this.item_per_page 
    this.end_index = (page_number) *this.item_per_page 

  }
//logic end


displaychilddata(data:number)
{

console.log(data);


}

addtocart()
{
 
this.productService.increasecartvalue();


}

  
}
