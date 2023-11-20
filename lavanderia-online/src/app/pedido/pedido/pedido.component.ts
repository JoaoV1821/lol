import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { ModalPedidoComponent } from '../modal-pedido/modal-pedido.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


interface itemCarrinho {
  descricao: string,
  quantidade: number,
  valor: number,
  subtotal: number,
  numeroRoupa: number
}

interface itemList {
  descricao: string,
  valor: number,
  categoria: string,
  prazo: number,
  numero: number
}

interface Categoria {
  numero: string;
  descricao: string;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})


export class PedidoComponent implements OnInit {


  carrinho: itemCarrinho[] = [];
  categorias: Categoria[] = [];
  lista_de_items: any;
  total: number = 0;
  prazoMax: number = 0;

  constructor(private modalService: NgbModal, private PedidoService: PedidoService) {
  }

  orcamento() {
    const modalRef = this.modalService.open(ModalPedidoComponent);
    modalRef.componentInstance.orcamento = this.total;
    modalRef.componentInstance.listaRoupasPedido = this.carrinho;
    modalRef.componentInstance.prazoMax = this.prazoMax;
  }
  //aquiiii
  async gerarPDF() {

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);


    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { width, height } = page.getSize();
    const fontSize = 30;
    const text = 'Hello, PDF!';

    page.drawText(text, {
      x: 50,
      y: height - 50,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });


    const pdfBytes = await pdfDoc.save();

  }

  changeItemValue(index: number, operation: string) {
    if (operation == 'up') {
      this.carrinho[index].quantidade += 1;
      this.carrinho[index].subtotal = this.carrinho[index].quantidade * this.carrinho[index].valor;
      this.updateTotal();
    } else {
      this.carrinho[index].quantidade -= 1;
      if (this.carrinho[index].quantidade <= 0) {
        this.carrinho.splice(index, 1);
      }
      else {
        this.carrinho[index].subtotal = this.carrinho[index].quantidade * this.carrinho[index].valor;
      }
      this.updateTotal();
    }
  }

  addItem(event: any) {
    let item = event as itemList;
    for (let x = 0; x < this.carrinho.length; x++) {
      if (this.carrinho[x].descricao == item.descricao) {
        this.carrinho[x].quantidade += 1;
        this.carrinho[x].subtotal += this.carrinho[x].valor;
        this.updateTotal();
        return;
      }
    }
    this.carrinho.push({
      numeroRoupa: item.numero,
      descricao: item.descricao,
      quantidade: 1,
      valor: item.valor,
      subtotal: 1 * item.valor,

    })
    this.updateTotal();

  }

  updateTotal() {
    this.total = 0;
    for (let x = 0; x < this.carrinho.length; x++) {
      this.total += this.carrinho[x].subtotal;
    }
  }


  limparItens() {
    this.carrinho = [];
    this.total = 0;
  }
  async requestRoupas() {
    const response: any = await this.PedidoService.getRoupas();
    this.lista_de_items = response;
    console.log(this.lista_de_items)
  }

  async requestCategorias() {
    const response: any = await this.PedidoService.getCategorias();
    this.categorias = response;
  }

  async ngOnInit(): Promise<void> {
    await this.requestRoupas();
    await this.requestCategorias();
    console.log('ngOnInit: ' + this.lista_de_items);
  }



  async cadastrarPedido() {
    const pedido = {
      "carrinhos": this.carrinho
    }
    //console.log(pedido)
    await this.PedidoService.postPedido(pedido).then((response: any) => {
      alert("Pedido Cadastrado com sucesso!")
    }).catch((error) => {
      alert("Erro ao cadastrar Pedido!");
    })

  }

}