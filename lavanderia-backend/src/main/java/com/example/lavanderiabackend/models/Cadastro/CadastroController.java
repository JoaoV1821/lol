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
import com.example.lavanderiabackend.models.Cadastro.Wrappers.CpfWrapper;

@RestController
@RequestMapping("/cadastro")
public class CadastroController {
    
    private final CadastroService cadastroService;

    @Autowired
    CadastroController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @PostMapping("/get/cadastro")
    public ResponseEntity<CadastroDTO> getCadastro(@RequestBody CpfWrapper cpf) {
        CadastroDTO cadastroDTO = cadastroService.getCadastro(cpf.getCpf());
        if(cadastroDTO == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(cadastroDTO);
    }

    @GetMapping("/get/cadastros")
    public ResponseEntity<List<CadastroDTO>> getCadastros() {
        List<CadastroDTO> cadastros = cadastroService.getCadastroList();
        if(cadastros == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(cadastros);
    }

    @PostMapping("/add/cadastro")
    public ResponseEntity<Object> addCadastro(@RequestBody CadastroDTO cadastroModelo) {
        cadastroService.saveCadastro(cadastroModelo);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/update/cadastro")
    public ResponseEntity<Object> updateCadastro(@RequestBody CadastroDTO cadastroModelo) {
        cadastroService.updateCadastro(cadastroModelo);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/delete/cadastro")
    public ResponseEntity<Object> deleteCadastro(@RequestBody CpfWrapper cpf) {
        cadastroService.deleteCadastro(cpf.getCpf());
        return ResponseEntity.noContent().build();
    }

}
