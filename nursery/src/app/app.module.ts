import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StarComponent } from './star/star.component';


const routes:Routes=[

{path:"home",component:HomeComponent},
{path:"products",component:ProductComponent},
{path:"blog",component:BlogComponent},
{path:"Contact Us",component:ContactusComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    PlantsComponent,
    BlogComponent,
    ContactusComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
