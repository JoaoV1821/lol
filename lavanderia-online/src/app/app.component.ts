import { Component, ElementRef, OnInit, ViewChild, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth';
import { Usuario } from './shared/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  isChecked: boolean = false;
  usuario!: Usuario | null;
  sh: any;
  title = 'lavanderia-online';
  constructor(public router: Router, public loginService: LoginService) {
    this.usuario = null;
  }
  ngOnInit(): void {
    this.usuario = this.loginService.getUsuario();
  }

  logout() {
    this.loginService.logout();
  }

  isLogged() {
    return this.loginService.checkIfLogged();
  }

}

export class AppModule { }



