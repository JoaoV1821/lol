import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { AutocadastroService } from '../services/autocadastro.service';
import { Router } from '@angular/router';


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
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa;
  
  constructor(private AutocadastroService: AutocadastroService,
    private router: Router ) {

  }
  ngOnInit(): void {
    
  }

  inserirPessoaComponent(): void {
    if (this.formPessoa.form.valid) {
      this.AutocadastroService.inserirPessoaService(this.pessoa);
      this.router.navigate(['/orcamento']);
    }
  }
  
  requestCep() {
    this.AutocadastroService.getCep(this.cep.nativeElement.value).then((response) => {
      
      this.cidade.nativeElement.value =  response.data.localidade;
      this.endereco.nativeElement.value =  response.data.logradouro;
      this.complemento.nativeElement.value =  response.data.complemento;
    }).catch((error) => {
        console.log(error.menssge);
    })
      

  }
}
