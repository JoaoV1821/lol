package com.example.lavanderiabackend.models.Cadastro;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.models.Carrinho.DTOS.CarrinhoDTO;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoStatus;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    private final CadastroService cadastroService;

    UsuarioController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @GetMapping("/get/usuario")
    public ResponseEntity<Object> getUsuario() {
        cadastroService.getUsuarioLogado();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/update/usuario")
    public ResponseEntity<Object> updateUsuario(@RequestBody CadastroDTO cadastroDTO) {
        cadastroService.updateCadastro(cadastroDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/add/pedido")
    public ResponseEntity<Object> addPedido(@Valid @RequestBody List<CarrinhoDTO> carrinhos) {
        cadastroService.addPedido(carrinhos);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/update/pedido/status")
    public ResponseEntity<Object> updatePedidoStatus(@RequestBody PedidoStatus pedidoStatus) {
        cadastroService.updatePedidoStatus(pedidoStatus.getStatus(), pedidoStatus.getNumeroPedido());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/get/pedidos")
    public ResponseEntity<Object> getPedidos() {
        return ResponseEntity.ok().body(cadastroService.getListaPedidos());
    }

    @GetMapping("/deletar/pedido")
    public ResponseEntity<Object> deletarPedido(@RequestBody StringWrapper numero_pedido) {
        cadastroService.deletarPedido(numero_pedido.getString());
        return ResponseEntity.ok().build();
    }

}

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
class StringWrapper {
    public String string;
}
