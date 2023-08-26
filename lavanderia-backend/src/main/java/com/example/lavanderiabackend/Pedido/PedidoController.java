package com.example.lavanderiabackend.Pedido;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.Pedido.DTO.PedidoBodyModelo;
import com.example.lavanderiabackend.Pedido.DTO.PedidoModelo;

@RestController
@RequestMapping("/pedido")
@CrossOrigin(originPatterns = "*")
public class PedidoController {

    PedidoService pedidoService;

    @Autowired
    PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @GetMapping("/get/pedidos")
    public List<PedidoModelo> getPedidos() {
        return pedidoService.getPedidoList();
    }

    @PostMapping("/get/pedido")
    public PedidoModelo getPedido(@RequestBody Long numero_pedido) {
        return pedidoService.getPedido(numero_pedido);
    }

    @PostMapping("/delete/pedido")
    public ResponseEntity<Integer> deletePedido(@RequestBody Long numero_pedido) {
        pedidoService.deletePedido(numero_pedido);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/pedido")
    public ResponseEntity<Integer> updatePedido(@RequestBody Long numero_pedido, @RequestBody PedidoBodyModelo body) {
        pedidoService.updatePedido(numero_pedido, body);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/add/pedido")
    public ResponseEntity<Integer> addPedido(@RequestBody PedidoModelo modelo) {
        pedidoService.addPedido(modelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/status")
    public ResponseEntity<Integer> updateStatus(@RequestBody Long numero_pedido, @RequestBody String status) {
        pedidoService.updateStatus(numero_pedido, status);
        return ResponseEntity.ok(200);
    }

}
