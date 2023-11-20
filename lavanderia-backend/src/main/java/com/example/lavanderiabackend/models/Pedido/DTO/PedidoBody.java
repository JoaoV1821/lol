package com.example.lavanderiabackend.models.Pedido.DTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Endereco.Endereco;
import com.example.lavanderiabackend.models.Endereco.DTO.EnderecoModelo;
import com.example.lavanderiabackend.models.Pedido.Pedido;
import com.example.lavanderiabackend.models.Roupa.DTO.RoupaCarrinho;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class PedidoBody {
    public Long numero;
    public LocalDate data;
    public LocalDate prazo;
    public double total;
    public String status;
    public List<RoupaCarrinho> roupas;
    public CadastroDTO cadastroDTO;

    public PedidoBody(Pedido pedido) {
        this.cadastroDTO = new CadastroDTO();
        this.cadastroDTO.setCpf(pedido.cadastro.getCpf());
        this.cadastroDTO.setDataNasc(pedido.cadastro.getDataNascimento());
        this.cadastroDTO.setEmail(pedido.cadastro.getEmail());
        this.cadastroDTO.setNome(pedido.cadastro.getNome() + " " + pedido.cadastro.getSobrenome());
        this.cadastroDTO.setPerfil(pedido.cadastro.getPerfil());
        this.cadastroDTO.setSenha(pedido.cadastro.getSenha());
        this.cadastroDTO.setTelefone(pedido.cadastro.getTelefone());
        Endereco endereco = pedido.getCadastro().getEndereco();
        EnderecoModelo enderecoModelo = new EnderecoModelo(endereco.cep, endereco.logradouro, endereco.complemento,
                endereco.numero, endereco.cidade);
        this.cadastroDTO.setEndereco(enderecoModelo);
        this.numero = pedido.numero;
        this.data = pedido.data;
        this.prazo = pedido.prazo;
        this.total = pedido.total;
        this.status = pedido.status;
        this.roupas = new ArrayList<>();
        for (Carrinho carrinho : pedido.getCarrinhos()) {
            RoupaCarrinho roupa = new RoupaCarrinho();
            roupa.categoria = carrinho.getRoupa().categoria.getDescricao();
            roupa.valor = carrinho.getRoupa().valor;
            roupa.numero = carrinho.getRoupa().numero;
            roupa.quantidade = carrinho.getQuantidade();
            roupa.descricao = carrinho.getRoupa().getDescricao();
            roupa.tempoDeLavagem = carrinho.getRoupa().getTempoDeLavagem();
            roupas.add(roupa);
        }
    }
}