import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AutocadastroService } from '../services/autocadastro.service';


@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {
  @ViewChild("cep") cep: any
  @ViewChild("cidade") cidade: any
  @ViewChild("complemento") complemento: any
  @ViewChild("endereco") endereco: any
  
  constructor(private AutocadastroService: AutocadastroService) {

  }
  ngOnInit(): void {
    
  }
  requestCep() {
    this.AutocadastroService.getCep(this.cep.nativeElement.value).then((response) => {
      
      this.cidade.nativeElement.value =  response.data.localidade;
      this.endereco.nativeElement.value =  response.data.logradouro;
      this.complemento.nativeElement.value =  response.data.complemento;
    })
      

  }
}
