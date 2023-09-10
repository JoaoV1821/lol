import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  isChecked: boolean = false;
  sh: any;
  title = 'lavanderia-online';
  constructor(public router: Router){}
}
export class AppModule { }



