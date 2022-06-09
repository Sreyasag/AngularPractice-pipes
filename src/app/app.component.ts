import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name ="";
  date ="";
  amount ="";

  
  onChangeName(event:string){
    this.name= event;
  }
  
  onChangeDate(event:string){
    this.date=event;
  }

  onChangeAmount(event:string){
    this.amount=event;
  }
}
