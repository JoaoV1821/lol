package com.example.lavanderiabackend.Cadastro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.Cadastro.DTO.CadastroModelo;

@RestController
@RequestMapping("/cadastro")
@CrossOrigin(originPatterns = "*")
public class CadastroController {
    public CadastroService cadastroService;

    @Autowired
    CadastroController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @PostMapping("/get/cadastro")
    public CadastroModelo getCadastro(@RequestBody String cpf) {
        return cadastroService.getCadastro(cpf);
    }

    @GetMapping("/get/cadastros")
    public List<CadastroModelo> getCadastros() {
        return cadastroService.getCadastroList();
    }

    @PostMapping("/add/cadastro")
    public ResponseEntity<Integer> addCadastro(@RequestBody CadastroModelo cadastroModelo) {
        cadastroService.saveCadastro(cadastroModelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/cadastro")
    public ResponseEntity<Integer> updateCadastro(@RequestBody CadastroModelo cadastroModelo) {
        cadastroService.updateCadastro(cadastroModelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/delete/cadastro")
    public ResponseEntity<Integer> deleteCadastro(@RequestBody CadastroModelo cadastroModelo) {
        cadastroService.deleteCadastro(cadastroModelo);
        return ResponseEntity.ok(200);
    }

}
