package com.example.lavanderiabackend.models.Cadastro;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    
    private final CadastroService cadastroService;

    UsuarioController(CadastroService cadastroService){
        this.cadastroService = cadastroService;
    }

    @GetMapping("/get/usuario")
    public ResponseEntity<Object> getUsuario(){
        cadastroService.getUsuarioLogado();
        return ResponseEntity.ok().build();
    }

}
