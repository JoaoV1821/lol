package com.example.lavanderiabackend.models.Pedido;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoInfo;

import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/api/pedido")
public class PedidoController {

    PedidoService pedidoService;

    @Autowired
    PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @GetMapping("/get/pedidos")
    public List<PedidoBody> getPedidos(@RequestParam(required = false) String dataInicial,
            @RequestParam(required = false) String dataPrazo, @RequestParam(required = false) String status) {
        return pedidoService.getPedidoList(dataInicial, dataPrazo, status);
    }

    @GetMapping("/get/receita")
    public Double getReceita(@RequestParam(required = false) String dataInicial,
            @RequestParam(required = false) String dataFinal) {
        return pedidoService.getReceita(dataInicial, dataFinal);

    }

    @PostMapping("/get/pedido")
    public PedidoBody getPedido(@RequestBody NumeroPedidoWrapper numero_pedido) {
        return pedidoService.getPedido(numero_pedido.getNumero());
    }

    @GetMapping("/get/pedidosInfo")
    public List<PedidoInfo> getPedidosInfo(@RequestParam(required = false) String dataInicial,
            @RequestParam(required = false) String dataPrazo) {
        return pedidoService.getPedidoInfoList(dataInicial, dataPrazo);

    }

    @PostMapping("/get/pedidoInfo")
    public PedidoInfo getPedidoInfo(@RequestBody NumeroPedidoWrapper numero_pedido) {
        return pedidoService.getPedidoInfo(numero_pedido.getNumero());
    }

    @PostMapping("/delete/pedido")
    public ResponseEntity<Integer> deletePedido(@RequestBody NumeroPedidoWrapper numero_pedido) {
        // pedidoService.deletePedido(numero_pedido.getNumero());
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/pedido")
    public ResponseEntity<Integer> updatePedido(@RequestBody PedidoBody pedido) {
        pedidoService.updatePedido(pedido.numero, pedido);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/status")
    public ResponseEntity<Integer> updateStatus(@RequestBody updateWrapper wrapper) {
        pedidoService.updateStatus(wrapper.getNumero(), wrapper.getStatus(), wrapper.getCpf());
        return ResponseEntity.ok(200);
    }

}

@Getter
@Setter
class NumeroPedidoWrapper {
    public Long numero;
}

@Getter
@Setter
class StatusWrapper {
    public String status;
}

@Getter
@Setter
class updateWrapper {
    public Long numero;
    public String status;
    public String cpf;
}