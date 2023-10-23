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
    public CadastroDTO getCadastro(@RequestBody CpfWrapper cpf) {
        return cadastroService.getCadastro(cpf.getCpf());
    }

    @GetMapping("/get/cadastros")
    public List<CadastroDTO> getCadastros() {
        return cadastroService.getCadastroList();
    }

    @PostMapping("/add/cadastro")
    public ResponseEntity<Integer> addCadastro(@RequestBody CadastroDTO cadastroModelo) {
        cadastroService.saveCadastro(cadastroModelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/cadastro")
    public ResponseEntity<Integer> updateCadastro(@RequestBody CadastroDTO cadastroModelo) {
        cadastroService.updateCadastro(cadastroModelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/delete/cadastro")
    public ResponseEntity<Integer> deleteCadastro(@RequestBody CpfWrapper cpf) {
        cadastroService.deleteCadastro(cpf.getCpf());
        return ResponseEntity.ok(200);
    }

}
