import { Component, ElementRef, ViewChild, OnInit, NgModule } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})


export class RelatoriosComponent {
  constructor() {}

  mostrarListaClientes = false;
  mostrarListaTopClientes = false;
  mostrarReceita = false;

  @ViewChild("dateInput2") dateInput2: any
  @ViewChild("dateInput1") dateInput1: any;
  
  dataIni = ''
  dataFi = ''

  receita = [
      {
        dataInicio: this.dataIni,
        dataFim: this.dataFi,
        valorTotal: 546789
      }
  ];
  
  topClientes = [

    {
      number: 1,
      nome:'João',
      qtd: "2",
      receita: "300"
    },

    {
      number: 2,
      nome: 'José',
      qtd: "2",
      receita: "300"
    },

    {
      number: 3,
      nome: 'Joana',
      qtd: "2",
      receita: "300"
    }
  ];

  clientes = [
    {
      number: 1, nome: 'João',
      cpf: '123.456.789-00',
      telefone: '99999-9999',
      email: 'example@mail.com',
    },
    {
      number: 2,
      nome: 'José',
      cpf: '987.654.321-00',
      telefone: '99999-8888',
      email: 'joao@mail.com',
    },
    {
      number: 3,
      nome: 'João Silva',
      cpf: '987.654.321-00',
      telefone: '99999-8888',
      email: 'joao@mail.com',
    },
    {
      number: 4,
      nome: 'João Silva',
      cpf: '987.654.321-00',
      telefone: '99999-8888',
      email: 'joao@mail.com',
    },
    {
      number: 5,
      nome: 'João Silva',
      cpf: '987.654.321-00',
      telefone: '99999-8888',
      email: 'joao@mail.com',
    },
    {
      number: 6,
      nome: 'João Silva',
      cpf: '987.654.321-00',
      telefone: '99999-8888',
      email: 'joao@mail.com',
    },
  ];

  ngOnInit(): void {}

  @ViewChild('content') content: ElementRef | undefined;

  gerarRelatorioPDF() {
    if (!this.mostrarListaClientes) {
      this.mostrarListaClientes = true;
      const doc = new jsPDF.default();

      // Posição inicial da tabela
      let startY = 10;

      // Configurações da tabela
      const columns = [
        { title: 'ID', width: 10, x: 10 },
        { title: 'Nome', width: 40, x: 20 },
        { title: 'CPF', width: 40, x: 60 },
        { title: 'Telefone', width: 40, x: 100 },
        { title: 'E-mail', width: 60, x: 140 },
      ];

      // Crie a tabela manualmente
      doc.setFontSize(12);
      doc.text('Relatório de Clientes', 10, startY);
      startY += 10;

      // Desenhe o cabeçalho da tabela
      columns.forEach((column) => {
        doc.rect(column.x, startY, column.width, 10, 'S');
        doc.text(column.title, column.x + 2, startY + 7);
      });

      startY += 10;

      // Preencha os dados da tabela
      this.clientes.forEach((cliente) => {
        startY += 10;
        doc.text(cliente.number.toString(), columns[0].x + 2, startY);
        doc.text(cliente.nome, columns[1].x + 2, startY);
        doc.text(cliente.cpf, columns[2].x + 2, startY);
        doc.text(cliente.telefone, columns[3].x + 2, startY);
        doc.text(cliente.email, columns[4].x + 2, startY);
      });

      // Salve o PDF
      doc.save('relatorio_clientes.pdf');
    } else {
      this.mostrarListaClientes = false;
    }
  }

  gerarRelatorioClientesPDF() {
    if (!this.mostrarListaTopClientes) {
      this.mostrarListaTopClientes = true;
      const doc = new jsPDF.default();

      // Posição inicial da tabela
      let startY = 10;

      // Configurações da tabela
      const columns = [
        { title: 'ID', width: 10, x: 10 },
        { title: 'Nome', width: 40, x: 20 },
        { title: 'Total de pedidos', width: 40, x: 60 },
        { title: 'Receita', width: 40, x: 100 },
      ];

      // Crie a tabela manualmente
      doc.setFontSize(12);
      doc.text('Relatório de Melhores Clientes', 10, startY);
      startY += 10;

      // Desenhe o cabeçalho da tabela
      columns.forEach((column) => {
        doc.rect(column.x, startY, column.width, 10, 'S');
        doc.text(column.title, column.x + 2, startY + 7);
      });

      startY += 10;

      // Preencha os dados da tabela
      this.topClientes.forEach((cliente) => {
        startY += 10;
        doc.text(cliente.number.toString(), columns[0].x + 2, startY);
        doc.text(cliente.nome, columns[1].x + 2, startY);
        doc.text(cliente.qtd, columns[2].x + 2, startY);
        doc.text(cliente.receita, columns[3].x + 2, startY);
      });

      // Salve o PDF
      doc.save('relatorio_top_clientes.pdf');
    } else {
      this.mostrarListaTopClientes = false;
    }
  }


  gerarRelatorioReceita() {
   
    if (!this.mostrarReceita) {
      this.mostrarReceita = true;
      const doc = new jsPDF.default();

      let startY = 10;

      const columns = [
        { title: 'Data Inicío', width: 40, x: 10 },
        { title: 'Data Final', width: 40, x: 50 },
        { title: 'Receita total', width: 40, x: 90 },
      ];

      doc.setFontSize(12);
      doc.text('Relatório de Receita', 10, startY);
      startY += 10;

      columns.forEach((column) => {
        doc.rect(column.x, startY, column.width, 10, 'S');
        doc.text(column.title, column.x + 2, startY + 7);
      });

      startY += 10;

      // Preencha os dados da tabela
      this.receita.forEach((row) => {
        console.log(this.dateInput1.nativeElement.value);
        startY += 10;
        doc.text(this.dateInput1.nativeElement.value, columns[0].x + 2, startY);
        doc.text(this.dateInput2.nativeElement.value,  columns[1].x + 2, startY);
        doc.text(row.valorTotal.toString(), columns[2].x + 2, startY);
      });

      // Salve o PDF
      doc.save('relatorio_receita.pdf');
    } else {
      this.mostrarListaTopClientes = false;
    }
  }
}
