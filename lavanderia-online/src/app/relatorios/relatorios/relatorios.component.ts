import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  constructor() {}

  mostrarListaClientes = false;

  clientes = [
    {
      number: 1, nome: 'Pedro Torres',
      cpf: '123.456.789-00',
      telefone: '99999-9999',
      email: 'example@mail.com',
    },
    {
      number: 2,
      nome: 'João Silva',
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
}
