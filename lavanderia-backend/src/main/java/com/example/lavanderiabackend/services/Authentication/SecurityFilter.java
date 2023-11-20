package com.example.lavanderiabackend.services.Authentication;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.util.WebUtils;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import com.example.lavanderiabackend.models.Cadastro.CadastroRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    // Ver como permitir exception Handling para Filtro JWT
    private final TokenService tokenService;
    private final CadastroRepository cadastroRepository;
    // private final HandlerExceptionResolver resolver;

    @Autowired
    public SecurityFilter(TokenService tokenService, CadastroRepository cadastroRepository,
            @Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.tokenService = tokenService;
        this.cadastroRepository = cadastroRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        Optional<String> token = recoverToken(request);
        if (token.isPresent()) {
            String subject = tokenService.validateToken(token.get());
            Optional<Cadastro> cadastro = cadastroRepository.findByEmail(subject);
            if (cadastro.isPresent()) {
                UserDetails userDetails = cadastro.get();
                // .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado!"));
                var authentication = new UsernamePasswordAuthenticationToken(userDetails, null,
                        userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        filterChain.doFilter(request, response);
    }

    private Optional<String> recoverToken(HttpServletRequest request) {

        Cookie cookie = (WebUtils.getCookie(request, "AuthCookie"));
        if (cookie == null)
            return Optional.empty();
        Optional<String> token = Optional.of(cookie.getValue());
        return token;
    }
}
