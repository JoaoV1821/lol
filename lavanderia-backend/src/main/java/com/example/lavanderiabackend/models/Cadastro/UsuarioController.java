package com.example.lavanderiabackend.models.Cadastro;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoStatus;
import com.example.lavanderiabackend.wrappers.CarrinhoWrapper;
import com.example.lavanderiabackend.wrappers.StringWrapper;

import jakarta.validation.Valid;

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
    public ResponseEntity<Object> addPedido(@Valid @RequestBody CarrinhoWrapper carrinhos) {
        cadastroService.addPedido(carrinhos.getCarrinhos());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/update/pedido/status")
    public ResponseEntity<Object> updatePedidoStatus(@RequestBody PedidoStatus pedidoStatus) {
        cadastroService.updatePedidoStatus(pedidoStatus.getStatus(), pedidoStatus.getNumeroPedido());
        return ResponseEntity.ok().build();
    }
/*  GET PEDIDOS ORIGINAL
    @GetMapping("/get/pedidos")
    public ResponseEntity<Object> getPedidos() {
        return ResponseEntity.ok().body(cadastroService.getListaPedidos());
    }
*/
    @GetMapping("/get/pedidos")
    public ResponseEntity<Object> getPedidos(@RequestParam(required = false) String status) {
        if (status != null) {
            return ResponseEntity.ok().body(cadastroService.getListaPedidosWithStatus(status));
        } else {
            return ResponseEntity.ok().body(cadastroService.getListaPedidos());
        }
    }


    @GetMapping("/deletar/pedido")
    public ResponseEntity<Object> deletarPedido(@RequestBody StringWrapper numero_pedido) {
        cadastroService.deletarPedido(numero_pedido.getString());
        return ResponseEntity.ok().build();
    }
}
