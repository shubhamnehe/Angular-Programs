import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent 
{
  //characteristics
  name:string="Shubham Somnath Nehe";

  Display():string   //behaviour
  {
      var ret:string="Hello "+this.name;
      return ret; 
  }
  Addition(No1:number,No2:number):number
  {
    return No1+No2;
  }
}

