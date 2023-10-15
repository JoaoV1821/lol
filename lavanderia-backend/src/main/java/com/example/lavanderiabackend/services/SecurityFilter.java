package com.example.lavanderiabackend.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import com.example.lavanderiabackend.models.Cadastro.CadastroRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    TokenService tokenService;
    @Autowired
    CadastroRepository cadastroRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
                String token = recoverToken(request);
                if(token != null){
                    String subject = tokenService.validateToken(token);
                    UserDetails userDetails = cadastroRepository.findByEmail(subject);
                    if(userDetails != null){
                    var authentication = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
                filterChain.doFilter(request, response);
            }
    
    private String recoverToken(HttpServletRequest request){
        //String authHeader = request.getHeader("Authorization");
       // if(authHeader == null) return null;
       // return authHeader.replace("Bearer " ,"");
        Cookie cookie = WebUtils.getCookie(request, "AuthCookie");
        return cookie != null ? cookie.getValue() : null;
    }
}
