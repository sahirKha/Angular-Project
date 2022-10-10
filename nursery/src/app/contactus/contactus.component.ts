import { Component, OnInit } from '@angular/core';
import { contactus } from '../contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
fm= new contactus

submitData()
{

  console.log(this.fm)
}


}

