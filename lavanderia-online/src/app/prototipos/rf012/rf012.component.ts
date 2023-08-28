import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rf012',
  templateUrl: './rf012.component.html',
  styleUrls: ['./rf012.component.css']
})
export class Rf012Component implements OnInit{
  
  constructor(){}

  orders = [
    { number: 1, date: "27/08/2023", deadline: "28/08/2023", status: "Em Aberto" , recolhido: false},
    { number: 2, date: "27/08/2023", deadline: "28/08/2023", status: "Em Aberto" , recolhido: false},
    { number: 3, date: "27/08/2023", deadline: "28/08/2023", status: "Em Aberto" , recolhido: false},
    { number: 4, date: "27/08/2023", deadline: "29/08/2023", status: "Em Aberto" , recolhido: false},
    { number: 5, date: "27/08/2023", deadline: "29/08/2023", status: "Em Aberto" , recolhido: false},
    { number: 6, date: "27/08/2023", deadline: "29/08/2023", status: "Em Aberto" , recolhido: false}
  ];

  ngOnInit(): void {
        
  }

  mudarEstado(order : any): void{
    order.status = "Recolhido";
    order.recolhido = true;
  }
  
}
