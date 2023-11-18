package com.example.lavanderiabackend.models.Cadastro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.wrappers.StringWrapper;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/cadastro")
public class CadastroController {

    private final CadastroService cadastroService;

    @Autowired
    CadastroController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @PostMapping("/get/cadastro")
    public ResponseEntity<CadastroDTO> getCadastro(@Valid @RequestBody StringWrapper cpf) {
        CadastroDTO cadastroDTO = cadastroService.getCadastro(cpf.getString());
        return ResponseEntity.ok().body(cadastroDTO);
    }

    @GetMapping("/get/funcionarios")
    public ResponseEntity<List<CadastroDTO>> getFuncionairos() {
        List<CadastroDTO> cadastroDTOs = cadastroService.getFuncionarios();
        return ResponseEntity.ok().body(cadastroDTOs);
    }

    @GetMapping("/get/cadastros")
    public ResponseEntity<List<CadastroDTO>> getCadastros() {
        List<CadastroDTO> cadastros = cadastroService.getCadastroList();
        return ResponseEntity.ok().body(cadastros);
    }

    @PostMapping("/add/cadastro")
    public ResponseEntity<Object> addCadastro(@Valid @RequestBody CadastroDTO cadastroModelo) {
        cadastroService.saveCadastro(cadastroModelo);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/update/cadastro")
    public ResponseEntity<Object> updateCadastro(@Valid @RequestBody CadastroDTO cadastroModelo) {
        cadastroService.updateCadastro(cadastroModelo);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/delete/cadastro")
    public ResponseEntity<Object> deleteCadastro(@Valid @RequestBody StringWrapper cpf) {
        cadastroService.deleteCadastro(cpf.getString());
        return ResponseEntity.noContent().build();
    }

}
