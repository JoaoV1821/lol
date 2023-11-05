package com.example.lavanderiabackend.models.Cadastro;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;

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

    @GetMapping("/get/pedidos")
    public ResponseEntity<Object> getPedidos() {
        return ResponseEntity.ok().body(cadastroService.getPedidos());
    }

    @PostMapping("/update/usuario")
    public ResponseEntity<Object> updateUsuario(@RequestBody CadastroDTO cadastroDTO) {
        cadastroService.updateCadastro(cadastroDTO);
        return ResponseEntity.ok().build();
    }
}
