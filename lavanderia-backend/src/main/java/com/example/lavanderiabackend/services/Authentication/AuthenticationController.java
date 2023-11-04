package com.example.lavanderiabackend.services.Authentication;

import java.util.List;
import java.util.Random;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.Exceptions.UserNotFoundException;
import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import com.example.lavanderiabackend.models.Cadastro.CadastroRepository;
import com.example.lavanderiabackend.models.Cadastro.Papel;
import com.example.lavanderiabackend.models.Cadastro.DTO.AuthenticationDTO;
import com.example.lavanderiabackend.models.Endereco.EnderecoService;
import com.example.lavanderiabackend.services.Authentication.DTO.LoginResponseDTO;
import com.example.lavanderiabackend.services.Authentication.DTO.UserDTO;
import com.example.lavanderiabackend.services.Cookie.CookieService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CadastroRepository cadastroRepository;

    @Autowired
    private EnderecoService enderecoService;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private CookieService cookieService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthenticationDTO data,HttpServletResponse response){
        
        UsernamePasswordAuthenticationToken  usernamePassword = 
        new UsernamePasswordAuthenticationToken(data.getLogin(), data.getPassword());
        Cadastro cadastro = cadastroRepository.findByEmail(data.getLogin())
        .orElseThrow(()->new UserNotFoundException("Usuario não encontrado!"));
        LoginResponseDTO responseDTO = new LoginResponseDTO(cadastro);
        Authentication auth = this.authenticationManager.authenticate(usernamePassword);
        String token = tokenService.generateToken((Cadastro)auth.getPrincipal());
        cookieService.create(response, "AuthCookie", token, false, -1, "localhost");
        return ResponseEntity.ok().body(responseDTO);
    }   

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody UserDTO data){
        if(this.cadastroRepository.findByEmail(data.getEmail())!=null) 
            return ResponseEntity.badRequest().build();
        Cadastro cadastro = new Cadastro(data);
        String password = cadastro.getEmail();
        Random random = new Random();
        String idRandom = String.format("%04d", random.nextInt(10000));
        password += idRandom;
        String encryptedPassword = new BCryptPasswordEncoder().encode(password);
        cadastro.setSenha(encryptedPassword);
        cadastro.setPapel(Papel.USER);
        enderecoService.addCadastros(data.getEndereco(), List.of(cadastro));
        System.out.println("Senha : " + password + idRandom);
        return ResponseEntity.ok().build(); // 200 Ok 
    }

    @PostMapping("/logout")
    public ResponseEntity<Object> logout(HttpServletResponse response){
        cookieService.clear(response,"AuthCookie");
        return ResponseEntity.ok().build();
    }
}
