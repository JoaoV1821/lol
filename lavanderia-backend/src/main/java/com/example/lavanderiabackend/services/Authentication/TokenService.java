package com.example.lavanderiabackend.services.Authentication;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.lavanderiabackend.models.Cadastro.Cadastro;

@Service
public class TokenService {
    @Value("${api.security.token.secret}")
    private String secret;

    public String generateToken(Cadastro cadastro){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create().withIssuer("lavanderia")
            .withSubject(cadastro.getEmail())
            .withExpiresAt(getExpirationDate())
            .sign(algorithm);
            return token;
        }catch(Exception e){
            throw new RuntimeException("Erro ao criar token!");
        }
    }

    public String validateToken(String token){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm).withIssuer("lavanderia").build().verify(token).getSubject();
        }catch(Exception e){
            System.out.println(e);
            return "";
        }
    }

    public Instant getExpirationDate(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
