package com.example.lavanderiabackend.services;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import com.example.lavanderiabackend.models.Cadastro.CadastroRepository;
import com.example.lavanderiabackend.models.Cadastro.Papeis;
import com.example.lavanderiabackend.models.Cadastro.DTO.AuthenticationDTO;
import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroModelo;
import com.example.lavanderiabackend.models.Endereco.EnderecoService;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CadastroRepository cadastroRepository;

    @Autowired
    private EnderecoService enderecoService;

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody AuthenticationDTO data){
        UsernamePasswordAuthenticationToken  usernamePassword = 
        new UsernamePasswordAuthenticationToken(data.getLogin(), data.getPassword());
        this.authenticationManager.authenticate(usernamePassword);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody CadastroModelo data){
        if(this.cadastroRepository.findByEmail(data.getEmail())!=null) return 
            ResponseEntity.badRequest().build();
        Cadastro cadastro = new Cadastro(data);
        String password = cadastro.getEmail();
        Random random = new Random();
        String idRandom = String.format("%04d", random.nextInt(10000));
        password += idRandom;
        String encryptedPassword = new BCryptPasswordEncoder().encode(password);
        cadastro.setSenha(encryptedPassword);
        cadastro.setPapel(Papeis.USER);
        enderecoService.addCadastros(data.getEndereco(), List.of(cadastro));
        System.out.println("Senha : " + password + idRandom);
        return ResponseEntity.ok().build();
    }
}
