import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable, observable, of, Subject } from "rxjs"
import { Products } from "./products"


@Injectable({

providedIn:"root"
})


export class ProductService
{
cartvalue=0
cartvalue$ = new Subject<number>()
b_cartValue$ =  new BehaviorSubject<number>(0)

increasecartvalue()
{
this.cartvalue+=1
this.cartvalue$.next(this.cartvalue)
this.b_cartValue$.next(this.cartvalue)

}

decreasecartvalue()
{

    this.cartvalue-=1
}

getCartValue()
{
    return this.cartvalue$
}

products:Products[]=[]

getproducts():Observable<Products[]>
{
    //return of(this.products)
    return this.http.get<Products[]>("http://localhost:4200/assets/product.json")
}

constructor(   
    private http:HttpClient,
   
    )
{}

}