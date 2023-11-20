import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth';
import { Usuario } from './shared/models';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  isChecked: boolean = false;
  user!: Usuario | null;
  sh: any;
  title = 'lavanderia-online';
  constructor(public router: Router, public loginService: LoginService, private ref: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    console.log("hi");
    this.user = this.loginService.getUsuario();
  }

  logout() {
    this.loginService.logout();
  }

  isLogged() {
    return this.loginService.checkIfLogged();
  }

  refresh(): void {
    window.location.reload();
  }

}

export class AppModule { }



