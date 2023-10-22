package com.example.lavanderiabackend.models.Cadastro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroModelo;

import lombok.Getter;
import lombok.Setter;

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
    public CadastroModelo getCadastro(@RequestBody CpfWrapper cpf) { // tamanho // cpf é vi
    
        //return null
        return cadastroService.getCadastro(cpf.getCpf());
    }

    @GetMapping("/get/cadastros")
    public List<CadastroModelo> getCadastros() {
        return cadastroService.getCadastroList();

    }

    @PostMapping("/add/cadastro")
    public ResponseEntity<Integer> addCadastro(@RequestBody CadastroModelo cadastroModelo) {
        // return ResponseEntity.badRequest().build();
        // cadastroModelo.getCpf() // string cpf
        cadastroService.saveCadastro(cadastroModelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/cadastro")
    public ResponseEntity<Integer> updateCadastro(@RequestBody CadastroModelo cadastroModelo) {
        cadastroService.updateCadastro(cadastroModelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/delete/cadastro")
    public ResponseEntity<Integer> deleteCadastro(@RequestBody CpfWrapper cpf) {
        cadastroService.deleteCadastro(cpf.getCpf());
        return ResponseEntity.ok(200);
    }

}

@Getter
@Setter
class CpfWrapper {
    public String cpf;
}