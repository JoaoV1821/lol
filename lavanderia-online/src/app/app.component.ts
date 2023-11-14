import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  isChecked: boolean = false;
  sh: any;
  title = 'lavanderia-online';
  constructor(public router: Router) {

  }
  ngOnInit(): void {
    let api = document.getElementById("api");

    if (api != null) {
      api.addEventListener("click", () => {
        window.location.href = "/api/index";
      })
    }
  }
}
export class AppModule { }



